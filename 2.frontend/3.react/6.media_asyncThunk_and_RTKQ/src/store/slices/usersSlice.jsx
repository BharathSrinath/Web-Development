import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      // state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.error;
    });

    builder.addCase(addUser.pending, (state) => {
      // state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      // state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeUser.pending, (state) => {
      // state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      // state.isLoading = false;
      // state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;

// Note: We have commented out isLoading and error property as we do not need them anymore. We have already achieved their functionality with these components => usersList, usersListItem and use-thunk. But for understanding purpose we have left it as it is. Look below to know how we have achieved this.

// Fine grained loading State - with thunk: (We have used the same approach with RTK Query too) 
  // The issue: Whenever we add an user, we see the skeleton element during loading. Why? Because whether you make an initial request to fetch all the users or you make a reuqest to add a new user, it will start with a pending state which will set 'isLoading:true'. But this is not ideal. Imagine the user experience when they are having a poor connection or the server side throttling for some reason. Or even with a good connection we want to show animation only with respect to the button (addUser) that has been clicked. We can disable the button (so that user will not click again and again making new requests) and show loading animation (like a spinning wheel) while rest of the page is not affected. This is where Fine grained loading State comes into picture.
// It refers to the practice of tracking loading status at a detailed and specific level within your application. Instead of using a single, global loading indicator, fine-grained loading allows you to manage and reflect the loading status of individual components, data entities, or specific asynchronous operations separately.
  // This is basically going back to the beginning. Maintaining separate state variable for each kind of request. But wait a minute..... We are using a redux here. The concept of redux itself is the centralised state management.
  // But in real world projects we may use both depending up on the project. So it is good know that both redux and component state management can exist in a single project. 

// Flow of the project (with respect to users alone):
// Initial loading of the app is handled by fetchUsers; add functionality is handled by UsersList; delete functionality is handled by usersListItem. 
// The click event handler for add/delete and dofetch users within useEffect (both of which has the access to custom thunk) will run the thunk function in the custom-thunk.
  // Custom-thunk function is where the dispatch happens. We are dispatching the fetchUsers/addUser/removeUser function which are defined as separate components.
  // It is from these components, the post request is made to the JSON server. 
// Now based on the state of request (pending/rejected/fulfilled), states are updated in usersSlice component.  