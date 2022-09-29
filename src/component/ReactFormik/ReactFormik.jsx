import { useFormik } from "formik";
import axios from "axios"
import "./BasicFormik.css"
import React from "react";
import { SignupSchema } from "../schemas";
;

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  
};

const ReactFormik = () => {
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:SignupSchema,
    onSubmit: (values,action) => {
      console.log("clicked")
      console.log("formik property", values);
      SbiRegdata(values)
      action.resetForm()
    },
    
  }
 
  );
  console.log("formik property",errors);

  const SbiRegdata = (payload) => {
    axios
    .post("http://localhost:8080/Sbiform", payload)
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      return error;
    });
  }


  // console.log("Formik", values);
  return (
    <div className="sbidiv">
      <h2>React Formik</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? ( <p className="form-error">{errors.name}</p>):null}
         
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? ( <p className="form-error">{errors.email}</p>):null}
         
        </div>
        <div className="input-block">
          <label htmlFor="mobile" className="input-label">
           Mobile
          </label>
          <input
            type="tel"
            maxLength={10}
            autoComplete="off"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobile && touched.mobile ? ( <p className="form-error">{errors.mobile}</p>):null}
        </div>

        <div className="modal-buttons">
          {/* <a href="#" className=''>Want To Regsiter using Gmail</a> */}
          <button className="input-button" type="submit" value="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactFormik;
