import React, { useState } from 'react';
import Form from './Form';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
};

const membersList = [
  {username: 'Allie', email: 'ga.allie@yahoo.com', role: 'Housewife'},
  {username: 'Ryan', email: 'rl.brewer@yahoo.com', role: 'Husband'},
  {username: 'Alfred', email: 'princealfred@yahoo.com', role: 'Fur Baby'},
  {username: 'Lucy', email: 'whatsthat@yahoo.com', role: 'Fur Baby'}
];


function App() {
  const [members, setMembers] = useState(membersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm =  (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
      <h1>Our Members:</h1>
      {members.map(member => {
        return (
          <p>My name is {member.username} and I am a {member.role}! My email for contact is: {member.email}</p>
        )
      })
      }
      <p>insert members list here</p>
      <h2>Add a new member!</h2>
      <Form
        values = {formValues}
        update = {updateForm}
        submit = {submitForm}
      />

    </div>
  );
}

export default App;
