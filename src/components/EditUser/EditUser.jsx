import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSave } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import './EditUser.css';

function EditUser() {

  const params = useParams();
  console.log("PARAMS", params)

  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');

  useEffect( () =>{
    axios.get(`/api/users/${params._id}`, { _id: params._id } )
      .then( res =>{ 
        const userData = res.data;
        setName(userData.name);
        setAge(userData.age)          
        setEmail(userData.email)
        setPhone(userData.phone)
        } )
      .catch( err =>{
        console.log( err )
      } )
  },[] )


  function editUserForm(){

  }

  return (
    // <div className='edit-user-container'>
    <div className='container'>
      <h2>Edit User</h2>
      <div className='row'>
        <div className='col-sm-6 offset-3'>

          <div className='mb-3'>
            <label htmlFor='id' className='form-label'>Id</label>
            <input type='text' className='form-control' value={ params._id } id='id' disabled></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' value={ name } onChange={ (e) => { setName( e.target.value ) } } id='name'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>Age</label>
            <input type='text' className='form-control' value={ age } onChange={ (e) => { setAge( e.target.value ) } }></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' value={ email } onChange={ (e) => { setEmail( e.target.value ) } }></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='tel' className='form-label'>Phone</label>
            <input type='text' className='form-control' value={ phone } onChange={ (e) => { setPhone( e.target.value ) } }></input>
          </div>

          <div className='edit-button-container'>
            <button onClick={ editUserForm } className='btn btn-success button'><FaSave className='icon-card'/> Save User</button>
            <Link to={"/"} className='btn btn-warning button'><FaArrowCircleLeft className='icon-card'/> Back</Link>
          </div>


        </div>
      </div>
    </div>
  )
}

export default EditUser