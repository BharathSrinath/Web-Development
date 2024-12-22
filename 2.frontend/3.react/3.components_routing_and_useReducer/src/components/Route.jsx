import useNavigation from '../hooks/use-navigation';

// We have used navigation and Link component to decide what can appear at the address bar
// Now based on the address, we are display contnet on the screen.
// To achieve this we are creating a new component called Route and pass them 'path' prop and children.
// Here children will be the respective component that we want it to appear on the page based on the path and the currentPath (which is being obtained from navigation)

function Route({ path, children }) {
  const { currentPath } = useNavigation();
// We are wrapping every component under Route
// When a user clicks on a link in the page, we will get the 'currentPath' using event handler and we pass the 'path' along with execution of 'Route' from App component.
// So when they match, we will return the respective component. If it doesn't match (lets say the link has broken down), we will return null
  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;

// Lets understand routing:
// In an HTML based app, we will have multiple html files and we will make a request for one particular file to see their content. When we use the same navigation princicple with react based apps, this is what will happen. First request for index.html and then another request for JS file that is linked within the html file and then another request for a relevant component to be displayed. WHen the component changes, we have to begin from first request of index.html 
//  Navigation in react
  // 1. When the user has directly typed the address and making request 
    // No matter what user has typed in url, index.html will be requested. (be it example.com or example.com/something).
      // react project tools automatically does that for us
    // Next, JS file that is linked with html file will be requested.
    // Now react will look at the address bar (we have to code that) and see the route portion of the address. Depending up on the route portion react will decide what component to be shown (again we have to the write the code for it).
      // It will remove the existing component and show the new component
  // 2. When the user is clicking forward/backward or clicking some link after the initial load,
    //  We will write code prevent the defualt behaviour where a new request will be made
    // Rather, we will handle the navigation ourselves. How?
      // When a user a link within page or clicks forward/backward, we will update the address bar alone tricking the user that they are navigating.
      // Now react will look at the route portion and do the same thing as mentioned above

// Real world impact:
// In traditional server-side routing, when a user clicks on a link or enters a URL, the server sends back a new HTML page, causing a full page reload (because all the existing JS variables and code is dumped by the browser). Client-side routing, on the other hand, updates the view and the URL without triggering a full page reload.
// In fcc projects we have seen that we will have multiple html documents for every section that we deem necessary and then link them together. If we don't break-down in several parts, it will become very complicated like the initial version of 'cricket scorecard manager' project where we are hiding old contents to display new content (which is the worst way to write a code)
// But with react what we are developing is 'single page applications'. We have one html file. This file will have access to all the components. With an initial request we get all the structural details of a website. This wesbite will have several link that will help us to display the components that the user needs.
  // Both Single-Page Applications (SPAs) built with React and traditional Multi-Page Applications (MPAs) built with HTML do make multiple requests to the server. However, the nature of these requests and how they affect the user experience is different.
  // In a traditional MPA, each time you navigate to a new page, the browser makes a request to the server for the entire HTML document of that page. The server processes the request, generates the full HTML page, and sends it back to the client. This results in a full page refresh in the browser.
  // In a SPA like those built with React, the initial load of the application fetches the necessary JavaScript, CSS, and a single HTML file. As you navigate through the application, instead of fetching new HTML documents, the SPA updates the URL and swaps out components on the page as needed (with new API requests).
  // When it comes to fetching data (like a list of products or the details of a blog post), both SPAs and MPAs often use API requests to fetch only the data they need from the server, rather than a full HTML document. This data is then used to update the view in the browser. In a SPA, this can be done without a full page refresh, leading to a smoother user experience.