import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Usercreate() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please Enter the name";
      }
      if (!values.email) {
        errors.email = "Please Enter the email";        
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
      
      try {
        await axios.post(`https://61f531ae62f1e300173c4040.mockapi.io/api/list`,values)
      
       navigate("/userlink")
      } 
      catch (error) {
        console.log("Error");
      }
    },
  });
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
      </div>
      <div className="Container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <label>Name</label>
                  <input
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    name="name"
                    type="text"
                  ></input>
                  {formik.errors.name ? <div style={{color: "red"}}>{formik.errors.name}</div> : null}
                </div>
                <div className="col-lg-6">
                  <label>Email</label>
                  <input
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                    type="email"
                  ></input>
                   {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                </div>
                <div className="col-lg-4  mt-2">
                  <label>Country</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    name="country"
                  >
                    <option>INDIA</option>
                    <option>Nepal</option>
                  </select>
                 
                </div>
                <div className="col-lg-4  mt-2">
                  <label>State</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    name="state"
                  >
                    <option>Tamilnadu</option>
                    <option>Kerala</option>
                  </select>
                

                </div>
                <div className="col-lg-4 mt-2">
                  <label>City</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    name="city"
                  >
                    <option>Chennai</option>
                    <option>Madurai</option>
                  </select>
                 

                  <input type="submit" className="btn btn-primary mt-3"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Usercreate;
