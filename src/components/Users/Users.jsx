import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';
import './Users.css';

function Users() {

  const [ dataUsers, setDataUsers] = useState( [] );

  useEffect( () =>{
    axios.get('api/users')
      .then( res => {
        setDataUsers( res.data )
      } )
      .catch( err =>{
        console.log( err )
      } )
  }, [] )

  const listUsers = dataUsers.map( user => {
    return(
      <div>
        <User 
          user={ user }
        />
      </div>
    )
  })

  return (
    <div className='list-users-container'>
      <h1>Lista de Clienta</h1>
      <div className='list-users'>
        { listUsers }
      </div>
    </div>
  )
}

export default Users