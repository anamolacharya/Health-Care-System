import React from "react";
import firebase from 'firebase'


    const cancelAppt=() => {
        return(
        firebase.database().ref('Appointment_List').remove(),
        <section className = "cancel">
        <div className = "cancelBox">
                <h2>Appointment Cancelled!</h2>
            </div>
            </section>
        );
    };


export default cancelAppt;