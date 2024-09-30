# What would happen if we do `console.log(useState())`?
## Expected Behaviour:
Assuming you're inside a React functional component and you pass a default value to useState, `console.log(useState(defaultValue))` will log an array with two elements to the console.

The first element is the current state value (initialized with the default value).

The second element is a function that you can call to update the state.

### Example:
```
const [state, setState] = useState('default value');
console.log(useState('default value'));
```

If do `console.log(useState())` it is also gives an array of 2 values, but the first value is `undefind`
and second one the function.

# What is Single Page Application(SPA)?
A Single Page Application (SPA) in React.js is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. This approach provides a smooth, responsive user experience without the need for full page reloads.

## Key Features of a SPA in React.js:
### Single HTML File:
SPAs in React are typically served with a single HTML file (often index.html). This file remains the same as users navigate through different views of the application.

### Dynamic Routing:
React Router is commonly used for client-side routing. It allows the app to change the URL and render different components without refreshing the page.
For example, navigating to /about might render an About component, but the page does not actually reload.

### Component-Based Architecture:
React encourages building applications as a collection of components. Each component represents a part of the UI and can manage its own state, making it easy to build and maintain complex UIs.

# What is difference between Client Side Routing and Server Side Routing?
## `Server-Side Routing`
How it works: Every time you click a link or enter a URL in your browser, the browser sends a request to the server. The server then processes the request, determines which page or data to send back, and sends a whole new HTML page to the browser.

Example: Imagine you’re on a website, and you click a link to go to a "Contact Us" page. The browser sends a request to the server, which then sends back the entire "Contact Us" page as a new HTML file. Your browser then displays this new page.

## `Client-Side Routing`
How it works: With client-side routing, the initial page load happens from the server, but after that, all routing (changing views or pages) happens within the browser. JavaScript handles the routing by loading only the parts of the page that need to change.

Example: Imagine you're on a single-page application (SPA) like Gmail. When you click to go to another section (like switching from "Inbox" to "Sent"), the browser doesn't load a new page. Instead, JavaScript updates the content without needing to talk to the server.

`Server-Side Routing`: Each click/load gets a new full page from the server.
`Client-Side Routing`: Initial load from the server, then JavaScript handles all routing and content changes within the same page.