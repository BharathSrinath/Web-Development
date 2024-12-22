import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  // user is passed from UsersListItems (doRemoveUser(user))
  // const response = await axios.delete(`http://localhost:3005/users/${user.id}`);
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // return response.data;
  return user;
  // Why not return response.data just like addUser? See the goal is when adding a user, we are fetching something (fake data) from the json-server and returning that data. So, that data needs to be returned to the usersList.
  // But when we are deleting a data, returning response.data will return a data object with empty payload property. So what happens is that, server deletes the data. When you console.log(response.data) we can see the payload property to be an empty object. But With this data we can't do anything at the userSlice to filter out the deleted user. Because we don't know which user was deleted from this return statement.
});

export { removeUser };
