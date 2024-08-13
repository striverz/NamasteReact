# What is the difference between Monolith and Microservice?
<img src="https://src.n-ix.com/uploads/2022/12/22/1d3487fc-2caf-4985-bbb6-1257091561cf.png">

## Monolithic Architecture:
In a monolithic architecture, all the components of an application are bundled together into a single codebase. This means that the user interface, business logic, and data access layers are tightly integrated into one application.
### Advantages:
`Easy deployment` – One executable file or directory makes deployment easier.

`Development` – When an application is built with one code base, it is easier to develop.

`Performance`: Direct communication between components within the same process can be faster.

`Easier Debugging`: Since everything is in one place, debugging and tracing issues can be simpler.



### Disadvatages
`Maintenance`: As the application grows, the codebase can become large and difficult to manage.

`Deployment Risk`: Any changes require the entire application to be redeployed, which increases the risk of downtime.

`Scalability` – You can’t scale individual components.

`Reliability` – If there’s an error in any module, it could affect the entire application’s availability.

## Microservices Architecture:
In a microservices architecture, an application is broken down into smaller, independent services that communicate with each other through APIs. Each service typically handles a specific business function.
### Advantages:
`Scalability`: Services can be scaled independently based on their specific needs.

`Flexibility`: Different services can be developed using different technologies, languages, or databases.

`Resilience`: If one service fails, it doesn't necessarily bring down the entire application.

`Faster Deployment`: Individual services can be deployed independently, allowing for more frequent updates.

## Disadvantages:
`Complexity`: Managing multiple services and ensuring their communication can be complex.

`Deployment Overhead`: Managing and deploying many services can require sophisticated tooling and orchestration.

<img src="https://d1.awsstatic.com/Developer%20Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png">

# Why do we need a useEffect Hook?
The useEffect hook is a function in React that allows developers to perform `side effects` in a functional component. This can include things like data fetching, setting up subscriptions, responding to the component's lifecycle events, or updating the DOM in response to changes in state or props.

The useEffect react hook is called after every render and takes a callback function as an argument, which contains the code for the side effect. This allows for a cleaner and more declarative approach to managing side effects in functional components.

In the useEffect hook in React, the dependency array is an optional argument that you can pass to the hook. This array should contain a list of values that the hook depends on, and the hook will only be executed if one of these values changes.

In the useEffect hook in React, an empty array can be passed as the second argument to indicate that the hook does not have any dependencies. This means that the hook will only be executed once when the component is initially rendered.

## `Syntax`:
```
// 1. import useEffect
import { useEffect } from 'react';

const MyComponent=()=> {
  // 2. call it above the returned JSX  
  // 3. pass two arguments to it: a function and an dependency array
  useEffect(() => {}, []);
  
  // return ...
}
```

### Example of useEffect for fetching the data
```

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://my-api.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    // component JSX goes here
  );

```
# SideEffects in programming?
A side effect occurs when a function or program performs an action that goes beyond simply returning a value. This action might involve changing the program's state, interacting with external systems, or causing observable effects in the environment outside the function.

### Example 1: Modifying a Global Variable
In this example, we have a function that increments a global variable. The function performs a side effect by altering the state of a variable that exists outside its scope.
```
let count = 0; // Global variable

function incrementCount() {
  count += 1; // Side effect: modifying a global variable
  return count;
}

console.log(incrementCount()); // 1
console.log(incrementCount()); // 2
```
Here, incrementCount is not a pure function because it modifies the global variable count, which is a side effect. The function's behavior depends on and alters an external state, making it less predictable and harder to manage.


### Example 2: Altering Function Arguments
When a function modifies its arguments, it causes a side effect by changing the original data that was passed to it.
```
function addElementToArray(arr, element) {
  arr.push(element); // Side effect: modifying the original array
  return arr;
}

const myArray = [1, 2, 3];
const newArray = addElementToArray(myArray, 4);

console.log(myArray); // [1, 2, 3, 4]
console.log(newArray); // [1, 2, 3, 4]

```
In this example, the addElementToArray function modifies the arr array directly. This is a side effect because the original array (myArray) is changed, which might not be expected by other parts of the code that use myArray.

### Example 3: React useEffect Hook

[FOR REFERENCE LINK](https://www.scaler.com/topics/react/useeffect/)

In React, side effects are often handled using the useEffect hook. For example, fetching data from an API or subscribing to an event are side effects.
```
import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data') // Side effect: fetching data from an external API
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []); // Empty dependency array means this side effect runs once after the initial render

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

```
In this React example, the useEffect hook runs after the component mounts and fetches data from an external API. Fetching data is a side effect because it involves an asynchronous operation that interacts with the outside world (the network) and updates the component's state.

`Summary`:
Side effects occur when a function or program does more than just compute and return a value—it also changes some external state or interacts with the environment. This can include modifying global variables, altering data structures, performing I/O operations, or making network requests. `While side effects are often necessary, they need to be managed carefully to avoid making the program's behavior unpredictable and difficult to maintain`.

# What is optionalChaining?
Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to manually check if each reference in the chain is valid (i.e., not null or undefined). It helps to avoid runtime errors that occur when trying to access a property of null or undefined.

Syntax
Optional chaining uses the ?. operator. Here's a basic example:
```
const user = {
  profile: {
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

// Accessing nested properties safely with optional chaining
const city = user?.profile?.address?.city;
console.log(city); // Outputs: 'New York'

```
* Without optional chaining, you'd have to manually check if each property in the chain exists before accessing the next one to avoid errors.

* With optional chaining, this can be done more succinctly with user?.profile?.address?.city.

Use Cases
* Optional chaining is particularly useful in scenarios such as:

* Accessing data from APIs that may not always return a fully populated object.
Working with deeply nested data structures where some properties may be optional or missing.

# What is ShimmerUI?
<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VN-Fijz8nHBcl9hs6kCeUw.gif">

Shimmer UI refers to a design pattern or effect used in user interfaces to indicate that content is loading. It's often seen as a placeholder animation that mimics the look of a gradient or light moving across a surface, usually in the shape of the content that is being loaded, such as text, images, or other UI elements. The purpose of the shimmer effect is to provide a visual cue that something is happening in the background, improving the user experience by reducing perceived loading times.

# What is conditional Rendering?
Conditional rendering in JavaScript, particularly in frameworks like React, refers to the process of rendering different components or elements based on certain conditions.
```
import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  // Conditional Rendering using if-else
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} /> {/* Change this to false to see the other message */}
    </div>
  );
}

export default App;
```
# What is CORS?

[REFERENCE LINK](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

CORS, which stands for Cross-Origin Resource Sharing, is a security feature implemented by web browsers to control how resources (like fonts, APIs, or web pages) from one origin (domain) can be requested and accessed by a web page from a different origin. This is important because, by default, web browsers block requests made from one domain to another due to the same-origin policy for security reasons.

How CORS Works:
Same-Origin Policy: Under this policy, a web page can only request resources from the same domain, protocol, and port number. For example, if a web page is served from https://example.com, it can't access resources from https://another-domain.com without permission.

CORS Headers: CORS allows servers to specify who can access their resources and how they can be accessed by using HTTP headers:

`Access-Control-Allow-Origin`: Specifies which origins are allowed to access the resource. It can be a specific domain or a wildcard * to allow all domains.
`Access-Control-Allow-Methods`: Specifies the HTTP methods (GET, POST, PUT, DELETE, etc.) allowed when accessing the resource.
`Access-Control-Allow-Headers`: Specifies which headers can be used in the actual request.
`Access-Control-Allow-Credentials`: Indicates whether or not the response to the request can be exposed when credentials (like cookies or HTTP authentication) are included in the request.

## Example:
If https://site-a.com wants to fetch data from an API at https://api.site-b.com, the server at api.site-b.com must include a CORS header like this:
``` Access-Control-Allow-Origin: https://site-a.com
```
his tells the browser that site-a.com is allowed to access the resource at api.site-b.com.

CORS is a critical aspect of web security. It helps prevent malicious websites from making unauthorized requests to servers, protecting sensitive data from being exposed or manipulated.

## `Solve these after learning Namaste-JS(S-02)

# What is async and await?
# What is the use of `const json = await data.json();` in getRestaurants()