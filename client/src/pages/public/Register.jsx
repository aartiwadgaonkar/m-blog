import React from 'react'
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import { registerUser } from '../../redux/user/userAction'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const initialValues = {
    name: 'ross',
    email: "ross@gmail.com",
    password: "123",
    cpassword: "123",
  }
  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      name: yup.string().required(true, "Please Enter name"),
      email: yup.string().required(true, "Please Enter Email").email("Please Enter Valid email"),
      password: yup.string().required(true, "Please Enter Password").min(3, "Please Enter Min 3 Chars"),
      cpassword: yup.string().oneOf([yup.ref("password")], "Plassword Do Not Match")
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values))
      console.log("register successfully");
    }
  })
  return <>
  <h6>{JSON.stringify(formik.values)}</h6>
        <h1>{JSON.stringify(formik.errors)}</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card mt-5">
            <div className="card-header">Signup</div>
            <form onSubmit={formik.handleSubmit}>
            <div className="card-body">
              <div>
                <label for="name" className="form-label">First name</label>
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.name && formik.touched.name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
              <div className="mt-2">
                <label for="email" className="form-label">First Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  } type="text"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
              <div className="mt-2">
                <label for="password" className="form-label">Password</label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid"
                      : "form-control"
                  } type="text"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please choose a password.</div>
              </div>
              <div className="mt-2">
                <label for="cpassword" className="form-label"
                >Confirm Password</label
                >
                <input
                  value={formik.values.cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.cpassword && formik.touched.cpassword
                      ? "form-control is-invalid"
                      : "form-control"
                  } type="text"
                  id="cpassword"
                  placeholder="Confirm Your Password"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please Recheck Your Password.
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Signup
              </button>
              <p className="text-center mt-3">
                Already Have Account? <Link to="/login">Login</Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Register