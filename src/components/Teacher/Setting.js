import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

import {useState, useEffect} from 'react';
const baseURL = 'http://127.0.0.1:8000/api';

function Setting() {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (!teacherLoginStatus) window.location.href = '/teacher-login';
  const [teacherData, setTeacherData] = useState({
    full_name: '',
    email: '',
    qualification: '',
    mobile_no: '',
    password: '',
    skills: '',
    profile_img: '',
    prev_img: '',
  });
  const teacherId = localStorage.getItem('teacherId');

  useEffect(() => {
    try {
      axios.get(baseURL + '/teacher/' + teacherId).then((res) => {
        if (res.status === 200 || res.status === 201) {
          setTeacherData({
            full_name: res.data.full_name,
            email: res.data.email,
            qualification: res.data.qualification,
            password: res.data.password,

            mobile_no: res.data.mobile_no,
            skills: res.data.skills,
            prev_img: res.data.profile_img,
          });
        }
      });
    } catch (error) {
      console.log('error is ', error);
    }
  }, []);

  const handleChange = (e) => {
    setTeacherData({...teacherData, [e.target.name]: e.target.value});
  };
  const handleFileChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.files[0],
    });
  };
  const submitForm = (e) => {
    const teacherFormData = new FormData();
    teacherFormData.append('full_name', teacherData.full_name);
    teacherFormData.append('email', teacherData.email);
    teacherFormData.append('qualification', teacherData.qualification);
    teacherFormData.append('mobile_no', teacherData.mobile_no);
    teacherFormData.append('skills', teacherData.skills);
    teacherFormData.append('password', teacherData.password);
    teacherFormData.append('profile_img', teacherData.profile_img);
    teacherFormData.append('skills', teacherData.skills);

    try {
      axios
        .put(baseURL + '/teacher/' + teacherId + '/', teacherFormData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Profile Setting</h5>
            <div className="card-body">
              <div class="mb-3 row">
                <label for="full_name" class="col-sm-2 col-form-label">
                  Full name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="full_name"
                    readonly
                    class="form-control"
                    id="full_name"
                    value={teacherData.full_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    name="email"
                    class="form-control"
                    id="email"
                    value={teacherData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="profile_img" class="col-sm-2 col-form-label">
                  Profile photo
                </label>
                <div class="col-sm-10">
                  <input
                    type="file"
                    id="profile_img"
                    onChange={handleFileChange}
                    name="profile_img"
                    accept="image/png, image/jpeg"
                  />
                  {teacherData.prev_img && (
                    <img
                      alt="profile-img"
                      src={teacherData.prev_img}
                      width={150}
                    />
                  )}
                </div>
              </div>

              <div class="mb-3 row">
                <label for="skills" class="col-sm-2 col-form-label">
                  Skills
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="skills"
                    name="skills"
                    value={teacherData.skills}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="qualification" class="col-sm-2 col-form-label">
                  Qualification
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="qualification"
                    name="qualification"
                    value={teacherData.qualification}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Setting;
