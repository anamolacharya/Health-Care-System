import React from 'react';

//import './App.css';

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//Calling Firebase config setting to call the data
import firebase from '../firebase';


class App extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {treatmentrecords : [], patientcharts : []}
    }
    
  componentDidMount() {
   
     
      firebase.database().ref("Treatment_Record").on("value", snapshot => {
        let treatmentrecord = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            treatmentrecord.push(snap.val());
        });
        this.setState({ treatmentrecords: treatmentrecord });
      });

      firebase.database().ref("Patient_Chart").on("value", snapshot => {
        let patientchart = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            patientchart.push(snap.val());
        });
        this.setState({ patientcharts: patientchart });
      });

      


    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h3>Patient Chart</h3>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Reason for Visit</th>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Blood Pressure</th>
                    <th>Treatment Content</th>
                    <th>Prescription</th>
                </tr>
            </thead>
            <tbody>
            {this.state.treatmentrecords.map(data => {
                
                return (
                    <tr>     
                    <td>{data.reasonForVisit}</td>
                    <td>{data.date}</td>
                    <td>{data.weight}</td>
                    <td>{data.height}</td>
                    <td>{data.bloodPressure}</td>
                    <td>{data.treatmentContent}</td>
                    <td>{data.prescription}</td>
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
                    <th>Patient ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>SSN</th>
                    <th>Insurance Provider</th>
                </tr>
            </thead>
            <tbody>
            {this.state.patientcharts.map(data => {
                
                return (
                    <tr>     
                    <td>{data.PatientID}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.Address}</td>
                    <td>{data.PhoneNumber}</td>
                    <td>{data.Email}</td>
                    <td>{data.SSN}</td>
                    <td>{data.InsuranceName}</td>
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