import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  // Recollection:
    // When you return an array, deconstruction happens based on position of the arguments
    // When you return an object, deconstruction happens based on name of the arguments
  // Here when you call the hook useFetchAlbumsQuery(user); it returns an object with many properties among which we are extracting data, isError and isFetching.
 
  const [addAlbum, results] = useAddAlbumMutation();
  // Mutation hook returns an array with two arguments. 
  // First argument is the function and second is an object (just like the query hook which has lot of properties) 
  // So why do we have a function here? See query hook will fetch the data exactly as it is the server. Hence it can immediately display the data.
  // But mutation changes the conent in the server based on users interaction. Depending up on the users action we may want to make the respective changes. 
  // Here when the user clicks the AddAlbums button we will add the albums. 

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (isError) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;

// Difference between isFetching and isLoading property in return value of hooks
// isLoading is true only when you load the data for the first time. So once we get data or an error, it will go to false and will never change to true again. But isFetching is true whenever you fetch the data.
// We generally use this to decide when to show animations to the user. Like "show the loading spinner only during the initial load or show it every time"

// Why pass the 'user' as argument?
// We need to tell which users album we are trying to fetch.
// When we call the call the back, it basically goes to albumsApi and calls the query function under endPoints.

// Difference between query hook and mutation hook
  // Query Hooks: 
    // These are used for requests that retrieve data. 
    // They return an object with several properties representing the most recent information for the query request and status booleans for the request’s lifecycle state.
    // They run immediately when the component will be updated on the screen.
  // Mutation Hooks: 
    // They are used to send data updates to the server and apply the changes to the local cache (look at EOP for more). 
    // They do not contain a semantic distinction between ‘loading’ and ‘fetching’ in the way that a query does. 
    // For a mutation, subsequent calls are not assumed to be necessarily related, so a mutation is either ‘loading’ or ‘not loading’, with no concept of 're-fetching’.
      // This is why mutation hook just adds/deletes content to/from the server. But the content is not automatically updated in our redux store.
      // Now we can update the list of albums in 2 ways:
        // 1. Return the response from the server after mutating and use that response to update the redux store.
        // 2. After creating a new album, make a second request to get the list of all albums.
  
// Using the response vs Getting all with new request
  // Option1:
    // Only one request needs to be made
    // But, imagine a situation where you want to show the list of albums sorted by publish date. Now when you fetch the response from the server where will it be added? Wherver it is added, the list is not sorted now. To overcome this we can definitelt apply sorting algorithm after that. But applying sorting for everytime we add/delete an album? This is certainly not the efficient way and it becomes even more complicated when you have multiple pages in the app.
  // Option 2:
    // We have to make two requests.
    // But there is a huge upside to this method.  
    // Since mutation generally doesn't involve refetching we are going to make use of something called "tag system" from RTK query.

// const handleAddAlbum = () => {
  // addAlbum(user);
// };
// This is what sends the request to the server. Once the album is added, we have am issue. What? Our redux store content and the server content are out of sync. (No automatic refetching for mutation hooks). This is where tag system is used. Refer to albumsApi.

// About local cache:
  // Cache are like a small memory bank where RTK Query stores the results of API calls. This is like a mini-database inside our application.
  // How it works:?
    // Initial Fetch: When we make a request to fetch data (like getting a list of albums), RTK Query sends the request to the server and then stores the response data in its cache.
    // Reading Data: When our components need to use this data, they read from the cache. This makes your app faster and reduces unnecessary server load.
    // Updating Data: When we perform a mutation (like adding a new album), RTK Query sends the request to the server. Once the server confirms that the mutation was successful, RTK Query updates the relevant data in its cache with the new information. We then use the function returned by mutation hook to update the state in client side from the data in cache. 
    // Automatic Re-render: Because your components read data from the cache, they automatically re-render to show the new data when the cache is updated.
// So, the main purpose of the cache is to help our app manage server data more efficiently. It keeps track of what data our app has already fetched, so it doesn’t need to re-fetch the same data unnecessarily. And when data changes, it updates the cache so your components always has the most up-to-date data.