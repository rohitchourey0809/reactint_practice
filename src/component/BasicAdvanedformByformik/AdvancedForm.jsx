import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

export const AdvancedForm = () => {
    const [verified,SetVerified] = useState(false)
    function onChange(value) {
        SetVerified(true)
        console.log("Captcha value:", value);
      }
  return (
    <div>
        <h1>Subscribe!</h1>
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
           photo:null,
           attachments:[],
           recaptcha:"",
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Invalid Job Type'
             )
             .required('Required'),
             recaptcha: Yup.string().required("Required Recaptcha")
         })}
         onSubmit={async (values, { setSubmitting }) => {
            let formData = new FormData()
            formData.append("firstName",values.firstName)
            formData.append("lastName",values.lastName)
            formData.append("email",values.email)
            formData.append("photo",values.photo)

            for(let i = 0 ; i<values.length; i++){
                formData.append(`attachments[${i}]`,values.attachments[i])
            }

            formData.append('recaptcha',values.recaptcha)
            alert("FormSubmitted")
            console.log("formData",formData.get("firstName"))
            console.log("formData",formData.get("lastName"))
            console.log("formData",formData.get("email"))
            console.log("formData",formData.get("photo"))
            console.log("formData",formData.get("recaptcha"))
            
            console.log("values",values)
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             
             setSubmitting(false);
            //  actions.resetForm()
           }, 400);
         
        //    
         }}
         
       >
       {/* {(props)=>{ */}
          <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />,

          <button  type="submit">Submit</button>
          <button  type="reset">reset</button>
        </Form>
       {/* }} */}
       </Formik>
    </div>
  )
}

// export default AdvancedForm


export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };


  export const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
