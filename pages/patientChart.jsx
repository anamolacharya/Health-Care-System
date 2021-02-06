import firebase from "firebase";
import React, { Component } from 'react';

//const firebase = require('firebase');
const uuid = require('uuid');

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
      uid: uuid.v1(),
      PatientID: '',
      firstName: '',
      lastName: '',
      Address: '',
      PhoneNumber: '',
      Email: '',
      SSN: '',
      InsuranceName: '',
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  submitData(event) {
    event.preventDefault();
    firebase
      .database()
      .ref(`Patient_Chart/${this.state.uid}`)
      .set({
        PatientID: this.state.PatientID,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        Address: this.state.Address,
        PhoneNumber: this.state.PhoneNumber,
        Email: this.state.Email,
        SSN: this.state.SSN,
        InsuranceName: this.state.InsuranceName,
        
      })
      .catch(error => console.log(error));
  }
  inputData(event) {
    const PatientID = this.refs.name1.value;
    const firstName = this.refs.name2.value;
    const lastName = this.refs.name3.value;
    const Address = this.refs.name4.value;
    const PhoneNumber = this.refs.name5.value;
    const Email = this.refs.name6.value;
    const SSN = this.refs.name7.value;
    const InsuranceName = this.refs.name8.value;
    this.setState({ PatientID, firstName, lastName, Address, PhoneNumber, Email, SSN, InsuranceName });
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>PatientID
          <input type="text" onChange={this.inputData} ref="name1" />First Name
          <input type="text" onChange={this.inputData} ref="name2" />Last Name
          <input type="text" onChange={this.inputData} ref="name3" />Address
          <input type="text" onChange={this.inputData} ref="name4" />Phone Number
          <input type="text" onChange={this.inputData} ref="name5" />Email
          <input type="text" onChange={this.inputData} ref="name6" />SSN
          <input type="text" onChange={this.inputData} ref="name7" />Insurance Name
          <input type="text" onChange={this.inputData} ref="name8" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Usurvey;