import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import PrivateRoute from "./PrivateRoute"
import AuthProvider from "./Authentication"
import staffSignIn from './staffSignIn'
import nurseSignIn from './nurseSignIn'
import doctorSignIn from './doctorSignIn'
import ceoSignIn from './ceoSignIn'
//import SignUp from './SignUp'
import Portal from "./pages/Portal";
import nursePortal from "./pages/nursePortal";
import doctorPortal from "./pages/doctorPortal";
import ceoPortal from "./pages/ceoPortal";
import makeAppt from "./pages/makeAppt";
import cancelAppt from "./pages/cancelAppt";
import patientChart from "./pages/patientChart";
import cardInfo from "./pages/cardInfo";
import treatmentRecord from "./pages/treatmentRecord";
import viewReport from "./pages/viewReport";
import treatmentReport from "./pages/treatmentReport";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>

          
          <Route exact path="/" component={staffSignIn} />
          <Route exact path="/nursesignin" component={nurseSignIn} />
          <Route exact path="/doctorsignin" component={doctorSignIn} />
          <Route exact path="/ceosignin" component={ceoSignIn} />
          <Route exact path="/portal" component={Portal} />
          <Route exact path="/nurseportal" component={nursePortal} />
          <Route exact path="/doctorportal" component={doctorPortal} />
          <Route exact path="/ceoportal" component={ceoPortal} />
          <Route exact path="/makeAppt" component={makeAppt} />
          <Route exact path="/treatmentrecord" component={treatmentRecord} />
          <Route exact path="/patientChart" component={patientChart} />
          <Route exact path="/cardInfo" component={cardInfo} />
          <Route exact path="/viewreport" component={viewReport} />
          <Route exact path="/treatmentreport" component={treatmentReport} />
          <Route exact path="/cancelAppt" component={cancelAppt} />

        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;