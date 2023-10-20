import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,category,comments)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Please fill out the form below</h2>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Category:</label>
                    <select value={category} onChange={
                        (e) => setCategory(e.target.value)
                    } name="category" id="id-category">
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General enquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comment">Comments</label>
                    <textarea value={comments} onChange={
                        (e) => setComments(e.target.value)
                    } name="comments" id="id-comments" />
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks