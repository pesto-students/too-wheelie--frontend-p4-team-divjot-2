import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import React, {Fragment} from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd';
import UserBookings from './pages/UserBookings';
import AddBike from './pages/AddBike';
import AdminHome from './pages/AdminHome';
import EditBike from './pages/EditBike';


function App() {
  return (
    <div className="App">


<BrowserRouter>
             
             <ProtectedRoute path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />
            <ProtectedRoute path='/booking/:bikeid' exact component={BookingCar} />
            <ProtectedRoute path='/userbookings' exact component={UserBookings} />
            <ProtectedRoute path='/addbike' exact component={AddBike} />
            <ProtectedRoute path='/admin' exact component={AdminHome} />
            <ProtectedRoute path='/editbike/:bikeid' exact component={EditBike} />





         
         </BrowserRouter>

    </div>
  );
}

export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}