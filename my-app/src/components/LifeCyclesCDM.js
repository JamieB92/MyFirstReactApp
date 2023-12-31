import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCycleCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)

        this.state = {
            data: 'loading'
        }
    }
    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('data fetched')
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }
    componentDidMount() {
        console.log('component mounted')
        this.getData()
    }
    render() {
        console.log('render methaod called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM