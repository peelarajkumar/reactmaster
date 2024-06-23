// creating a component
// Functional Component : A JS Function which returns a JSX(REACT) Element.
// A JSX Element =>Parcel(Babel)=>React Element
import React from "react";
import ReactDOM from "react-dom/client"

//
const TitleComp =()=>{
    return <div>Hello All ! Good Morning</div>
}


const footer = <p>I Am A Footer Element</p>
const header = (<h2>I Am Just A JSX  Header Elemet {footer}
{TitleComp()}
<TitleComp></TitleComp>
<TitleComp/>
</h2>);
console.log(header);

const stattex ="Hello Raj"


//Component composition- using a component inside another component

const HeadingComp = ()=>{
    return (<div id="content">
        {header}
        {/* {stattex} */}
        <TitleComp/>                      
    <div id="parents">
        <h1 id="head1" className="rajwithclass">Hello Raj welcome</h1>
        <h1 id="head2">Raj I dont have a classname</h1>
    </div></div>)}
   

    const root = ReactDOM.createRoot(document.getElementById('rooter')) // setting the root for react
    console.log(root);
    root.render(<HeadingComp/>);
    


