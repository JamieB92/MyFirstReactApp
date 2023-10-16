import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div>
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
                <UserData isLoaded={this.state.isLoaded}/>
            </div>
        )
    }
}

export default NestingComponents