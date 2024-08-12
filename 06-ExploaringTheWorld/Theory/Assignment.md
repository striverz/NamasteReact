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