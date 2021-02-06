import React from 'react';

//import './App.css';

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//Calling Firebase config setting to call the data
import firebase from '../firebase';


class App extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {paymentinformations : [], appointmentinformations:[]}
    
    }
    
  componentDidMount() {
   
     
      firebase.database().ref("Payment_Information").on("value", snapshot => {
        let paymentinformation = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            paymentinformation.push(snap.val());
        });
        this.setState({ paymentinformations: paymentinformation });
      });

      firebase.database().ref("Appointment_List").on("value", snapshot => {
        let appointmentinformation = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            appointmentinformation.push(snap.val());
        });
        this.setState({ appointmentinformations: appointmentinformation });
      });
    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h3>Daily Report</h3>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>amount</th>
                </tr>
            </thead>
            <tbody>
            {this.state.paymentinformations.map(data => {
                
                return (
                    <tr>     
                    <td>{data.amount}</td>
                    </tr>
                    
                );
               
                })}
                 
        
               
            </tbody>
            
         </table>
          
     </div>


     <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Dr. Name</th>
                    <th>Patient(First)</th>
                    <th>Patient(Last)</th>
                </tr>
            </thead>
            <tbody>
            {this.state.appointmentinformations.map(data => {
                
                return (
                    <tr>     
                    <td>{data.DoctorsName}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    </tr>
                    
                );
               
                })}
                 
        
               
            </tbody>
            
         </table>
          
     </div>




     </div>

     
  );
}
}
export default App;