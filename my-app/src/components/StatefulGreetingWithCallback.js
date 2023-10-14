import React from "react";

class StatefulGreetingWithCallback extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit"
        };
    }

    handleClick() {
        this.setState({
            introduction: "GoodBye!",
            buttonText: "Enter"
        // IF need to run code aftert state has been changed pass in a callback function and not aftwards
        }, ()=>{
            // Logs new state
            console.log('new state', this.state.introduction);
            console.log('new stat', this.state.buttonText)
        })
        // After which logs the previous state
        console.log(this.state.introduction);
        console.log(this.state.buttonText)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} </h1>
                <button onClick={() => this.handleClick()} >{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;