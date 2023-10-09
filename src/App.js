import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PersonList from './components/personList/PersonList';
import PersonAdd from './components/personAdd/PersonAdd';
import './App.css';

function App() {
  const [persons, setPersons] = useState([]);

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const editPerson = (index, updatedPerson) => {
    const updatedPersons = [...persons];
    updatedPersons[index] = updatedPerson;
    setPersons(updatedPersons);
  };

  const deletePerson = (index) => {
    const updatedPersons = [...persons];
    updatedPersons.splice(index, 1);
    setPersons(updatedPersons);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonList"
            element={<PersonList persons={persons} editPerson={editPerson} deletePerson={deletePerson} />}
          />
          <Route
            path="/PersonAdd"
            element={<PersonAdd addPerson={addPerson} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
