import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = user;

  const ViewUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    ViewUser();
  }, []);

  return(
    <>
    <table class="table border shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      </tbody>
    </table>
  </>
  );
};

export default User;
