import './App.css';
// import { Routes,Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Create from './components/Create';
// import Navbar from './components/NavBar';


// function App() {
//   // const myWidth = 200;
//   // return (
//   //   <div className="App">
//   //     <Navbar 
//   //       drawerWidth={myWidth}
//   //       content={
//   //         <Routes>
//   //         <Route path="" element={<Home/>}/>
//   //         <Route path="/about" element={<About/>}/>
//   //         <Route path="/create" element={<Create/>}/>
//   //       </Routes>
//   //       }
//   //     />
     
//   //   </div>
//   // );
// }


import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/privateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Navbar from './views/navbar';
import DashboardPage from './views/Dashboard';



function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
     
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
          <PrivateRoute component={DashboardPage} path="/dashboard" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App