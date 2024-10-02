import "./Form.css";
import { useState } from "react";



function Form() {
    const dataState = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      };

  const [value, setValue] = useState(dataState);

  const handleChange = (e) => {
    const target = e.target;
    const n = target.name;
    const v = target.value;
    const newvalue = { ...value, [n]: v }
  setValue(newvalue)
  };

  const validate = (event, data) => {
    const form = event.target.form;
    const { fname, lname, email, phone, message } = data;
  
    const emailRegEx = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;  // Перевірка email
    const minLenghtRegEx = /^.{10,}$/;  // Мінімум 10 символів
    const minNumbRegEx = /^\d{6,}$/;    // Мінімум 6 цифр
  
    // Функція для додавання класу помилки
    const setError = (inputName, textMessage) => {
      const input = form.querySelector(`[name=${inputName}]`);
      input.classList.add("error");


    };
  
    // Функція для видалення класу помилки
    const removeError = (inputName) => {
      const input = form.querySelector(`[name=${inputName}]`);
      input.classList.remove("error");

    };
  
    // Очищення всіх попередніх помилок
    ["fname", "lname", "email", "phone", "message"].forEach(removeError);
  
    // Перевірка і повідомлення про проблеми
    if (fname === "") {
      setError("fname", "Поле 'Ім'я' порожнє");
    }
    if (lname === "") {
      setError("lname", "Поле 'Прізвище' порожнє");
    }
    if (email === "") {
      setError("email", "Поле 'Email' порожнє");
    } else if (!emailRegEx.test(email)) {
      setError("email", "Невірний формат email");
    }
  
    if (phone === "") {
      setError("phone", "Поле 'Телефон' порожнє");
    } else if (!minNumbRegEx.test(phone)) {
      setError("phone", "Телефон повинен містити мінімум 6 цифр");
    }
  
    if (message === "") {
      setError("message","Поле 'Повідомлення' порожнє");
    } else if (!minLenghtRegEx.test(message)) {
      setError("message", "Повідомлення повинно містити мінімум 10 символів");
    }
  
    // Якщо всі перевірки пройдено успішно
    if (
      fname !== "" &&
      lname !== "" &&
      emailRegEx.test(email) &&
      minNumbRegEx.test(phone) &&
      minLenghtRegEx.test(message)
    ) {
      console.log("testGood");
    }
  };
  
  

  const sendMail = (event, data)=>{
    event.preventDefault();
    validate(event, data)
  }


  return (
    <div className="form_container">
      <h3>{"Get in Touch".toUpperCase()}</h3>
      <form action="">
        <div>
          <input
            onChange={handleChange}
            type="text"
            id="fname"
            name="fname"
            value={value.fname}
            placeholder="First name"
          />
          </div>
          <div>
          <input
            onChange={handleChange}
            type="text"
            id="lname"
            name="lname"
            value={value.lname}
            placeholder="Last name"

          />
          </div>
          <div>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={value.email}
            placeholder="Email"

          />
          </div>
          <div>
          <input
            onChange={handleChange}
            type="number"
            id="phone"
            name="phone"
            value={value.phone}
            placeholder="Phone"
          />
          </div>
          <div>
          <input
            onChange={handleChange}
            type="text"
            id="message"
            name="message"
            value={value.message}
            placeholder="Message"
          />
          </div>
          <div>
          <input onClick={(event)=>sendMail(event, value)} type="button" value="Submit" />
          </div>
      </form>
    </div>
  );
}

export default Form;
