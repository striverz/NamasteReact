/*
creating the nexted structure in react
<div id="parent">
    <div id ="child">
       <h1>Heading 1</h1>
       <h2>Heading 2</h2>
    </div>
</div>
 */

const root=ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
         "div",
         {id:"child"},
         [React.createElement("h1",{},"Heading 1"),React.createElement("h2",{},"Heading 2")]
        ),   
    );

root.render(parent);
