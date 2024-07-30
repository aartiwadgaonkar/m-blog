import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/user/userAction'

const Login = () => {
  const navigate = useNavigate()
  const { loading, error, info } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required()
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values))
      // console.log("Login successfully");
    }
  })
  useEffect(() => {
    info && info.role === "user" && navigate("/user")
    info && info.role === "admin" && navigate("/admin")
  }, [info])

  return <>
    <div className="container">
      {/* <h6>{JSON.stringify(formik.values)}</h6>
      <h1>{JSON.stringify(formik.errors)}</h1> */}
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          {
            error && <div className='alert alert-danger'>{error}</div>
          }
          <div className="card mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label for="email" className="form-label">First Email</label>
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={
                      formik.errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
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
                    className={
                      formik.errors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button>
                <p className="text-center mt-3">
                  Dont Have Account? <Link to="/register">Create Account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Login