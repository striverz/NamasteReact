# Q) Is `JSX` mandatory for React?
No, JSX is not mandatory for React, but it is commonly used because it provides a more intuitive syntax for defining the structure of the UI components. JSX allows you to write HTML-like code within JavaScript, making it easier to visualize the component structure and manage the DOM.

You can use plain JavaScript to create React components by using the React.createElement method. Here's an example of both approaches:

Using JSX
```
const element = <h1>Hello, world!</h1>;
```
Without JSX
```
const element = React.createElement('h1', null, 'Hello, world!');
```
