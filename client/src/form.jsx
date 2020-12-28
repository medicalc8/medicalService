import axios from 'axios';
import React, { Component } from 'react';
import Checkbox from './Checkbox';

const OPTIONS = [
'Fever or chills',
'Cough',
'Shortness of breath or difficulty breathing',
'Fatigue',
'Muscle or body aches',
'Headache',
'New loss of taste or smell',
'Sore throat',
'Congestion or runny nose',
'Nausea or vomiting',
'Diarrhea'
];

class Form extends Component {
state = {
    checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false  
        }),
        {}
    )
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
        //after hours of understanding this stolen code !!! GOD your not srx the guy who did tyhis react exemple is a tools to use wisely !:!!!! I hate my life
        let save =[]
        Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
            console.log(checkbox, 'is selected.');
            save.push(checkbox)
        });
        console.log(save);
        let buffer = save.join(',')
        console.log(buffer);
        axios.post('/form', {
            covid19: buffer
        })
        //we had a terrible headache understanding those algorithms !
        alert('we saved your data, a doctor will contact you soon')
        window.location.replace("/");
    };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
          />
    );
    
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);
  
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
                            <button type="submit" className="btn btn-primary">
                                Save
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
//this code made by khalil 