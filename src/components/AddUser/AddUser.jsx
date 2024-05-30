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
    console.log(gender)
    var user = {
      name: name,
      age: age,
      email: email,
      phone: phone,
      gender: gender,
    };

    if (user) {
      axios
        .post("https://abyclientes-production.up.railway.app//api/users/adduser", user)
        .then((res) => {
          alert("User Added Successfully");
          clearFields();
        })
        .then((err) => console.error(err));
    }
  }

  return (
    <div className="add-user-container">
      <h2>Agregar Cliente</h2>

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

      <button onClick={ addUserForm } className='btn-save'>
        <MdSave className="icon-save"/>
        Guardar
      </button>

    </div>
    // <div className='container'>

    //   <div className='row'>
    //       <h2 className='mt-4'>Add User</h2>
    //   </div>

    //   <div className='row'>
    //     <div className='col-sm-6 offset-3'>

    //       <div className='mb-3'>
    //         <label htmlFor='name' className='form-label'>Name</label>
    //         <input type='text' className='form-control' value={ name } onChange={ (e) => { setName( e.target.value ) } } id='name'></input>
    //       </div>

    //       <div className='mb-3'>
    //         <label htmlFor='age' className='form-label'>Age</label>
    //         <input type='text' className='form-control' value={ age } onChange={ (e) => { setAge( e.target.value ) } }></input>
    //       </div>

    //       <div className='mb-3'>
    //         <label htmlFor='email' className='form-label'>Email</label>
    //         <input type='email' className='form-control' value={ email } onChange={ (e) => { setEmail( e.target.value ) } }></input>
    //       </div>

    //       <div className='mb-3'>
    //         <label htmlFor='tel' className='form-label'>Phone</label>
    //         <input type='text' className='form-control' value={ phone } onChange={ (e) => { setPhone( e.target.value ) } }></input>
    //       </div>

    //       <button onClick={ addUserForm } className='btn btn-success'>Save User</button>

    //     </div>
    //   </div>

    // </div>
  );
}

export default AddUser;
