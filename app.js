import React from "react";
import ReactDOM from "react-dom/client";

// creating a react core elemet.
//React.createElemet - React element => Object =>HTML Element(Rendered)
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heads" },
  "hello raj from react ! How are you"
);

//parent nesetd and siblings
const parent = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "childdiv1" }, [
    React.createElement(
      "h1",
      { id: "heading1" },
      "I am Elder Brother - Rajkumar"
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "I am younger Brother - Rajpaul"
    ),
  ]),
  React.createElement("div", { id: "childdiv2" }, [
    React.createElement(
      "h1",
      { id: "heading3" },
      "I am Elder Brother - Shaun Marshh"
    ),
    React.createElement(
      "h2",
      { id: "heading4" },
      "I am younger Brother - Mitchell Marsh"
    ),
  ]),
]);

// creating a JSX Elemet
//JSX => (Parcel-Babel) => Reactelement = > HTMLElement(rendered)

const jsxheading = <h1 id="jsxheading">Hello Rajkumar - JSX Eelemet</h1>;

const jsxelement = (
  <h1 tabIndex="3" className="elem">
    Namaste React - JSX Wrapped
  </h1>
);

const pretelemt = (
  <h2 id="pretformat" className="prettiest">
    Hello am to be wrapped and formatted by prettier
  </h2>
);

console.log(pretelemt)

// functional comppnent :
//a js function which return react elemet - React Functional componnet

const Title = () =>{
  return (<div className="tfc">
    <h1>I Am component compostion heading 1</h1>
    <h2>I Am component compostion heading 2</h2>
    </div>)
}

const HeaderCom = ()=>{
  return (
    <div> 
  <h1 className="rfc">Hi I Am A React Functional Coppnent</h1>
  <Title/>
  </div>)
  }





const root = ReactDOM.createRoot(document.getElementById("rooter"));
root.render(jsxheading);
root.render(<HeaderCom/>);
