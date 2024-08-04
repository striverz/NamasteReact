# Is `JSX` mandatory for React?
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
#  Is ES6 mandatory for React?
While ES6 (ECMAScript 2015) is not strictly mandatory for using React, it is highly recommended and widely used within the React ecosystem. Here are a few reasons why ES6 is beneficial when working with React:

`Syntax Improvements`: ES6 introduces cleaner and more concise syntax for JavaScript, making code easier to read and maintain. Features like arrow functions, template literals, and destructuring assignment help streamline your code.

`Classes`: React components are often written as ES6 classes, which provide a clearer and more structured way to define components compared to the older React.createClass method.

`Modules`: ES6 modules allow you to import and export functionality across different files, promoting better code organization and reusability.
# {TitleComponent} vs {<TitleComponent/>} vs{<TitleComponent></TitleComponent>} in JSX

# How can I write comments in JSX?
In JSX(JavaScript XML), you can use curly braces {} to embed JavaScript expressions, including comments. However, unlike regular JavaScript comments (which are used ‘ /* */ ' for multi-line comments and ‘ // ' used for single-line comments), JSX comments are treated as JavaScript expressions.
#  What is <React.Fragment></React.Fragment> and <></> ?
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
There is also a new short syntax for declaring them.

There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:
```
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```
You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.
# What is Virtual DOM?
[VIRTUALDOM LINK](https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/#:~:text=The%20virtual%20DOM%20is%20a,the%20performance%20of%20web%20apps.)

# What is Reconciliation in React?
# What is React Fiber?


# What is props in React?
Props(short for properties) are used to pass data from one component to another. They are read-only and immutable, which that a component cannot modify its own props.
### Example:
```
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Usage
const App = () => {
  return <Greeting name="Alice" />;
};

export default App;
```
# What is Config-driven UI?
A Config Driven UI is an approach to building user interfaces where the structure, layout, and behavior of the UI are determined by a configuration file or data object rather than hard-coded logic. 

# Why we need keys in React? When do we need keys in React?
In React, keys are essential for efficiently updating the UI when rendering lists of elements. They help React identify which items have changed, been added, or been removed, allowing for optimized rendering and minimal DOM operations.

Why We Need Keys in React
Identify Elements Uniquely: Keys help React identify each element uniquely within a list, which is crucial for maintaining the correct association between elements and their corresponding data.

Efficient Reconciliation: During the reconciliation process, React uses keys to determine how to update the UI. By comparing keys between the previous and current render, React can determine the minimal set of changes required, improving performance.


# Can we use index as keys in React?
Yes, you can use the index of an array as a key in React, but it's generally not recommended except in specific situations. Using the index as a key can lead to issues, particularly when the list can change (e.g., items being reordered, added, or removed). Here’s a deeper dive into when it’s appropriate to use index as keys and the potential pitfalls:

When is it Okay to Use Index as Keys?
Static List: If the list of items is static and will not change (no additions, deletions, or reordering), using the index as a key is acceptable.
Simple Lists: For very simple lists where each item is unique and the list does not change dynamically.  

``` NO keys <<<< using index as key <<<<<<< Unique Key Using ```
