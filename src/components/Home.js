import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const UsersData = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  useEffect(() => {
    UsersData();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    UsersData();
  }

  return (
    <>
      <table class="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr >
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary mx-2" to={`/user/view/${user.id}`}>View</Link>
                <Link className="btn btn-primary mx-2" to={`/user/edit/${user.id}`}>Edit</Link>
                <Link className="btn btn-primary mx-2" onClick={() => deleteUser(user.id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
