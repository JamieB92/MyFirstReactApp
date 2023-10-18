import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : '',
        category : 'website',
        comments : '',

      }
    }
    handleNameChange = (event) => {

        this.setState({
            name: event.target.value
        })
    }

    handleSelect = (event) => {

        this.setState({
            category: event.target.value
        })
    }

    handleComment = (event) => {

        this.setState({
            comment: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>Please fill out the form below</h2>
            <div>
            <label htmlFor="id-name">Your Name:</label>
            <input 
            value={this.state.name} 
            onChange={this.handleNameChange}
            id="id-name" 
            name="name" 
            type="text" 
            />
            </div>
            <div>
            <label htmlFor="id-category">Category:</label>
            <select value={this.state.category} onChange={this.handleSelect} name="category" id="id-category">
                <option value="website">Website issue</option>
                <option value="order">Order issue</option>
                <option value="general">General enquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor="id-comment">Comments</label>
                <textarea value={this.state.comment} onChange={this.handleComment} name="comments" id="id-comments" />
            </div>
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm