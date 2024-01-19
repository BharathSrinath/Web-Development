// API (Application Programming Interface) - It is essentially a way for different software applications to talk to each other and exchange data, just like a waiter facilitates communication between you and the kitchen in a restaurant.

// AJAX
// Actual full form is Aysnchronous JavaScript and XML. But we dont use XML rather use JSON
// So eventhough it is referred as AJAX, here X is replaced by J (JSON)
// It refer to a group of technologies that are used to develop web applications. 
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
// ---------------------------                         ---------------------------                                         
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

//----------------------------------------------------------------------------------------------------------------------

// Query Strings
// It is a component of a URL that is used to pass data to a web server as part of an HTTP request
// It appears after the question mark "?" and consists of one or more key-value pairs, separated by ampersands "&".
// They are used to search information (https://www.udemy.com/courses/search/?src=ukw&q=javascript+DSA), access specific page of website (https://www.udemy.com/user/coltsteele), submit form, etc.

//----------------------------------------------------------------------------------------------------------------------

// Common HTTP status codes
// 200 OK: The request was successful, and the server has returned the requested data.
// 201 Created: The request was successful, and a new resource was successfully created as a result.
// 204 No Content: The server successfully processed the request, but there is no content to send in the response.
// 400 Bad Request: The server cannot process the request because the client sent an invalid or malformed request.
// 401 Unauthorized: The request requires authentication, and the client has not provided valid credentials.
// 403 Forbidden: The server understood the request, but it refuses to authorize it. The client may not have the necessary permissions.
// 404 Not Found: The server did not find the requested resource. This is a common response for a missing page or endpoint.
// 405 Method Not Allowed: The request method (GET, POST, PUT, DELETE, etc.) is not allowed for the requested resource.
// 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
// 502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from an upstream server.
// 503 Service Unavailable: The server is not ready to handle the request. Common causes include maintenance, overloading, or temporary server issues.
// 504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server. 

//----------------------------------------------------------------------------------------------------------------------

// HTTP headers
// Thet provide additional information about the request or response being sent between a client (usually a web browser) and a server.
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
// 4. Entity Headers:
// a) Content-Length: Specifies the length of the response body in octets (8-bit bytes).
// b) Content-Encoding: Specifies the encoding transformations that have been applied to the resource.
// c) Content-Language: Describes the natural language(s) of the intended audience for the response.
//  Developers often interact with headers when configuring servers, handling requests, and optimizing web applications for performance and security.

//----------------------------------------------------------------------------------------------------------------------

// Making requests:

// 1. XMLHttpRequest - Old method. We will not be using them anymore. But you should know from where we are coming.
// Example: 
const req = new XMLHttpRequest();
req.onload = function () {
  // This is a shortcut to assign event handler (addEventListener) with XMLHTTPRequest. Without shortcut,
  // req.addEventListener("load", function () {...}
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  // I hope you know this. But still. 'this' refers to the object that triggered the event, which is the XMLHttpRequest in this case.
  // 'responseText' is a property of the XMLHttpRequest object (req in this case). It represents the textual response content received from the server as a result of the HTTP request.
  console.log(data.name, data.height);
};
req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
};
req.open("GET", "https://swapi.dev/api/people/1/");
// These are not event handlers by the way. They are methods provided by the XMLHttpRequest object to configure and send HTTP requests.
// It initializes the request by specifying the HTTP method (such as "GET" or "POST") and the URL to which the request will be sent. It prepares the request but does not send it.
req.send();
// It sends the HTTP request to the server.

// 2. Fetch - Modern JavaScript API/.
// Fetch returns a promise. So you handle it just like a promise
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
// 1. We dont use any event handlers in fetch. 
// Example: XMLHttpRequest relies on callback functions like onload and onerror for handling responses and errors. In contrast, fetch uses Promises
// 2. The syntax is much simpler is fetch
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
// Difference between fetch and Axios - You will not know have many things here. But just trust that you will learn them in future so that when you back to the same topic for revision everything will make sense. As of now just go with the flow
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
    const config = { headers: { Accept: "application/json" } };
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
  const config = { params: { q: searchTerm } }
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data)
  form.elements.query.value = ''; // Resetting the value once search is completed
})
const makeImages = (shows) => {
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