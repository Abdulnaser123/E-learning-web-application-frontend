import React from 'react';
import axios from 'axios';
import {
  Person,
  Key,
  Envelope,
  Bookmark,
  Check2Circle,
} from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';
const baseUrl = 'http://127.0.0.1:8000/api/student/';
function Register() {
  const [StudentData, setStudentData] = useState({
    full_name: '',
    email: '',
    password: '',
    username: '',
    interested_categories: '',
    status: '',
  });
  const handleChange = (e) => {
    setStudentData({...StudentData, [e.target.name]: e.target.value});
    console.log(StudentData);
  };
  const submitForm = (e) => {
    const studentFormData = new FormData();
    studentFormData.append('full_name', StudentData.full_name);
    studentFormData.append('email', StudentData.email);
    studentFormData.append('password', StudentData.password);
    studentFormData.append('username', StudentData.username);
    studentFormData.append(
      'interested_categories',
      StudentData.interested_categories
    );

    try {
      axios.post(baseUrl, studentFormData).then((response) => {
        console.log(response.data);
        setStudentData({
          full_name: '',
          email: '',
          password: '',
          qualification: '',
          mobile_no: '',
          skills: '',
          status: 'success',
        });
      });
    } catch (error) {
      setStudentData({
        full_name: '',
        email: '',
        password: '',
        qualification: '',
        mobile_no: '',
        skills: '',
        status: 'error',
      });
      console.log(setStudentData.status);

      console.log(error);
    }
  };
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Student Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            onChange={handleChange}
                            name="full_name"
                            value={StudentData.full_name}
                          />
                          <label className="form-label" for="name">
                            <Person size={24} color="royalblue" /> Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={handleChange}
                            name="username"
                            value={StudentData.username}
                          />
                          <label className="form-label" for="form3Example1c">
                            <Person size={24} color="royalblue" /> Username
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={handleChange}
                            name="email"
                            value={StudentData.email}
                          />
                          <label className="form-label" for="form3Example3c">
                            <Envelope size={24} color="royalblue" /> Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4cd"
                            className="form-control"
                            onChange={handleChange}
                            name="interested_categories"
                            value={StudentData.interested_categories}
                          />
                          <label className="form-label" for="form3Example4cd">
                            <Key size={24} color="royalblue" /> Interests
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={handleChange}
                            name="password"
                            value={StudentData.password}
                          />
                          <label className="form-label" for="form3Example4c">
                            <Key size={24} color="royalblue" /> Password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{' '}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={submitForm}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="   img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
