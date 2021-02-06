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
      reasonForVisit: '',
      date: '',
      weight: '',
      height: '',
      bloodPressure: '',
      treatmentContent: '',
      prescription: '',
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  submitData(event) {
    event.preventDefault();
    firebase
      .database()
      .ref(`Treatment_Record/${this.state.uid}`)
      .set({
        reasonForVisit: this.state.reasonForVisit,
        date: this.state.date,
        weight: this.state.weight,
        height: this.state.height,
        bloodPressure: this.state.bloodPressure,
        treatmentContent: this.state.treatmentContent,   
        prescription: this.state.prescription,
      })
      .catch(error => console.log(error));
  }
  inputData(event) {
    const reasonForVisit = this.refs.name1.value;
    const date = this.refs.name2.value;
    const weight = this.refs.name3.value;
    const height = this.refs.name4.value;
    const bloodPressure = this.refs.name5.value;
    const treatmentContent = this.refs.name6.value;
    const prescription = this.refs.name7.value;
    this.setState({ reasonForVisit, date, weight, height, bloodPressure, treatmentContent, prescription});
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>Reason for Visit
          <input type="text" onChange={this.inputData} ref="name1" />Date
          <input type="text" onChange={this.inputData} ref="name2" />Weight
          <input type="text" onChange={this.inputData} ref="name3" />Height
          <input type="text" onChange={this.inputData} ref="name4" />Blood Pressure
          <input type="text" onChange={this.inputData} ref="name5" />Treatment Content
          <input type="text" onChange={this.inputData} ref="name6" />Prescription
          <input type="text" onChange={this.inputData} ref="name7" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Usurvey;