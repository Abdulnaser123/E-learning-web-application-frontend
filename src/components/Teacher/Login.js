import {EmojiFrown} from 'react-bootstrap-icons';
import React from 'react';
import {Facebook, Google, Linkedin} from 'react-bootstrap-icons';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api/';

function Login() {
  const [errorMsg, setErrMsg] = useState('');
  useEffect(() => {
    document.title = 'Teacher Login';
  });
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setTeacherLoginData({...teacherLoginData, [e.target.name]: e.target.value});
  };
  const submitForm = () => {
    const teacherLoginForm = new FormData();
    teacherLoginForm.append('email', teacherLoginData.email);
    teacherLoginForm.append('password', teacherLoginData.password);
    try {
      axios.post(baseURL + 'teacher-login', teacherLoginForm).then((res) => {
        if (res.data.bool === true) {
          localStorage.setItem('teacherLoginStatus', true);
          localStorage.setItem('teacherId', res.data.teacher_id);

          window.location.href = '/teacher-dashboard';

          // console.log(res.data);
        } else {
          setErrMsg(res.data.msg);
        }
        // console.log(res.data);
      });
    } catch (error) {
      console.error('error' + error);
    }
  };

  if (localStorage.getItem('teacherLoginStatus') === 'true') {
    console.log(localStorage.getItem('teacherLoginStatus'));
    window.location.href = '/teacher-dashboard';
  }
  return (
    <section className="vh-100 mt-4">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            {/* classNameName="img-fluid" */}

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw1.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <Facebook size={24} />
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <Google size={24} />
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <Linkedin size={24} />
              </button>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            {errorMsg && (
              <p className="p-3 mb-2 bg-dark text-white">
                {errorMsg}
                <EmojiFrown size={24} />
              </p>
            )}

            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                value={teacherLoginData.email}
                onChange={handleChange}
                name="email"
              />
              <label className="form-label" for="email">
                Email address
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
                value={teacherLoginData.password}
                onChange={handleChange}
                name="password"
              />
              <label className="form-label" for="password">
                Password
              </label>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                onClick={submitForm}
                className="btn btn-primary btn-lg"
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{' '}
                <Link to={'/teacher-register'}>
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
