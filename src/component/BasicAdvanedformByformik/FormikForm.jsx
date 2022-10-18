import React from 'react'
import { Link } from 'react-router-dom'
import BasicForm from './BasicForm'

const FormikForm = () => {
  return (
    <>
    <h4>Basic Advanced form</h4>
    <div className='' >
        
        <Link to="/basicform" className='d-flex'>BasicForm<BasicForm/></Link>
        <Link to="/advancedform">Advanced Form</Link>
     </div>
    </>
  )
}

export default FormikForm
