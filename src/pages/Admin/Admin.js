import React, { Component } from 'react';
import DataController from '../../util/DataController';
import AddForm from "../../components/AddForm/AddForm";

import './Admin.css';
import AdminProjectList from '../../components/ProjectList/ProjectList';

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

                <div className="admin-project-view">
                    <AdminProjectList />
                </div>
            </div>
        );
    }
}

export default Admin;



