import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  console.log(user)
  // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // return response.data;
  console.log(user)
  return user;
  // Why not return response.data just like addUser? See the goal is when adding a user, we are fetching something (fake data) from the json-server and returning that data. So, that data needs to be returned to the usersList.
  // But when we are deleting a data, returning response.data will return a data object with empty payload property. So what happens is that, server deletes the data. When you console.log(response.data) we can see the payload property to be an empty object. But With this data we can't do anything at the userSlice to filter out the deleted user. Because we don't know which user was deleted from this return statement.
    // Note: Server adding/deleting your data will not add/remove the data from your screen. We have to write the code.   
  // So returning 'user' will help us to know which user should be filtered out when displaying. So from where are we getting this user data?
    // From the click event handler, we will pass the user to removeUser() and then it is executed in the custom thunk. Here the dispatch happens. Then removeUser() is called with user argument which is where the post request is made (that is here). We return the user which has been asked to delete and then update the state in the userSlice.
    // Click event handler got the 'user' prop from userList where we amp out the list of users. It is in this mapping function we name individual user to be 'user'.
});

export { removeUser };
