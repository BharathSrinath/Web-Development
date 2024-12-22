// API (Application Programming Interface) - It is essentially a way for different software applications to talk to each other and exchange data, just like a waiter facilitates communication between you and the kitchen in a restaurant.

// AJAX
// Actual full form is Aysnchronous JavaScript and XML. But we dont use XML rather use JSON
// So eventhough it is referred as AJAX, here X is replaced by J (JSON)
// It refers to a group of technologies that are used to develop web applications. 
// It is a powerful technique that enables web applications to fetch and send data to a server asynchronously, resulting in a more responsive and interactive user experience.
// It uses (based on what we use)
  // 'DOM' for dynamically interacting with and displaying the presented information.
  // 'JSON HttpRequest object' to manipulate data asynchronously with the web server.
  // 'JSON' for data interchange and manipulation.
  // 'JS' for binding data requests and information display.
// Simple Explanation of AJAX:
// Lets say we want to update or fetch data from a server without making the user to wait for a full page reload.
// We use JS to send a request to the server, asking for data. 
// The request to fetch/send data will go to JS interpreter (AJAX engine) in the browser. This will make the request to the server.
// The server processes your request and sends back the data (mostly JSON)
// Web page receives the data and updates itself without refreshing. It might change some text, show new images, or do other things to make the page more interactive.
// In a traditional web application, HTTP requests, that are initiated by the user's interaction with the web interface, are made to a web server. The web server processes the request and returns an HTML page to the client. During HTTP transport, the user is unable to interact with the web application.                       
// ---------------------------                         --------------------------                
// |  ---------------------  |                         |  ---------------------  |
// |  |                   |--|------ HTTP Request------|->|                   |  |
// |  |   User interface  |  |                         |  |     Web server    |  |
// |  |                   |<-|------HTML and CSS data--|--|                   |  |
// |  ---------------------  |                         |  ---------------------  |
// ---------------------------                         |        |       |        |
//                                                     |        |       |        |  
//                                                     |  ---------------------  |
//                                                     |  |                   |  |
//                                                     |  |    Data Backend   |  |
//                                                     |  |                   |  |
//                                                     |  ---------------------  |
//                                                     |-------------------------|
// In an Ajax web application, the user is not interrupted in interactions with the web application. The Ajax engine or JavaScript interpreter enables the user to interact with the web application independent of HTTP transport to and from the server by rendering the interface and handling communications with the server on the user's behalf.
// ---------------------------                         ---------------------------                                         
// |  ---------------------  |                         |  ---------------------  |
// |  |                   |  |           |-------------|->|                   |  |
// |  |   User interface  |  |     HTTP request        |  |     Web server    |  |
// |  |                   |  |           |   ----------|--|                   |  |
// |  ---------------------  |           |   |         |  ---------------------  |
// |                         |           |   |         |        |       |        |
// |                         |           |   |         |        |       |        |  
// |  ---------------------  |           |   |         |  ---------------------  |
// |  |   AJAX engine     |--|-----------|   |         |  |                   |  |
// |  |   JavaScript      |  |    HTML and CSS data    |  |    Data Backend   |  |
// |  |   interpreter     |<-|---------------|         |  |                   |  |
// |  ---------------------  |                         |  ---------------------  |
// |-------------------------|                         |-------------------------|

// |----------------------------------------------------------------------------------------------------------------|
// | Aspect                  | Before AJAX                               | After AJAX                               |
// |-------------------------|-------------------------------------------|------------------------------------------|
// |Page Reload vs.          |Traditional web pages required a full page |With AJAX, only specific parts of the page|
// |Partial Update           |reload when fetching new data or performing|(usually content) can be updated          |
// |                         |actions. This process was slower and less  |dynamically, without reloading the entire |
// |                         |interactive.                               |page. This enhances user experience and   |
// |                         |                                           |responsiveness.                           |
// |----------------------------------------------------------------------------------------------------------------|
// |Data Retrieval           |Data retrieval typically involved          |AJAX allows asynchronous data retrieval.  |
// |                         |synchronous requests (e.g., form           |You can request data from the server after|
// |                         |submissions or link clicks), causing the   |the initial page load, without disrupting |
// |                         |entire page to reload.                     |the user’s interaction.                   |
// |----------------------------------------------------------------------------------------------------------------|
// |Background Requests      |All requests were foreground (blocking),   |AJAX requests happen in the background,   | 
// |                         |leading to slower interactions.            |allowing users to continue interacting    |
// |                         |                                           |with the page while data loads.           |
// |----------------------------------------------------------------------------------------------------------------|
// |User Experience          |Users experienced noticeable delays during |AJAX provides a smoother experience by    | 
// |                         |page reloads.                              |updating specific sections without        |
// |                         |                                           |interrupting the overall flow.            |
// |----------------------------------------------------------------------------------------------------------------|
// Examples of AJAX Use:
  // Dynamic Content: Loading comments, news feeds, or search results without refreshing the entire page.
  // Form Validation: Checking form input validity without submitting the form.
  // Autocomplete Suggestions: Providing real-time suggestions as users type.
  // Live Chat: Updating chat messages without page reloads.

//----------------------------------------------------------------------------------------------------------------------

// JSON (JavaScript Object Notation)
// When you make an API request, the data that you get will be in JSON (most common) format (others are XML, HTML, Text/plain, binary)
// They look like JS objects, but they are not JS. They are also comprised of key-value pairs. But here the keys are also enclosed in double quotes. Also JS objects can have 'undefined' as a value. But JSON cannot.
// It is completely language independent. It uses conventions that are familiar to programmers. This makes it an ideal data-interchange language. 
// So, JSON is not just for JS. It is used in most programming languages. 
// JSON is a string that needs to parsed with JSON.parse to make it readable/accessibile for programmers.
// Making a request will return a String of JSON (not an object)
//Example: const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`
// We will convert this string to object using parsing
// Example: const parsedData = JSON.parse(data);
// We can do the oppoiste too. This can be used to send or store JS data as a string, such as when sending data to a server, saving it in a database, or storing it in local storage.
// Example: const jsonString = JSON.stringify(person);
// JSON is the most popular format. Why?
  // Human-Readable: JSON is easy to read and write for humans.
  // Lightweight: JSON is text-based and lighter compared to other formats like XML.
  // Easy to Parse: JSON is easy to parse and generate in most programming languages.
  // Native JS Support: Since JSON is a subset of JS, it integrates seamlessly with JS code.
//----------------------------------------------------------------------------------------------------------------------

// Query Strings
// It is a component of a URL that is used to pass data to a web server as part of an HTTP request
// It appears after the question mark "?" and consists of one or more key-value pairs, separated by ampersands "&".
// They are used to search information (https://www.udemy.com/courses/search/?src=ukw&q=javascript+DSA), access specific page of website (https://www.udemy.com/user/coltsteele), submit form, etc.

//----------------------------------------------------------------------------------------------------------------------

// Common HTTP status codes
// 1. Successful Responses:
  // 200 OK: The request was successful, and the server has returned the requested data.
  // 201 Created: The request was successful, and a new resource was successfully created as a result.
  // 204 No Content: The server successfully processed the request, but there is no content to send in the response.
// 2. Client Error Responses:
  // 400 Bad Request: The server cannot process the request because the client sent an invalid or malformed request (like invalid query parameters or missing paremeters).
  // 401 Unauthorized: The request requires authentication, and the client has not provided valid credentials (like a invalid username and password).
  // 403 Forbidden: The server understood the request, but it refuses to authorize it. The client may not have the necessary permissions. Here, the client is authenticated, but they don't have the necessary permissions to access the requested resource. (valid credentials but doesn't have the required permissions)
  // 404 Not Found: The server did not find the requested resource. This is a common response for a missing page or endpoint.
  // 405 Method Not Allowed: The request method (GET, POST, PUT, DELETE, etc.) is not allowed for the requested resource.
// 3. Server Error Responses:
  // 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request. It can happen due to bugs in the server-side code, issues with the server's configuration, or problems with the server's dependencies.
  // 503 Service Unavailable: The server is not ready to handle the request. Common causes include maintenance, overloading (that leads to a crash)), or temporary server issues. 

//----------------------------------------------------------------------------------------------------------------------

// HTTP headers
// That provide additional information about the request or response being sent between a client and a server.
// They contain metadata that helps both the client and server understand and handle the content of the message.
// Examples:
// 1. Request Headers:
  // a) User-Agent: Identifies the user agent (Ex: the browser or application) making the request.
  // b) Accept: Informs the server about the types of media that the client can process.
      // Example: */* => It is named as wildcard  and it means it can accept any type of content
  // c) Authorization: Provides credentials for authenticating the client with the server.
  // d) Content-Type: Specifies the media type of the resource sent in the request.
// 2. Response Headers:
  // a) Server: Provides information about the software used by the origin server.
  // b) Set-Cookie: Sets a cookie on the client's browser for session management or tracking purposes.
  // c) Location: Used in redirections or to provide the URL of a newly created resource.
  // d) Content-Type: Specifies the media type of the resource sent in the response.
// 3. General Headers:
  // a) Cache-Control: Directs caching mechanisms in both requests and responses.
  // b) Connection: Controls whether the network connection should be kept open or closed after the current request/response.
  // c) Date: Represents the date and time at which the message was sent.
// 4. Entity Headers: (Ignore this as of now as it is more advanced level of information)
  // a) Content-Length: Specifies the length of the response body in octets (8-bit bytes).
  // b) Content-Encoding: Specifies the encoding transformations that have been applied to the resource.
  // c) Content-Language: Describes the natural language(s) of the intended audience for the response.
//  Developers often interact with headers when configuring servers, handling requests, and optimizing web applications for performance and security.

//----------------------------------------------------------------------------------------------------------------------

// Making requests:

// 1. XMLHttpRequest 
// Even though AJAX being primarily about asynchronous communication, the XMLHttpRequest object itself is flexible and can be used for both asynchronous and synchronous requests. (Just know this is an information. Don't induldge too much)
// Old method. We will not be using them anymore. But you should know from where we are coming.
// Methods:
  // 1. open(method, url, async, user, password):
    // a) method: The HTTP method to use (GET, POST, etc.).
    // b) url: The URL to send the request to.
    // c) async (optional): Whether the request should be asynchronous/synchronous (asynchronous/true by default).
    // d) user (optional): Username for authentication (if required).
    // e) password (optional): Password for authentication (if required).
  // 2. send(body):
    // body (optional): It will be null for GET requests. For POST requests, this could be the data to send.
// There are several other methods like setRequestHeader(header, value), abort(), getResponseHeader(header), getAllResponseHeaders(), overrideMimeType(mimeType), etc. But we are not going over them in detail as XMLHttpRequest itself is outdated.
// Properties: readyState, status, statusText, responseText, responseXML, response, timeout, withCredentials, etc.
// Event Handler Properties: onreadystatechange, onload, onerror, ontimeout, onabort, etc. 

// JUST KNOW THAT XMLHttpRequest EXISTED IN THE FIRST PLACE. IT IS NOT IMPORTANT TO DWELVE DEEPER. EVEN THE DETAILS MENTIONED ABOVE ARE PURELY FOR REFERENCE PURPOSES.

// Example: 
const req = new XMLHttpRequest();
req.open("GET", "https://swapi.dev/api/people/1/");
req.addEventListener("load", function () {
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
});
req.addEventListener("error", function () {
  console.log("ERROR!!!!");
  console.log(this);
});
req.send();

// 2. Fetch - Modern JavaScript API.
// Fetch returns a promise. So you handle it just like a promise
// You kow that when the promise is resolved, .then will be executed. Here the resolved function will hold the response object that has been obtained by fetch. This response can be accessed by .then (which is represented as 'res' below). 
// But the the response cannot be used directly as it is not the actual data rather a readable stream. Depending up on the type of API, we should be using different methods.  Below we are using a JSON API, so we will use res.json() for JSON APIs to convert the readable stream into a JavaScript object.
// Example 1:
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
    // This step is neccessary because, the Response object contains information about the response, including headers and status. It provides methods like .json(), .text(), and .blob() to handle different types of response bodies. Here we are using .json(). 
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// XMLHttpRequest vs fetch:
// 1. XMLHttpRequest relies on callback functions like onload and onerror for handling responses and errors. In contrast, fetch uses Promises
// 2. The syntax is much simpler with fetch
// 3. We are not using methods such as req.open, req.send, etc. in fetch
// 4. Unlike XMLHttpRequest, fetch does not consider HTTP errors (like 404 or 500) as a rejection by default. It considers network errors as rejections, but HTTP errors are treated as successful responses. You need to check the ok property of the response or use response.ok in a then block to handle HTTP errors explicitly.

// Example 2:
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((res) => {
    console.log("SECOND REQUEST RESOLVED!!!");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// Optimising the above example with async function
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};
loadStarWarsPeople();

// 3. Other methods - Postman, Hopscotch and Axios
// Postman: It is a API development tool that allows developers to design, test, and document APIs. It provides a user-friendly interface for making HTTP requests, inspecting responses, and organizing API development workflows.
// Hopscotch: It is a lightweight library for adding product tours or guided walkthroughs to a website or web application. It is primarily used for creating interactive onboarding experiences for users.
// Axios: A JS library specifically for making HTTP requests and handling responses in a web browser or Node.js environment.
// While postman and hopscotch are external tools which needs to be installed separately or can be used directly as a web application, axios are external library that can be imported into your projects. (<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>)
// Difference between fetch and Axios - You will not know many things here. But just trust that you will learn them in future so that when you back to the same topic for revision everything will make sense. As of now just go with the flow
// ---------------------------------------------------------------------------------------------------------------
// |         Feature               |             Axios                  |             fetch API                  |
// |-------------------------------|------------------------------------|----------------------------------------|
// | API Style                     | Higher-level API - automatic       | No automatic transformation            | 
// |                               | transformation of JSON data        |                                        |
// | Promises                      | Promise-based                      | Promise-based                          |
// | Request/Response Interceptors | Yes                                | No                                     |
// | Default Configuration         | Sensible defaults                  | Requires more manual configuration     |
// | Browser Compatibility         | Works in browsers and Node.js      | Native browser API, may need polyfills |
// | Error Handling                | Automatic rejection on HTTP errors | Resolves promise even for HTTP errors  |
// | Cancellation                  | Supports canceling requests        | No built-in support for canceling      |
// ---------------------------------------------------------------------------------------------------------------

// axios syntax:
  // axios.get(url, config){....}
  // axios.post(url, data, config){....}
// config is an object that can include - headers, params, data, timeout, auth, responseType, validateStatus, etc.

// Example 1:
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE: ", res);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

// Same example with async, try and catch and getting data with a help of an id (Here the data like id is obtained from website which provides us sample api to learn how they work)
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};
getStarWarsPerson(5);
getStarWarsPerson(10);

// IMPORTANT THING THAT YOU MISSED: XMLHTTP or axios specifically mentions the HTTP method like (get or post) but we dont see the same with fetch. Why is that?
  // The default method for fetch is GET if we don't explicitly specify one.
  // If we want to use POST method, this is how we do.
    // fetch('https://example.com/api/data', {
    //   method: 'POST'
    // })
  // Since we haven't seen many examples for fetch we might have overlooked this 

// Example 2: This website generates random jokes. We are using the API to get random jokes with a click of a button and append the jokes one after the other in a list.

const jokes = document.querySelector("#jokes"); // unordered li
const button = document.querySelector("button"); // click me button
button.addEventListener("click", async function addNewJoke() {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("Li");
  newLi.append(jokeText);
  // appending the li to ul
  jokes.append(newLi);
});
const getDadJoke = async () => {
  try {
    const config = { 
      headers: { 
          Accept: "application/json" 
      } 
    };
    // API can return data in many formats like HTML/text format, json format, etc. You can change the format under headers. This information can be obtained from API documentation. This means that the key-value pair that is used above will vary from API to API.   
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    // Here data is the property under res and joke is a property under data. So again it differs from API to API
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

// Example 3: This API has all the american shows. Here we are using it to extract images that matches the word in a search bar.

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  // Here we are making use of the name attribute. 'query' is the value of the 'name' attribute 
  const config = { 
    params: { 
      // More about config at the end
      q: searchTerm 
    } 
  }
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data)
  form.elements.query.value = ''; // Resetting the value once search is completed
})
const makeImages = (shows) => {
  console.log(shows)
  for (let result of shows) {
    if (result.show.image) {
      // If there is no image, it will skip that 
      // The term 'show' and 'image' in if conditions are specific to that API 
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img)
    }
  }
}

// Config Options for axios
  // 1. url: The URL to send the request to.
  // 2. method: The request method, e.g., 'get', 'post'.
  // 3. baseURL: A base URL that will be prepended to url unless url is absolute.
  // 4. headers: Custom headers to be sent.
  // 5. params: URL parameters to be sent with the request.
  // 6. data: Data to be sent as the request body (used mainly for POST, PUT, PATCH).
  // 7. timeout: The number of milliseconds before the request times out.
  // 8. responseType: Indicates the type of data that the server will respond with. Options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'.
  // 9. responseEncoding: The encoding to use for the response. Default is utf8.
  // 10. maxContentLength: The maximum size of the HTTP response content in bytes.
  // 11. maxBodyLength: The maximum size of the HTTP request content in bytes.
  // 12. auth: HTTP Basic Auth credentials, includes username and password.
  // 13. proxy: Proxy configuration to be used for the request.
  // 14. cancelToken: A cancel token to cancel the request.
  // 15. withCredentials: Indicates whether or not cross-site Access-Control requests should be made using credentials.
  // 16. xsrfCookieName: The name of the cookie to use as a value for xsrf token.
  // 17. xsrfHeaderName: The name of the HTTP header that carries the xsrf token value.
  // 18. onUploadProgress: Allows handling of progress events for uploads.
  // 19. onDownloadProgress: Allows handling of progress events for downloads.