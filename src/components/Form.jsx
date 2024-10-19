import "./Form.css";
import { useState } from "react";
import phone from "../background/phone.png";

const Form = () => {
  const [formData, setFormData] = useState({
    fName: ' ',
    lName: ' ',
    email: ' ',
    number: ' ',
    message: ' ',
  });

  const [formErrors, setFormErrors] = useState({
    fName: ' ',
    lName: ' ',
    email: ' ',
    number: ' ',
    message: ' ',
  });

  function isValidEmail(value){
return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    const isFormValid = Object.values(formErrors).every((error) => error === ' ');

    if (isFormValid) {
      // Form submission logic
      console.log('Form submitted successfully!');
      // Reset the form
      setFormData({
        fName: ' ',
        lName: ' ',
        email: ' ',
        number: ' ',
        message: ' ',
      });
      setFormErrors({
        fName: ' ',
        lName: ' ',
        email: ' ',
        number: ' ',
        message: ' ',
      });
    } else {
      console.log('Form contains validation errors.');
    }
  };

  // Event handlers for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  // };
  if (name === 'fName' && value.length < 3) {
    setFormErrors((prevState) => ({
      ...prevState,
      name: 'Name must be at least 3 characters long.',
    }));
  } else if (name === 'lName' && value.length < 3) {
    setFormErrors((prevState) => ({
      ...prevState,
      name: 'Name must be at least 3 characters long.',
    }));
  } else if (name === 'email' && !isValidEmail(value)) {
    setFormErrors((prevState) => ({
      ...prevState,
      email: 'Please enter a valid email address.',
    }));
  } else if (name === 'number' && value.length < 8) {
    setFormErrors((prevState) => ({
      ...prevState,
      password: 'Number must be at least 8 characters long.',
    }));
  } else if (name === 'message' && value.length < 8) {
    setFormErrors((prevState) => ({
      ...prevState,
      password: 'Message must be at least 8 characters long.',
    }));
  } else {
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: '', // Reset error message
    }));
  }
}

  // ...

  return (
    <div className="form_container">
      <h3>{"Get in Touch".toUpperCase()}</h3>
    <form onSubmit={handleSubmit}>
    <div className="input_field">
      <label htmlFor="fName">First Name:</label>
      <input
        type="text"
        id="fName"
        name="fName"
        value={formData.fName}
        onChange={handleInputChange}
      />
      {formErrors.fName && <p className="error">{formErrors.name}</p>}
    </div>
    <div className="input_field">
      <label htmlFor="lName">Last Name:</label>
      <input
        type="text"
        id="lName"
        name="lName"
        value={formData.lName}
        onChange={handleInputChange}
      />
      {formErrors.lName && <p className="error">{formErrors.name}</p>}
    </div>

    <div className="input_field">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && <p className="error">{formErrors.email}</p>}
    </div>

    <div className="input_field">
      <label htmlFor="number">Number:</label>
      <input
        type="number"
        id="number"
        name="number"
        value={formData.number}
        onChange={handleInputChange}
      />
      {formErrors.password && <p className="error">{formErrors.password}</p>}
    </div>
    <div className="input_field">
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      {formErrors.password && <p className="error">{formErrors.password}</p>}
    </div>

    <button type="submit">Submit</button>
  </form>
  <img src={phone} className="image_phone" />
  </div>
  );
};

export default Form; 