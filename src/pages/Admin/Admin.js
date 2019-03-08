import React, { Component } from 'react';
import DataList from '../../util/DataList';

import './Admin.css';

class Admin extends Component {

    createList() {
        const dataList = new DataList();
    }

    render() {
        return(
            <div className="admin wrapper">
                <div className="create">
                    <h1>Create a list</h1>
                    <hr />
                    <p id="output"></p>
                    <button onClick={this.createList}>Create</button>
                </div>
            </div>
        );
    }
}

export default Admin;



