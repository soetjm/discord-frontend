import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import Register from './authPages/RegisterPage/RegisterPage';
import Dashbord from './Dashboard/Dashboard';
import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
   return (
        <Router>
              <Routes>
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/dashbord' element={<Dashbord />} />
                  <Route path='/' element={<Navigate to='/login' />} />
              </Routes>
              <AlertNotification/>
        </Router>
   );
}

export default App;


