import "./Form.css";
import { useState } from "react";
import phone from "../background/phone.png";

const Form = () => {



  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    message: "",
  });

  function isValidEmail(value) {
    const regExMail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    console.log(regExMail.test(value));
    return regExMail.test(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Final validation check
    const isFormValid = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isFormValid) {
      // Form submission logic
      console.log("Form submitted successfully!");
      // Reset the form
      setFormData({
        fName: "",
        lName: "",
        email: "",
        number: "",
        message: "",
      });
      setFormErrors({
        fName: "",
        lName: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      console.log("Form contains validation errors.");
    }
  };

  const formValidation = (name, value, field) =>{
    const errorClass = 'set_error_field'

    if (name === "fName" && value.length < 3) {
      field.classList.add(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        fName: "Name must be at least 3 characters long.",
      }));
    } else if (name === "lName" && value.length < 3) {
      field.classList.add(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        lName: "Name must be at least 3 characters long.",
      }));
    } else if (name === "email" && !isValidEmail(value)) {
      field.classList.add(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address.",
      }));
    } else if (name === "number" && value.length < 8) {
      field.classList.add(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        number: "Number must be at least 8 characters long.",
      }));
    } else if (name === "message" && value.length < 8) {
      field.classList.add(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        message: "Message must be at least 8 characters long.",
      }));
    } else {
      field.classList.remove(errorClass)
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "", // Reset error message
      }));
    }
  }
  
  // Event handlers for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const field = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
     
    formValidation(name, value, field)
    
  };

  // ...

  return (
    <div className="form_container">
      <h3>{"Get in Touch".toUpperCase()}</h3>
      <form onSubmit={handleSubmit}>
      <div className="input_field">
          {/* <label htmlFor="fName">First Name:</label> */}
          <input
            type="text"
            id="fName"
            name="fName"
            value={formData.fName}
            onChange={handleInputChange}
            placeholder="First name"
          />
          {formErrors.fName && <p className="set_form_error_text">{formErrors.fName}</p>}
        </div>
        <div className="input_field">
          {/* <label htmlFor="lName">Last Name:</label> */}
          <input
            type="text"
            id="lName"
            name="lName"
            value={formData.lName}
            onChange={handleInputChange}
            placeholder="Last name"
          />
          {formErrors.lName && <p className="set_form_error_text">{formErrors.lName}</p>}
        </div>

        <div className="input_field">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {formErrors.email && <p className="set_form_error_text">{formErrors.email}</p>}
        </div>

        <div className="input_field">
          {/* <label htmlFor="number">Number:</label> */}
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Phone number"
          />
          {formErrors.number && <p className="set_form_error_text">{formErrors.number}</p>}
        </div>
        <div className="input_field">
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
          />
          {formErrors.message && <p className="set_form_error_text">{formErrors.message}</p>}
        </div>

        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
      <img src={phone} className="image_phone" alt="#" />
    </div>
  );
};

export default Form;
