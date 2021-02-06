# Health-Care-System  
This project is a web based implementation of Health Care Syatem. 
Node.js is used as back-end part whereas react.js is used as frot-end implementation. 
Firebase is used to implement the realtime database, where users(employee of the Health care system) uses their credentials to log in to the system. 
Inside the system, each users(staff, nurse, doctor, CEO) have thier own protal where they can perform all the necesary action they are permitted to. 

To have this project running in the console, node.js and react.js needs to be installed. VS Code is the primary code editor used in the project. 

Since, a database is created by using an gmail account(firebase), it is highly recommended for user to create one where user can store the data. 
After user creates one the user will need to replace the existing firebase credentials with their own. 

There are multiple packages that are installed in the project. The list of packages that needed to be installed in the project to run are:
@material-ui/core,
@material-ui/icon,
firebase,
bootstrap,
react,
react-dom,
react-router-dom,
react-scripts,
web-vitals.

To run the project,
npm start 
is used in the project terminal. 
A new tab opens up in the web browser where an initial GUI appears with the introduction. 
The sign in portal with the valid credential get the access to the portal with respect to an employee(staff, nurse, doctor, CEO).

When any information is entered in the portal, the data is stored in realtime database. 

Multiple components are created implementing use of props and states.
App.js is the main part of the project that controls, imports all the functions, components for proper rendering and functioning.
