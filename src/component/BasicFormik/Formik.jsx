import React from "react";
import { Field, Formik } from "formik";

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{
        username: "",
        email: "",
        mobile: "",
        toggle: false,
        checked: [],
      }}
      validate={(values) => {
        const errors = {};
       
        if (!values.username) {
          errors.username = "Username is requied";
        }
      
      
       else if (!values.email) {
          errors.email = "Email is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        

        else if (!values.mobile) {
          errors.mobile = "Mobile is requied";
        }

        else if(!values.username==="" || !values.email ==="" || !values.mobile ==="" && !values.toggle === false){
          alert("Please Filled All Details")
        }

       

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          {errors.username && touched.username && errors.username}
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <br />
          <label>Mobile</label>
          <input
            type="tel"
            name="mobile"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobile}
          />
          {errors.mobile && touched.mobile && errors.mobile}
          <br />
          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
