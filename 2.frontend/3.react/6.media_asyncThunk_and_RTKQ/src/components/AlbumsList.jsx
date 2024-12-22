import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  // const output = useFetchAlbumsQuery(user);
  // console.log(output)
    // currentData : (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // data: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      // the actual response contents from the server for the most recent successful cache entry data. This field will be undefined until the response is received.
    // endpointName: "fetchAlbums"
    // fulfilledTimeStamp: 1725345945100
    // isError: false
      // a boolean indicating if the last request had an error
    // isFetching: false
      // a boolean indicating if the hook is currently making any request to the server
    // isLoading: false
      // a boolean indicating if this hook is currently making the first request to the server because there isn't any data yet. (Note that if the parameters change to request different data, isLoading will remain false.)
    // isSuccess: true
      // a boolean indicating if the hook has made a successful request and has cached data available (ie, data should be defined now)
    // isUninitialized: false
    // originalArgs: {name: 'Penny Quitzon', id: 9}
    // refetch: () => {…}
    // requestId: "vhju_jorntQbEXAzMeChU"
    // startedTimeStamp: 1725345943081
    // status: "fulfilled"
 
  const [addAlbum, results] = useAddAlbumMutation();
  // Mutation hook returns an array with two arguments. 
  // Unlike query, with mutation we are changing data on the server. So we have to specify when the data should be added/edited/deleted. 
  // So the first arguments ('addAlbum') is the function provided by the the mutation hook. We can call this function based on the user's action. 
  // First argument is the function and second is an object (just like the query hook which has lot of properties) 
    // isError: false
    // isLoading: false
    // isSuccess: false
    // isUninitialized: true
    // originalArgs: undefined
  // Just like useState's setter function, 
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
    <div className='w-[90%] mx-auto'>
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

// Difference between isFetching and isLoading:
  // isLoading is true only when you load the data for the first time. So once we get data or an error, it will go to false and will never change to true again. But isFetching is true whenever you fetch the data.
  // We generally use this to decide when to show animations to the user. Like "show the loading spinner only during the initial load or show it every time"
  