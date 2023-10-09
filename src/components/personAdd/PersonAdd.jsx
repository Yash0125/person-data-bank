import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./personAdd.css";

const PersonAdd = ({ addPerson }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for First Name and Last Name (no special characters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (
      !nameRegex.test(formData.firstName) ||
      !nameRegex.test(formData.lastName)
    ) {
      alert("First Name and Last Name should contain only letters and spaces.");
      return;
    }

    // Validation for Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validation for Phone (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone should have 10 digits.");
      return;
    }

    addPerson(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
    });
    console.log("Form submitted:", formData);
  };

  const handlePersonList = () => {
    navigate("/PersonList");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Person</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        <button onClick={handlePersonList}>Person List</button>
      </div>
    </div>
  );
};

export default PersonAdd;
