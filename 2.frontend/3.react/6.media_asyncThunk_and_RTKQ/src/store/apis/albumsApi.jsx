import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  
  // We know that RTK query uses fetch under the hood. Now fetchFn() property gives us power to over-ride the behaviour of default fetch function. Here, FetchFn can receive all the args of RTK query and add 1 second delay and then return the same arguements.
  // This is only to see how the loading animations are coming in. 

  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          // return [{ type: 'UsersAlbums', id: album.userId }];
          // This could work if we have can pass the user and album to the invalidatesTags. It is very simple too. But we dont want to fiddle with props by refactoring certain components.    
          // In wanting of better design what we have done is modified the providesTags. Look below for more details.
          return [{ type: 'UsersAlbums', id: user.id }];
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
              // It generates a random product name which we have decided to use as the album name
              // So every album will contain these two details along with server generated id
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          // return [{ type: 'Album', id: user.id }];
          // Above approach will give us one tag for one endPoint. So whenever we make a request, this is the tag that will be associated with that request.
          // But what we have done below is, we have added one tag for each album + an additional tag for the user
          // Now once we remove an album, one of the tags will be invalidated based on album.id. Here we are getting the album.id from response (result) of RTK query. 
            // To put it simply, rather than passing albums as props by modifying components, we are making use of the response data of RTK query and adding the property - album.id to each album and we are also adding the property - user.id. 
              // Now whenever we add an album, we can make use of user.id property.  
          const tags = result.map((album) => {
            return { type: 'Album', id: album.id };
          });
          tags.push({ type: 'UsersAlbums', id: user.id });
          return tags;
          // 
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };

// About Tags
  // It is used to mark certain queries as being 'out of date' after specific mutations are executed. They can be a function or an array of strings or objects with an id/type.
  // We will add a tag() to the corresponding endPoint. Whenever a request is made to that endPoint, the tag associated with that will mark that query as stale/out of date. This will wipe away all of its data. 
  // Now this will be followed by another request (exactly the same request that we make for fetching Albums) to fetch the entire list of data from the server. 
  // Add providesTags: ['string'] in query and add invalidatesTags: ['string'] in mutations. The strings should be same. What happens here? 
    // See we are adding a tag called Albums (say), to all the albums. So whenever you click a header, the albums corresponding to that user will be displayed by sending a get request. 
    // When you send a post request to add an album, after adding the album, we will invalidate the query (empty the data) on the client side with invalidatesTags. 
    // Then we will send another request to get all the datas from the server.
  // But this also has an issue. When we have two or more user's albumns opened at the same time and send the post request from any user to add an album, the album will be added to the server followed by tag invalidation which invalidates every user's album that is open because all of them that is open will have the tags named 'Album' and refetch datas for all the users again.  Instead of refetching the list of albums only for the user to which we have added to new album, we are refetching the list of albums for every user that has expanded (If not expanded, we won't have any data regarding albums of that user. so tags will not come into picture at all) 

// How do we overcome the above issue?
  // Very simple. Just provide information about the user to the RTK query. 
  // So providing information means 'providesTags' should be a function. When it is a function, it can take 3 arguments => result, error and arg and returns an array of objects. So for a single endPoint, we can assign multiple different tags. Here even if one tag is invalidated, endPoint will refetch the data. 
    // Each retruned tag can be a string (like 'Post'), or an object with a type and an optional id (like {type: 'Post', id: 1}).
  // result and error are provided by the RTK query depending up on whether the request is successful or failed
  // arg is the parameter that we have passed to the hook when we called them. In our case, it is user.
  // Since we are dealing with positional arguments here, we have to specify result and error even though we are not making any use of them.
  // result and error in the providesTags function can be useful in certain scenarios.
    // Result: Sometimes, the tags we want to provide or invalidate might depend on the data returned from the query or mutation. For example, if we are fetching a list of items, we might want to provide a separate tag for each item in the list. We can use the result to dynamically generate these tags based on the actual data returned from the API.
    // Error: In some cases, we might want to handle errors differently depending on whether the query or mutation was successful or not. For example, if an error occurs, we might not want to invalidate certain tags. We can use the error to conditionally provide or invalidate tags based on whether an error occurred.