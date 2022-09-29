import React from "react";
import "./BasicFormik.css";
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
        } else if (!values.email) {
          errors.email = "Email is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.mobile) {
          errors.mobile = "Mobile is requied";
        } else if (
          !values.username === "" ||
          !values.email === "" ||
          (!values.mobile === "" && !values.toggle === false)
        ) {
          alert("Please Filled All Details");
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
        <div className="sbidiv">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <span>
              {" "}
              {errors.username && touched.username && errors.username}
            </span>
            <br />
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <span> {errors.email && touched.email && errors.email}</span> <br />
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile}
            />
           <span> {errors.mobile && touched.mobile && errors.mobile}</span>
            <br />
            <label>
              <Field type="checkbox" name="toggle" />
              {`${values.toggle}`}
            </label>
            <button className="btn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  </div>
);

export default Basic;
