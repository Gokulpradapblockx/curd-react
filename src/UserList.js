/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import axios from "axios";
// import React from "react";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

function UserList() {
  let [userList, setUserList] = useState([]);
  useEffect(() => {
    getData();
  }, []); // on Mount

  let getData = async () => {
    let data = await axios.get(
      "https://61f531ae62f1e300173c4040.mockapi.io/api/list"
    );
    setUserList(data.data);
  };

  let handleDelete = async (id) => {
    let res = confirm("Are sure want to delete");
    if (res) {
      let data = await axios.delete(
        `https://61f531ae62f1e300173c4040.mockapi.io/api/list/${id}`
      );
      getData();
    }
  };
  
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/usercreate"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City </th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  userList.map((user) => {
                    return <tr>
                    <td>{user.name}</td>
                    <td> {user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>
                      <Link to={`/userviwe/${user.id}`} className="btn btn-warning m-1">
                        Viwe
                      </Link>
                      <Link to={`/useredit/${user.id}`} className="btn btn-primary m-1">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
