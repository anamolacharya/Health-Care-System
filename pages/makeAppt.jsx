import firebase from "firebase";
import React, { Component } from 'react';


//const firebase = require('firebase');
//const uuid = require('uuid');
var uuid = 1;
const config = {
    apiKey: "AIzaSyAr8_X2wzBERQARVluW2W6Tapw5JNx_5ZI",
    authDomain: "health-care-software.firebaseapp.com",
    databaseURL: "https://health-care-software.firebaseio.com",
    projectId: "health-care-software",
    storageBucket: "health-care-software.appspot.com",
    messagingSenderId: "473024683908",
};
//var firebase = require('firebase/app');

class Usurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: uuid,
      firstName: '',
      lastName: '',
      Date: '',
      Time: '',
      DoctorsName: '',


    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  submitData(event) {
    event.preventDefault();
    firebase
      .database()
      .ref(`Appointment_List/${this.state.uuid}`)
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        Date: this.state.Date,
        Time: this.state.Time,
        DoctorsName: this.state.DoctorsName,
     


      })
      .catch(error => console.log(error));
  }
  inputData(event) {
    const firstName = this.refs.name1.value;
    const lastName = this.refs.name2.value;
    const Date = this.refs.name3.value;
    const Time = this.refs.name4.value;
    const DoctorsName = this.refs.name5.value;
    this.setState({ firstName, lastName, Date, Time, DoctorsName });
    
  }

  updateIndex(){
    uuid = uuid+1;
  }
  render() {
    
    return (
      this.updateIndex(),
      <section className = "appt">
      <div className = "makeAppt">
        <form onSubmit={this.submitData}>First Name
          <input type="text" onChange={this.inputData} ref="name1" />Last Name
          <input type="text" onChange={this.inputData} ref="name2" />Date
          <input type="text" onChange={this.inputData} ref="name3" />Time
          <input type="text" onChange={this.inputData} ref="name4" />Dr. Name
          <input type="text" onChange={this.inputData} ref="name5" />
          <input type="submit" />  
         
        </form>
      </div>
      </section>
    );
  }
}
export default Usurvey;