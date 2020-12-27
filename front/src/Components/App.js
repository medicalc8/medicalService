import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';
import Form from './Form';
import OPTIONS from '../Options';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [state, setState] = React.useState({
    OPTIONS: OPTIONS,
    fullname: "",
    email: "",
    phone: "",
  })

  

  

  const Submit=  (event)=>{
    event.preventDefault()
    //database
    console.log(state)
    };


  function handleChange(evt) {
    const value = evt.target.value;
    //console.log(value);
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
    return (
      <div className="App">
      <header className="App-header">
      <h1> Fill your Form </h1>
      <form onSubmit={Submit}>
        <label>
          FullName : 
          <input 
          type="text" 
          name="fullname" 
          value={state.fullname}
          onChange={handleChange} 
          required/>
        </label>
        <label>
        <br/>
        <br/>
          Email : 
          <input 
          type="email" 
          name="email" 
          value={state.email}
          onChange={handleChange}
          required/>
        </label>
        <br/>
        <br/>
        <label>
          Phone : 
          <input 
          type="number" 
          name="phone"  
          value={state.phone}
          onChange={handleChange}
          required/>
        </label>
        <br/>
        <br/>
        <label>
        Symptoms :
        <Form OPTIONS={OPTIONS} />
        </label>
        <button onClick={()=> setModalIsOpen(true)}> Check </button> 
      </form>
      <Modal isOpen={modalIsOpen}>
        <h2> Result </h2>
        <button onClick={()=> setModalIsOpen(false)}> Close </button> 
        <button > Appointment with Doctor </button> 
      </Modal>
      </header>
    </div>
  );

    }
export default App;
