import React, { Component } from 'react';
import DataController from '../../util/DataController';
import AddForm from "../../components/AddForm/AddForm";

import './Admin.css';

class Admin extends Component {

    controller = new DataController();

    render() {
        return(
            <div className="admin-wrapper">
                <h1>Admin Page</h1>
                <p>Admin stuffs...</p>

                <div className="add-form">
                    <AddForm />
                </div>
            </div>
        );
    }
}

export default Admin;



