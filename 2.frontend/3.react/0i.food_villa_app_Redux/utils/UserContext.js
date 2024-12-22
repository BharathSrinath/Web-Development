import { createContext } from "react";

// Here we haven't used the provider component to wrap them over the components to which they can have access to. Any component can import this and use by passing the variable name to the useContex() hook. 
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";
// This line is only for react dev tool extension.
// It doesnt display the context name by default. For all contexts it displays it as "Context.Provider". So when there are so many context's created it will be difficult for us to track.  

export default UserContext;