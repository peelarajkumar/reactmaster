import React from "react";
import ReactDom from "react-dom/client";

const body = (<div>Hello I am Just a Plane Body Tag</div>);

const InsideElem = ()=>{
    return (<div>I Am A Functional Component - created to use inside React Element</div>)
}

const elemrfc = (<div>I Am a Element with RFC <InsideElem/></div>)

const ParentElem = ()=>{


    
    return ([elemrfc,body])
}

const FinalElem = function(){

    return (<ParentElem/>)
}

const FinalElemenet = ()=>{
    

    return([<div>Helli ! I am Just a React Functional Element </div>,
        body,<FinalElem/>]
    )
}

// Element and Component  insde element

const elein = (<h2>I AM AN Inner Element</h2>)
const GrandChildComp =()=>{
    return(<h1>I AM A GRAND CHILD COMPONENT</h1>)
}

let x = [];
for(i=0;i<=2;i++){
    x.push(<div>I am Rendered Elemenet</div>)
}

const eleout = (<div>{elein}<h2>I AM AN Outer Element</h2><GrandChildComp/>{x}</div>)

// comp inside comp
const ChildComp =()=>{
    return(<h1>I AM A CHILD COMPONENT</h1>)
}
const ParentComp =()=>{
    const chicks = []
    for (let i=0;i<=3;i++){
        chicks.push(body)}
    return(<div>
        <ChildComp/>
        {chicks}
        <h1>I AM A PARENT COMPONENT</h1>
    </div>)
}

// elem and component inside comp

const FatherComp = ()=>{
    return(<div id="FatherComp">
        {eleout}
        {body}
        <ParentComp/>
    </div>)
}

const root = ReactDom.createRoot(document.getElementById('rooter'));
root.render(<FatherComp/>)
