// Generated by https://pagedraw.io/pages/12222
import React from 'react';
import Inheritedbutton from './inheritedbutton';
import Textoutput from './textoutput';
import Inputtextbox from './inputtextbox';
import './combinedcomponent.css';


export default class Combinedcomponent extends React.Component {
  render() {
    return (
      <div className="combinedcomponent-combinedcomponent-6">
          <div className="combinedcomponent-0">
              <div className="combinedcomponent-combinedbox-5">
                  <div className="combinedcomponent-0-0-0">
                      <div className="combinedcomponent-0-0-0-0">
                          <div className="combinedcomponent-0-0-0-0-0">
                              <div className="combinedcomponent-inheritedbutton_instance-5">
                                  <Inheritedbutton buttonObject={this.props.CombinedObject.buttonLeft} handleClick={this.props.handleClick} /> 
                              </div>
                          </div>
                      </div>
                      <div className="combinedcomponent-0-0-0-1">
                          <div className="combinedcomponent-0-0-0-1-0">
                              <div className="combinedcomponent-textoutput_instance_2">
                                  <Textoutput fixedText={this.props.CombinedObject.fixedText} /> 
                              </div>
                          </div>
                          <div className="combinedcomponent-0-0-0-1-1">
                              <div className="combinedcomponent-inputtextbox_instance_2">
                                  <Inputtextbox onChangeText={this.props.onChangeText} action={"textInputCombined"} /> 
                              </div>
                          </div>
                      </div>
                      <div className="combinedcomponent-0-0-0-2">
                          <div className="combinedcomponent-0-0-0-2-0">
                              <div className="combinedcomponent-inheritedbutton_instance_2">
                                  <Inheritedbutton buttonObject={this.props.CombinedObject.buttonRight} handleClick={this.props.handleClick} /> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
