import React, { Component } from 'react';
import Checkbox from './Checkbox';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: this.props.OPTIONS.reduce(
                (options, option) => ({
                   ...options,
                  [option]: false  
                }),
                {}
            )
            
    }
   //console.log(this.props.OPTIONS)

};
    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };
    selectAll = () => this.selectAllCheckboxes(true);
    deselectAll = () => this.selectAllCheckboxes(false);
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
            console.log(checkbox, 'is selected.');
        });
    };
    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
          />
    );
    createCheckboxes = () => this.props.OPTIONS.map(this.createCheckbox);
    render() {
      return (
       <div className="container">
           <div className="row mt-5">
               <div className="col-sm-12">
                    <form onSubmit={this.handleFormSubmit}>
                        {this.createCheckboxes()}
                        <div className="form-group mt-2">
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.selectAll}
                            >
                                Select All
                            </button>
                            <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.deselectAll}
                            >
                                Deselect All
                            </button>
                        </div>    
                    </form>
               </div>
           </div>
       </div>
      );
    }
  }
export default Form;