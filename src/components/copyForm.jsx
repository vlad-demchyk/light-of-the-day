import "./Form.css";
import { useState } from "react";
import phone from "../background/phone.png";

const sendMail = (event, data) => {
  event.preventDefault();

  const form = event.target.form;
  let isValid=true;

  Object.entries(data).forEach(([inputName]) => {
    const inputField = form.querySelector(`[name="${inputName}"]`);

    if (!validate(inputField)) {
      isValid = false;
    }
  });

  if (isValid) {
    console.log("Form submitted", data);
    // Тут можна виконати додаткові дії, наприклад, відправку форми
  } else {
    console.log("Form contains errors");
  }
};

 // Функція для додавання класу помилки
 const setError = (input, textMessage) => {
  const parentDiv = input.closest(".input_field");
  const errorTxt = parentDiv.querySelector(".error_text");
  input.classList.add("error");
  errorTxt.innerHTML = textMessage;
};

// Функція для видалення класу помилки
const removeError = (input) => {
  const parentDiv = input.closest(".input_field");
  const errorTxt = parentDiv.querySelector(".error_text");
  input.classList.remove("error");
  errorTxt.innerHTML = "";
};

const validators = {
  email: (value) => /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value) || "Невірний формат email",
  phone: (value) => /^\d{6,}$/.test(value) || "Телефон повинен містити мінімум 6 цифр",
  message: (value) => value.length >= 10 || "Повідомлення повинно містити мінімум 10 символів",
  fName: (value) => value.length > 0 || "Ім'я не може бути порожнім",
  lName: (value) => value.length > 0 || "Прізвище не може бути порожнім"
};


const validate = (input) => {
  const value = input.value;
  const inputName = input.name;
  const error = validators[inputName](value);
  if (error !== true) {
    setError(input, error);
    return false;
  }
  removeError(input);
  return true;
};


function Form() {
  const dataState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [value, setValue] = useState(dataState);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const val = target.value;
    const newValue = { ...value, [name]: val };
    setValue(newValue);
  };

  return (
    <div className="form_container">
      <h3>{"Get in Touch".toUpperCase()}</h3>
      <form action="">
        <div className="input_field">
          <input
            onChange={handleChange}
            // onMouseLeave={(event) => {
            //   validate(event.target);
            // }}
            type="text"
            id="fName"
            name="fName"
            value={value.fName}
            placeholder="First name"
          />
          <p className="error_text"></p>
        </div>
        <div className="input_field">
          <input
            onChange={handleChange}
            // onMouseLeave={(event) => {
            //   validate(event.target);
            // }}
            type="text"
            id="lName"
            name="lName"
            value={value.lName}
            placeholder="Last name"
          />
          <p className="error_text"></p>
        </div>
        <div className="input_field">
          <input
            onChange={handleChange}
            // onMouseLeave={(event) => {
            //   validate(event.target);
            // }}
            type="email"
            id="email"
            name="email"
            value={value.email}
            placeholder="Email"
          />
          <p className="error_text"></p>
        </div>
        <div className="input_field">
          <input
            onChange={handleChange}
            // onMouseLeave={(event) => {
            //   validate(event.target);
            // }}
            type="number"
            id="phone"
            name="phone"
            value={value.phone}
            placeholder="Phone"
          />
          <p className="error_text"></p>
        </div>
        <div className="input_field">
          <input
            onChange={handleChange}
            // onMouseLeave={(event) => {
            //   validate(event.target);
            // }}
            type="text"
            id="message"
            name="message"
            value={value.message}
            placeholder="Message"
          />
          <p className="error_text"></p>
        </div>
        <div>
          <input
            onClick={(event) => sendMail(event, value)}
            type="button"
            value="Submit"
          />
        </div>
      </form>
      <img src={phone} className="image_phone" />
    </div>
  );
}

export default Form;


