import React, { useState } from "react";
import axios from "axios";
import { MdSave } from "react-icons/md";
import "./AddUser.css";
// const axios = require('axios').default;

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  function clearFields() {
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setGender("");

    document.getElementById("name").focus();
  }

  function addUserForm() {
    var user = {
      name: name,
      age: age,
      email: email,
      phone: phone,
      gender: gender,
    };
    console.log("Datos",user)

    if (user) {
      axios
        .post('https://web-production-7f2d.up.railway.app/https://api-clientes-production-140a.up.railway.app/api/users/adduser', { data: 'user'})
        .then((res) => {
          alert("Cliente agregado correctamente");
          clearFields();
        })
        .then((err) => console.error(err));
      }
      event.preventDefault();
  }

  return (
    <div className="add-user-container">
      <h2>Agregar Cliente</h2>

      <form onSubmit={addUserForm}>

        <div className="add-field">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input type="text" id="name" className="form-control" value={name} required
            onChange={(e) => {
              setName(e.target.value);
            }}>
          </input>
        </div>

        <div className="add-field">
          <label htmlFor="age" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>

        <div className="add-field">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="add-field">
          <label htmlFor="tel" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>

        <div className="add-field-radio">
          <label htmlFor="tel" className="form-label-radio">
          Mujer
          </label>
          
          <input
            type="radio"
            className="form-control-radio"
            value="Mujer"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
        
          <label htmlFor="tel" className="form-label-radio">
            Hombre
          </label>
          <input
            type="radio"
            className="form-control-radio"
            value="Hombre"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
        </div>

        <button type="submit" className='btn-save'>
          <MdSave className="icon-save"/>
          Guardar
        </button>

      </form>


    </div>
    
  );
}

export default AddUser;
