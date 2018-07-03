import React from 'react';

const EmployeeDetail = ({employee}) => {

  const {name, email, phone, avatar} = employee;
  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">email: {email}</li>
          <li className="list-group-item">phone: {phone}</li>
        </ul>
      </div>
    </div>
  )
};

export default EmployeeDetail;
