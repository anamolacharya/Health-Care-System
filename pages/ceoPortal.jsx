import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import "../App.css";
const ceoPortal = () => {
   
    return (
        <section className = "ceoPortal">
            <div className = "logOutButton">
                <h2>Welcome to CEO Healthcare Portal</h2>
                <Link to = "/">Logout</Link>
                </div>  
            <div className = "reportButton">
                <h2>View Report</h2>
                <Link to = "/viewreport">View Daily Report</Link>
            </div>
            
        </section>
    );
};

export default ceoPortal;