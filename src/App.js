import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import React, {Fragment} from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd';


function App() {
  return (
    <div className="App">


<BrowserRouter>
             
             <ProtectedRoute path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />

         
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