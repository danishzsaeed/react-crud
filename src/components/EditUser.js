import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const EditUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    let navigate = useNavigate();

    const {name, email} = user;

    const AddUser = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        navigate("/");
    }

    const UsersData = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
      };

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        UsersData();
    },[]);

  return (
    <>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A User</h2>
        <form onSubmit={e => AddUser(e)}>
          <div className="form-group pb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group pb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update User</button>
        </form>
      </div>
    </div>
    </>
  )
}


export default EditUser