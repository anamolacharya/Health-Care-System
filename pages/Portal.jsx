import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import "../App.css";

const Portal = () => {
   
    return (
        <section className = "portal">
            <div className = "logOutButton">
                <h2>Welcome to Staff Healthcare Portal</h2>
                <Link to = "/">Logout</Link>
                </div>  
            <div className = "apptButton">
                <h2>Appointment Request</h2>
                <Link to = "/makeAppt">Make/Change Appointment</Link>
                <Link to = "/cancelAppt">Cancel Appointment</Link>
            </div>

            <div className = "chartButton">
                <h2>Patient Chart</h2>
                <Link to = "/patientChart">Create/Edit Chart</Link>
            </div>

            <div className = "payButton">
                <h2>Payment Method</h2>
                <Link to = "/cardInfo">Debit/Credit</Link>
            </div>
            
        </section>
    );
};

export default Portal;
