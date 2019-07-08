import React, { Component } from 'react';
import DataController from '../../util/DataController';

import './Admin.css';

class Admin extends Component {

    controller = new DataController();

    render() {
        return(
            <div className="wrapper">
                <h1>Admin Page</h1>
                <p>Admin stuffs...</p>
            </div>
        );
    }
}

export default Admin;



