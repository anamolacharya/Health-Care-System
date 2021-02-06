import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import "../App.css";
const doctorPortal = () => {
   
    return (
        <section className = "doctorPortal">
            <div className = "logOutButton">
                <h2>Welcome to Doctor Healthcare Portal</h2>
                <Link to = "/">Logout</Link>
                </div>  
            <div className = "treatmentButton">
                <h2>Treatment Record</h2>
                <Link to = "/treatmentrecord">Make/Change Treamtment Record</Link>
                <Link to = "/treatmentreport">View Patient Chart</Link>
            </div>
            
        </section>
    );
};

export default doctorPortal;