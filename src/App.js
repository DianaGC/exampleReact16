import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {Radio, RadioGroup} from "react-radio-group";
import Context from "./context";

const ApplicationContext = createContext({
  selectedValue: undefined,
  
});


 const {Provider, Consumer} = ApplicationContext;

class App extends Component {
 
  render() {
    return(
      <ApplicationContext.P>
      <Context/>
      </ApplicationContext.P>
      )
    
  }
}

export default App;
