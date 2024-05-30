import React from 'react';
import { Link } from 'react-router-dom';

// import { FaUserCheck } from "react-icons/fa";
// import { FaBabyCarriage } from "react-icons/fa";
// import { FaMailBulk } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";

import './User.css';

function User( { user } ) {
  return (
    <div className='user-container'>

      <div className="photo">
        <img 
        src={ user.gender === "Mujer" ? 
              "https://avatar.iran.liara.run/public/girl " :
              "https://avatar.iran.liara.run/public/boy "
            }
        />
      </div>

      <div className="title">
        <h3>{ user.name }</h3>
      </div>

      <div className="email">{ user.email }</div>

      <div className="extra-data">
        <div className="col">
          <div className="row1">Age</div>
          <div className="row2">{ user.age }</div>
        </div>

        <div className="col">
          <div className="row1">Phone</div>
          <div className="row2">{ user.phone }</div>
        </div>

        <div className="col">
          <div className="row1">Género</div>
          <div className="row2">{ user.gender }</div>
        </div>
      </div>

      <div className="button-container">
        <Link to={`/edituser/${user._id}`} className='button-user'><FaUserEdit className='icon-card' /> Edit</Link>
        <button className='button-user'><FaUserTimes className='icon-card' /> Erase</button>
      </div>

      {/* <div className="field">
        <div className="icon-field"><FaUserCheck /></div>
        <div className="data-field">{ user.name }</div>
      </div>

      <div className="field">
        <div className="icon-field"><FaBabyCarriage /></div>
        <div className="data-field">{ user.age }</div>
      </div>

      <div className="field">
        <div className="icon-field"><FaMailBulk /></div>
        <div className="data-field">{ user.email }</div>
      </div>

      <div className="field">
        <div className="icon-field"><FaPhoneAlt /></div>
        <div className="data-field">{ user.phone }</div>
      </div>

      <div className='buttons-container'>
        <Link to={`/edituser/${user._id}`} className='button-user'><FaUserEdit className='icon-card' /> Edit</Link>
        <button className='button-user'><FaUserTimes className='icon-card' /> Erase</button>
      </div> */}

    </div>
  )
}

export default User