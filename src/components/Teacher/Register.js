import axios from 'axios';
import React from 'react';
import {
  Person,
  Key,
  Envelope,
  Bookmark,
  Check2Circle,
} from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';
const baseUrl = 'http://127.0.0.1:8000/api/teacher/';
function Register() {
  // full_name = models.CharField((max_length = 100));
  // email = models.CharField((max_length = 100));
  // password = models.CharField((max_length = 100));
  // qualification = models.CharField((max_length = 200));
  // mobile_no = models.CharField((max_length = 20));
  // address = models.TextField();
  const [teacherData, setTeacherData] = useState({
    full_name: '',
    email: '',
    password: '',
    qualification: '',
    mobile_no: '',
    skills: '',
    status: '',
  });
  const handleChange = (e) => {
    setTeacherData({...teacherData, [e.target.name]: e.target.value});
  };
  const submitForm = (e) => {
    const teacherFormData = new FormData();
    teacherFormData.append('full_name', teacherData.full_name);
    teacherFormData.append('email', teacherData.email);
    teacherFormData.append('password', teacherData.password);
    teacherFormData.append('qualification', teacherData.qualification);
    teacherFormData.append('mobile_no', teacherData.mobile_no);
    teacherFormData.append('skills', teacherData.skills);

    try {
      axios.post(baseUrl, teacherFormData).then((response) => {
        console.log(response.data);
        setTeacherData({
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
      setTeacherData({
        full_name: '',
        email: '',
        password: '',
        qualification: '',
        mobile_no: '',
        skills: '',
        status: 'error',
      });
      console.log(teacherData.status);

      console.log(error);
    }
  };
  console.log(localStorage);
  if (localStorage.getItem('teacherLoginStatus') === 'true') {
    console.log(localStorage.getItem('teacherLoginStatus'));
    window.location.href = '/teacher-dashboard';
  }
  console.log(teacherData.status);
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
                      Sign up
                    </p>
                    {teacherData.status === 'success' && (
                      <p className="text-success">
                        <Check2Circle /> Thanks for your registration
                      </p>
                    )}
                    {teacherData.status === 'error' && (
                      <p className="text-danger">Something is wrong!</p>
                    )}

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="full_name"
                            className="form-control"
                            onChange={handleChange}
                            name="full_name"
                            value={teacherData.full_name}
                          />
                          <label className="form-label" for="full_name">
                            <Person size={24} color="royalblue" /> Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            onChange={handleChange}
                            name="email"
                            value={teacherData.email}
                          />
                          <label className="form-label" for="email">
                            <Envelope size={24} color="royalblue" /> Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={handleChange}
                            name="password"
                            value={teacherData.password}
                          />
                          <label className="form-label" for="password">
                            <Key size={24} color="royalblue" /> Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="Qualification"
                            className="form-control"
                            onChange={handleChange}
                            name="qualification"
                            value={teacherData.qualification}
                          />
                          <label className="form-label" for="Qualification">
                            <Key size={24} color="royalblue" /> Qualification
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="mobile_no"
                            className="form-control"
                            onChange={handleChange}
                            name="mobile_no"
                            value={teacherData.mobile_no}
                          />
                          <label className="form-label" for="mobile_no">
                            <Bookmark size={24} color="royalblue" /> Mobile No.
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="skills"
                            className="form-control"
                            onChange={handleChange}
                            name="skills"
                            value={teacherData.skills}
                          />
                          <label className="form-label" for="skills">
                            <Bookmark size={24} color="royalblue" /> Skills
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
