import React, { Component } from "react";
import { connect } from "react-redux";
import '../../App.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img src="/images/home_header.jpg" alt="header image" id="header" height="200px" width="100%"/>
                    <div className="centered">
                        <p>Manage your students and campuses with this web application!</p>
                        <p>Click '<b>Campuses</b>' at the top to view all current campuses.</p>
                        <p>Click '<b>Students</b>' at the top to view all current students.</p>
                    </div>
                </div>

                <div className="home-content">
                    <div className="row">
                        <div className="column">
                            <img src="/images/home_campus.png" alt="campus icon" width="200px"/> <br></br>
                            Add and View Campuses
                        </div>
                        <div className="column">
                            <img src="/images/home_students.png" alt="students icon" width="200px"/> <br></br>
                            Add and View Students
                        </div>
                        <div className="column">
                            <img src="/images/home_edit.png" alt="edit icon" width="200px"/> <br></br>
                            Edit Existing Students or<br></br> Campuses At Any Time
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;