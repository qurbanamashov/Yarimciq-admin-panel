import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import axios from "axios"
function Add() {
  return (
    <Formik
    initialValues={{ firstName: '', lastName: ''}}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

    })}
    onSubmit={(values) => {
        alert(values.firstName)
        const deyer = {
            description: values.firstName,
            name:values.lastName
        }
        axios.post("https://northwind.vercel.app/api/categories",deyer)
    }}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" type="text" />
      <ErrorMessage name="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" type="text" />
      <ErrorMessage name="lastName" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

export default Add