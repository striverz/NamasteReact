# 1. What is Emmet?

* Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow

* Emmet is the essential toolkit for web-developers. It allows you
to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS.



## Generating HTML Skeleton
The first thing you would do when creating a HTML page is create the skeleton for it, that is type DOCTYPE, html,head, body tags.

What it you could do all that with just 2 keys? Yeah Emmet let’s you do that.

Just type ‘!` in the editor, it will show a pop up with the content that will be generated, press enter and there you have your HTML skeleton . Cool isn’t is?

<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wgJno5JeA8C6HqiMUd7Uig.png">

## Generate a list 3 li’s , each li has an anchor(a) tag:
``` 
ul>li*3>a 
```
<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*amQIRkLG-M6faa3zs0F5kg.png">

# 2.Difference between a Library and Framework?
# 3.What is CDN?
* CDN stands for `Content Delivery Network`!
A content delivery network (CDN) is a group of servers spread across different geographical locations worldwide to enable the quick delivery of a website’s content. It is also known as a content distribution network.
<img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aRlozFzadEGW-xRHsACY0w.jpeg">

# 4. Why is React known as React?
* React is a `JavaScript Library`,The name ‘React’ was chosen
because 
* it "reacts" quickly to changes without reloading the whole page.
* It uses the virtual DOM to efficiently update parts of a webpage.
* It’s built around components that "react" and update.

# 5. What is diference between React and ReactDOM
## React
* `React` is used to define and create components, handle state, and manage the component lifecycle. 
* Core Methods: `React.createElement`, `React.Component`, `useState`, `useEffect`, and other hooks and lifecycle methods.
## ReactDOM

* `ReactDOM` is used to render those components to the DOM and handle DOM-specific actions.
* Core Methods: `ReactDOM.render`, `ReactDOM.createPortal`, `ReactDOM.findDOMNode`, and ReactDOM.unmountComponentAtNode.
# 6. What is difference between react.development.js and react.production.js files
## react.development.js / Development Mode
Development mode, as the name suggests, is primarily used during the development phase of your React application. Here are some key characteristics of React’s development mode:
* `Debugging Information`: In development mode, React provides helpful error messages and warnings in the console. This makes it easier to identify and fix issues in your code.

* `Fast Refresh`: React’s development server supports a feature called “Fast Refresh,” which allows you to see changes in your code almost instantly without having to manually refresh the browser.

* `Optimizations Disabled`: The development mode intentionally avoids certain performance optimizations to provide a better debugging experience. This may result in slower application performance compared to production mode.

* `Large Bundle Size`: The JavaScript bundle generated in development mode is larger because it includes development-specific code and warnings.

## Production Mode
Production mode is optimized for deploying your React application in a production environment. Here are the key characteristics of React’s production mode:
* `Performance Optimization`: React removes development-specific code and optimizations to make your application faster and more efficient.

* `Smaller Bundle Size`: The JavaScript bundle generated in production mode is smaller, reducing load times for your users.

* `Minification and Compression`: In production mode, your code is minified and compressed, further reducing bundle size

# 7. What is async and defer? 

The <script> tag in HTML is used to include JavaScript code on a webpage. There are different ways to include scripts using this tag, and the behavior of how the script is loaded and executed can vary depending on the attributes used. The primary attributes that affect this behavior are async and defer.

# `Normal <script> Tag` <br>

When you include a script without any attributes, the browser will:
Stop parsing the HTML document.
Fetch the script.
Execute the script.
Resume parsing the HTML document after the script has been executed.
This can block the rendering of the page, making it slower for users to see the content.


```
<script src="script.js"></script>
```

# `<script> Tag with async` <br>

When you use the async attribute:

The browser fetches the script in parallel with parsing the HTML document.
Once the script is fetched, it is executed immediately.
HTML parsing is paused during the execution of the script and resumes after it finishes.
This attribute is best used for scripts that do not depend on other scripts or the DOM being fully loaded.


```<script src="script.js" async></script>```


# `<script> Tag with defer` <br>
When you use the defer attribute:

The browser fetches the script in parallel with parsing the HTML document.
The script is executed only after the HTML document has been fully parsed.
The scripts with the defer attribute are executed in the order they appear in the document.
This attribute is useful for scripts that need the DOM to be fully loaded before they run.


```<script src="script.js" defer></script>```

<img src="https://media.licdn.com/dms/image/D5612AQEYCnsZ1f9GFQ/article-cover_image-shrink_600_2000/0/1699370054733?e=2147483647&v=beta&t=MeKuUXk5QMblVoausf5p3swTkBCICOHoRsijQqMfxZE">

# 8. What is crossorigin in script tag?