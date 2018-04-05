import React ,{Component }from 'react';
import './App.css';
import {Radio, RadioGroup} from "react-radio-group";


class Context extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'apple'
    };
    
  }
  handleChange=(value)=>{
    console.log(value)
    this.setState({selectedValue: value});
  }
  render() {
    console.log(this.state.selectedValue)
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <input type="radio" name="fruit" value="apple" />Apple
          <input type="radio" name="fruit" value="orange" />Orange
          <input type="radio" name="fruit" value="watermelon" />Watermelon
        </form>
        <RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue}
          onChange={this.handleChange}>
          <label>
            <Radio value="apple" />Apple
          </label>
          <label>
            <Radio value="orange" />Orange
          </label>
          <label>
            <Radio value="watermelon" />Watermelon
          </label>
        </RadioGroup>
      
      </div>
    );
  }
}
export  default Context;