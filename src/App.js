import React, { Component } from 'react';
import './App.css';
import Mainpage from './pagedraw/mainpage.js';
import { 
  BUTTON_CLICK,
  COMBINED_BUTTON_CLICK } from './constants.mjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.state = {
      fixedText: '',
      textInput: '',
      CombinedObject: {
        fixedText: 'placeholder',
        buttonLeft: {
          fixedText: 'Left',
          action: COMBINED_BUTTON_CLICK,
          subAction: 'Left'
        },
        buttonRight: {
          fixedText: 'Left',
          action: COMBINED_BUTTON_CLICK,
          subAction: 'Left'
        }
      }
    };
  }

  handleClick = (item) => {
    const {fixedText, action, subAction} = item;
    // Fixed text checks being refactored out, temporary eval
    const checked = action || fixedText;

    // Used for Generated Menu Cases
    let dynamicMenu;

    switch(checked) {
        // Dialog Box Cases
      case BUTTON_CLICK:
      switch(subAction) {
        case 'Left':
        console.log('Button Has Been Clicked: ', subAction);
        this.setState({fixedText: this.state.textInput});
        break;
        case 'Right':
        console.log('Button Has Been Clicked: ', subAction);
        this.setState({fixedText: ''});
        break;
      }
      break;
      // case COMBINED_BUTTON_CLICK:
      // switch(subAction) {
      //   case 'Left':
      //   console.log('COMBINED_BUTTON_CLICK Has Been Clicked: ', subAction);
      //   this.setState({CombinedObject: {fixedText: this.state.textInputCombined}});
      //   break;
      //   case 'Right':
      //   console.log('COMBINED_BUTTON_CLICK Has Been Clicked: ', subAction);
      //   this.setState({CombinedObject: {fixedText: ''}});
      //   break;
      // }
      // break;
    }
  }

    // This tracks different text inputs for usage later. The action is assigned to the input field.
  onChangeText = (text, action) => {
    switch (action) {
      case 'textInput':
      console.log('textinput called');
      this.setState({textInput: text.target.value});
      break;
      // case 'textInputCombined':
      // console.log('textInputCombined called');
      // this.setState({textInputCombined: text.target.value});
      // break;
    }
    console.log(text.target.value, action)
  }

  render() {
    console.log(this.state);
    return (
      <Mainpage 
      handleClick={this.handleClick}
      onChangeText={this.onChangeText}
      fixedText={this.state.fixedText}
      CombinedObject={this.state.CombinedObject}
      />

    );
  }
}

export default App;
