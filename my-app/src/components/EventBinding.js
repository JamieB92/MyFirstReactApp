import React from "react";

class EventBinding extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit"
        };
        // Binding event in constructor
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "GoodBye!",
    //         buttonText: "Enter"
    //     })
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText)
    // }

    // Arror function in handler
    handleClick = () => {
        this.setState({
            introduction: "GoodBye!",
            buttonText: "Enter"
        })
        console.log(this.state.introduction);
        console.log(this.state.buttonText)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                {/* Binding event with arror finction */}
                {/* <button onClick={() => this.handleClick()} > */}
                
                {/* Binding event in the button */}
                {/* <button onClick={this.handleClick.bind(this)} > */}

                {/* Binding event in constructor and binding using arrow function in the handler  */}
                <button onClick={this.handleClick} >
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;