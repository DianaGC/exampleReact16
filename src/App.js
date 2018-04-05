import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {Radio, RadioGroup} from "react-radio-group";
import Context from "./context";

const ApplicationContext = createContext();

// const {Provider, Consumer} = ThemeContext;

class App extends Component {
 
  state={
    selectedValue: undefined
  }
  
 
  
  render() {
    return(
      <ApplicationContext>
      <Context/>
      </ApplicationContext>
      )
    
  }
}

export default App;
