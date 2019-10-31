import React, { Component } from 'react';

import "./AddForm.css";

class AddForm extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {id: "", name: "", type: "", desc: ""}

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(event) {
        alert('ID is: ' + this.state.value);
        console.log("ID is: " + this.state.id);
        event.preventDefault();
    }

    render() 
    {
        return(
            <div className="addFormWrapper">
                <h2>
                    Add Project
                </h2>
                <form onSubmit={this.handleIdChange}>
                    <label>
                        ID:
                        <input type="text" name="id" value={this.state.id} onChange={this.handleIdChange}/>
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleIdChange}/>
                    </label>
                    <label>
                        Type:
                        <input type="text" name="type" value={this.state.type} onChange={this.handleIdChange}/>
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={this.state.description} onChange={this.handleIdChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddForm;