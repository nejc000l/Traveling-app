import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';

function App() {
  return (
    <>
  

      <Navbar />
     
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SingUp} />  
      </Switch>
 
  </>
  );
}

export default App;
