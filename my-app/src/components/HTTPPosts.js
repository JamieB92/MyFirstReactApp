import React, { Component } from 'react'
import axios from 'axios';

export class HTTPPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    postToApi = () => {
        console.log('sent');
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello World!',
            body: 'It Works',
            userId: 123,
        }).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create a Post
        </button>
        {
            apiResponse
            ? ( <div>
                <h1>{apiResponse.title}</h1>
                <p>Post Id: {apiResponse.id}</p>
                <p>{apiResponse.body}</p>
                <p>user id: {apiResponse.userId}</p>
            </div> )
            : <p>Please click the button above</p>
        }
      </div>
    )
  }
}

export default HTTPPosts