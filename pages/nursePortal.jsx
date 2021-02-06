import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import "../App.css";

const nursePortal = () => {
   
    return (
        <section className = "nursePortal">
            <div className = "logOutButton">
                <h2>Welcome to Nurse Healthcare Portal</h2>
                <Link to = "/">Logout</Link>
                </div>  
            <div className = "treatmentButton">
                <h2>Treatment Record</h2>
                <Link to = "/treatmentrecord">Make/Change Treamtment Record</Link>
            </div>
            
        </section>
    );
};

export default nursePortal;
