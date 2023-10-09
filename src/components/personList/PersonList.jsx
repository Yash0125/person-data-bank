import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './personList.css';

const PersonList = ({ persons, editPerson, deletePerson }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const handleEditClick = (index) => {
    setEditIndex(index);
    // Set formData to the values of the person being edited
    setFormData(persons[index]);
  };

  const handleSaveClick = (index) => {
    // Update the person's data in the persons array
    editPerson(index, formData);
    setEditIndex(-1);
  };

  const handleCancelClick = () => {
    setEditIndex(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="personList-container">
      <Link to="/PersonAdd">
        <button>Add Person</button>
      </Link>
      <Link to="/">
        <button className='home-btn'>Home</button>
      </Link>
      <h1>Person List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.firstName
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.lastName
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.phone
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.state
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                ) : (
                  person.city
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button className='save-btn' onClick={() => handleSaveClick(index)}>Save</button>
                    <button className='cancel-btn' onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className='edit-btn' onClick={() => handleEditClick(index)}>Edit</button>
                    <button className='delete-btn' onClick={() => deletePerson(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
