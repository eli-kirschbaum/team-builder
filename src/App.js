import React, { useState, useEffect } from 'react'
import TeamForm from './Form'

import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}





function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [team, setTeam] = useState([]);
  

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }
  
  
  return (
    <div className="app-container">
      <h1>Team Form App</h1>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
     
    </div>
  );
}

export default App;
