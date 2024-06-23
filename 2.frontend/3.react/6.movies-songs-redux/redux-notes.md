# Redux vs useReducer
    # Redux is a standalone (not related to react) state management library for JS applications using the same techniques as useReducer
    # It follows a unidirectional data flow and is designed to manage the state of an application in a predictable way. 
    # Redux utilizes actions and reducers to update the application state. With useReducer we have one reducer() to manage the state but in redux we will have multiple reducers each managing different part of the state.
      # useReducer is for managing state within a single component. It is local to the component where it is used. But Redux is used to manage global state across the entire application. It allows you to centralize and manage state in a predictable way.
      # In the context of Redux, the state is managed globally in a centralized store, and components can access it without the need for prop drilling (just like context). Redux operates outside the component tree, providing a way to manage application state without directly passing it through the component hierarchy.
      # We can have multiple sub-reducer functions handling different parts of the global centralised state. Each sub-reducer function behaves similarly to how useReducer works at the local state level within a component. 
    # Unlike useReducer where we need to specify action for every dispatch(), Redux simplifies the action type creation process.

# Redux Toolkit
    # It is also a library that uses redux and makes using redux even more easy.
    # It is wrapped around plain Redux.
    # Immer is a built-in package with Redux toolkit hence we are allowed to mutate states.

# Connecting react to redux:
    # Export store component from the file in which it is created and imported it in the index.js. Also import provider from react-redux in index.js
    # Wrap the APp component with the Provider, pass the store to the provider.  

# Slices:
    # They automatically create reducers and action types
    # See with useReducers we manually create them right? Here they are created automaticallyw ithe createSlice()
    # There are 3 functions fo slices:
      1. Defines initial state - We have an empty array. It could be anything (an array, an object, strings, etc.) 
      2. Combines mini-reducers into a big reducer. 
        # You can consider the mini-reducers as switch-case that we have used with useReducers. # Every function within the mini-reducer is like the individual case statement.
        createSlice has a property called 'reducer' which is the big reducer that combines all the functions with-in the reducers object into one reducer. This combined reducer is the one which gets loaded into redux store.
        # But lets ask the same question. How does the mega-reducer knows which individual function to run?
          # createSlice follows a template. It combines the name property with a slash followed by the functionName. This when matches with dispatching action (type property), that function will be executed. But we need not worry about creating actions as they are handled as below.  
          # Example: 'song' + '/' + 'addSong' = 'song/addSong'
      3. Creates a set of 'action-creator' functions   
          # state within mini-reducers is the local state related to the local component (that is songs or movies in our project) and not the major big centralsied state. (I hope you know this)
          # What does this mean? It means that, this state will access to changes only that happens to songs or videos and not both depending upon the mini-reducer.
          # createSlice has another property called 'actions'. When you console.log(songsSlice.actions) you will see that createSlice() has already created actions based on the name and functions under mini-reducers in the above format (song/addSong).
          # So, while dispatching we do not need to create actions separately.
          # All we need to do, Name of the slice function followed by method operator (.) followed by the key word actions which is again followed by method oeprator and finally the name of the function within the mini-reducer. Function can take an argument which will be the payload. 
            # Example: songsSlice.actions.addSong('payload')

# Changing the state:
    # Add a reducer to one of your slices where the fucntion defines what should kind of change needs to be made
      # Example: state.push (action.payload)
    # Export the action creator that the slice automatically creates
    # Find the component form where we want to dispatch (that is from where the state should be updated)
    # In that component, we have import 'useDispatch' hook and also the action creators that we have exported in step 2.
    # Call teh 'useDispatch' hook to get access to teh dispatch function
      # This hook actually makes use of the context system to reach up our component heirarchy and get access to the dispatch function from the Redux store.
    # Finally, whenever the user does something (like click, hover, etc.) we call the action creator function (in the eventHandler obviously) to get an action and the dispatch it. This action object will be sent to reducers. They will run and update our states. 

# Accessing the state:
    # Find the component that needs to access the state
    # Here, import 'useSelector' hook from react-redux
      # useSelector allows you to access the state from the Redux store. You provide a callback function (selector) that takes the entire Redux state as an argument and returns the specific piece of state that your component needs.
      # Example: "const selectedValue = useSelector(state); return state.songs"
        # In this example, state is the ENTIRE Redux state (movies and songs in our case), and state.songs represents the specific piece of state you want to extract.
      # The component that uses useSelector, automatically subscribes to the selected part of the state. This means that whenever the selected state changes, the component will re-render.
      # useSelector uses memoization to ensure that the callback function is only executed when the selected part of the state it depends on changes.
      # You can use multiple useSelector hooks in a single component to extract different parts of the state.
    # Call the hook, passing in a selector function
    # Use the state! Anytime state changes, the component will automatically rerender

# Multiple state updates
  # Resetting the state:
    # There are scenarios where when we hit reset we want multiple states to be cleared.
    # Typically, when resetting the state, we assign it an empty string, array, or object (if it was empty to begin with), or assign the initial value if it had some value.
    # But Redux Toolkit includes the Immer library, which expects the state to be mutated with new values. Unlike the common approach of reassigning the state variable directly (e.g., `state = []`), Immer cannot detect this reassignment.
    # Instead of changing the state variable directly, with Immer, we should modify the state by updating its properties or elements. This ensures that Immer can correctly track and apply the changes.
    # Generally updated state is implicitly returned. But in this scenario we will explicitly return an empty array. (return [])  
    # So basically we can return an empty object/array/string/etc., in mini-states wherever we want to reset and then dispatch two separate actions whenever the reset button is clicked. But there are better ways. Please look into the actual code. 

# Exporting
    # Files in our component folder need specific imports from store/slices/files.js. However, we should try to avoid directly importing from slices, especially action creators. Instead we should use the file store/index.js for centralized state management. The directive is to import there and then re-export. Why?
      1. Directly importing from slice files can create tight coupling between components and the internal structure of our state management. By importing through a central file, you reduce this coupling. Components only need to know about the central file, not the details of how the state is managed.
      2. Having a central file for exports can simplify import statements throughout our application. Instead of importing from various slice files in different components, you can import everything you need from a single file, improving code organization and readability.
      3. By importing and re-exporting from a central file, you create an abstraction layer between the rest of our application and the specifics of how our state management is implemented. This abstraction can make it easier to switch to a different state management solution in the future without affecting the rest of our codebase.
      4. To avoid circular imports issue


# Redux Store design
  1. Identify what state exists in the app
  2. Identify how that state changes over time
  3. Group together common pieces of state
  4. create a slice for each group

When you look at the above steps, doesn't it ring a bell? It is similar to general state creation process. Exactly it is. Execpt that we are trying to have one central state from which we will manage all the other mini-states.