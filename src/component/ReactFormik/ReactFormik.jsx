import { useFormik } from "formik";
import React from "react";
import { SignupSchema } from "../schemas";
;

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const ReactFormik = () => {
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:SignupSchema,
    onSubmit: (values,action) => {
      console.log("clicked")
      console.log("formik property", values);
      action.resetForm()
    },
    
  }
 
  );
  console.log("formik property",errors);

  // console.log("Formik", values);
  return (
    <div>
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
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? ( <p className="form-error">{errors.password}</p>):null}
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? ( <p className="form-error">{errors.confirm_password}</p>):null}
 
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
