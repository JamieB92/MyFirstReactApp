import React from "react";


const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello, {props.name}! {props.greeting} {props.age}</h1>;
}

export default FunctionalGreetingWithProps;