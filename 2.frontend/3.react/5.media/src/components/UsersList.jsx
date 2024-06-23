// Without custom hook
  // import { useEffect, useState } from 'react';
  // import { useDispatch, useSelector } from 'react-redux';
  // import { fetchUsers, addUser } from '../store';
  // import Button from './Button';
  // import Skeleton from './Skeleton';

// With custom hook
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/use-thunk'; // custom hook
import UsersListItem from './UsersListItem';  

function UsersList() {
  // Without custom hook

  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);
  // // These are individual state components to handle loading and error which was initially handled by useSelector itself
  // const dispatch = useDispatch();
  // const { data } = useSelector((state) => {
  //   return state.users;
  // });

  // useEffect(() => {
  //   setIsLoadingUsers(true);
  //   // Before dispatching the request we will show the skeleton animation
  //   dispatch(fetchUsers())
  //     .unwrap()
  //     // Once the request is successful, we want the loading animation to be false. we could have put that under .then(). Also if it is failed loading animation should be false. That we can put that under .fianlly(), a feature of promise that will execute after all the .then and .catch are executed. Here sicne .then() and .finally() are same we are not using .then() at all.  
  //     .catch((err) => setLoadingUsersError(err))
  //     .finally(() => setIsLoadingUsers(false));
  // }, [dispatch]);
  // // Generally we dont include anything as the second argument for one time update. Here including/not including won't make any difference.
  // // Because dispatch is not a state variable here. If so whenever state changes, useEffect() will be executed. Since it is not a state variable, it will not have any effect.

  // const handleUserAdd = () => {
  //   setIsCreatingUser(true);
  //   dispatch(addUser())
  //     .unwrap()
  //     .catch((err) => setCreatingUserError(err))
  //     .finally(() => setIsCreatingUser(false));
  // };

  // With custom hook

  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  // In funcitons names are subject to local scope. We returned [runThunk, isLoading, error] from use-thunk. But here we haved named them as above
  // Depending up on what we have passed (fetchUsers/addUsers), the return value is going to change. You know this. But just a little bit confused since you are seeing custom hooks after a long time.
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
}



export default UsersList;


// About unwrap()
// We know that dispatch() under async thunk returns a promise. When we chain .then() and .catch() to a promise, in general .then's first argument will executed when the promise is resolved and .catch's first argument will be executed when the promise is rejected. 
// But AsyncThunk function handles Promises differently. When we dispatch an action created by createAsyncThunk, it returns a Promise that always resolves, regardless of whether the async action was fulfilled or rejected.
// This design choice in Redux Toolkit is to ensure that the Redux store is always updated, even if an error occurs during the execution of the async action.
// The Promise returned by dispatch resolves so that the Redux store can be updated with the error information, allowing the UI to react accordingly.
// To align with the typical Promise behavior, Redux Toolkit provides the .unwrap() method. 
// When we call .unwrap() on the Promise returned by dispatch, it will resolve to the value of the fulfilled action, or throw on a rejected action just like a usual promise does. This means that if the async action fails, .unwrap() will throw an error, and .catch() will be called  .
