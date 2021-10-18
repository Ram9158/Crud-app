import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import validation from './Validation'

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    Address: "",
    email: "",  
    phone: "",
    Age: "",
    img:""
  });

  const { name, Address, email, phone, Age, img } = user;
  const [errors, seterror] = useState({})

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    seterror(validation(name,email,phone))

    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              required='true'
              value={name}
              onChange={e => onInputChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              required='true'
              name="Address"
              value={Address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail"
              name="email"
              required="true"
              value={email}
              onChange={e => onInputChange(e)}
            />
            {errors.email && <p>{errors.email}</p>}

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              required='true'
              onChange={e => onInputChange(e)}
            />
            {errors.phone && <p>{errors.phone}</p>}

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Age"
              name="Age"
              required='true'
              value={Age}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
          <input type="file" id="myFile" name="filename"
           className="form-control form-control-lg"
           />
          </div> */}
           <div  className="form-group">
                <input 
                 value={img}
                 className="form-control form-control-lg"
                 type="file"
                 required='true'
                 name="img"
                 onChange={e => onInputChange(e)}   //onChange={e => onInputChange(e.target.file[0])} //

                />
                
            </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;