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
      firstName: '',
      lastName: '',
      billingAddress: '',
      cardNumber: '',
      expDate: '',
      CVV: '',
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  submitData(event) {
    event.preventDefault();
    firebase
      .database()
      .ref(`Payment_Information/${this.state.uid}`)
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        amount: this.state.amount,
        billingAddress: this.state.billingAddress,
        cardNumber: this.state.cardNumber,
        expDate: this.state.expDate,
        CVV: this.state.CVV,
      })
      .catch(error => console.log(error));
  }
  inputData(event) {
    const firstName = this.refs.name1.value;
    const lastName = this.refs.name2.value;
    const amount = this.refs.name3.value;
    const billingAddress = this.refs.name4.value;
    const cardNumber = this.refs.name5.value;
    const expDate = this.refs.name6.value;
    const CVV = this.refs.name7.value;
    this.setState({ firstName, lastName, amount, billingAddress, cardNumber, expDate, CVV});
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>First Name
          <input type="text" onChange={this.inputData} ref="name1" />Last Name
          <input type="text" onChange={this.inputData} ref="name2" />Amount 
          <input type="text" onChange={this.inputData} ref="name3" />Billing Address
          <input type="text" onChange={this.inputData} ref="name4" />Card Number
          <input type="text" onChange={this.inputData} ref="name5" />Expiration Date
          <input type="text" onChange={this.inputData} ref="name6" />CVV
          <input type="text" onChange={this.inputData} ref="name7" />
          
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Usurvey;