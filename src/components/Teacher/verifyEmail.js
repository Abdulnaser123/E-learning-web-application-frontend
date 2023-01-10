import {EmojiFrown} from 'react-bootstrap-icons';
import React from 'react';
import {Facebook, Google, Linkedin} from 'react-bootstrap-icons';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api/';

function Verify() {
  const {teacher_id} = useParams();
  const [errorMsg, setErrMsg] = useState('');
  useEffect(() => {
    document.title = 'Verify Login';
  });
  const [teacherData, setTeacherData] = useState({
    otp_digit: '',
  });
  const handleChange = (e) => {
    setTeacherData({...teacherData, [e.target.name]: e.target.value});
  };
  const submitForm = () => {
    const teacherLoginForm = new FormData();
    teacherLoginForm.append('otp_digit', teacherData.otp_digit);
    try {
      axios
        .post(baseURL + 'verify-teacher/' + teacher_id, teacherLoginForm)
        .then((res) => {
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
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <div className="form-outline mb-4">
              <input
                type="number"
                id="otp_digit"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                value={teacherData.otp_digit}
                onChange={handleChange}
                name="otp_digit"
              />
              <label className="form-label" for="otp_digit">
                Otp 6 digits
              </label>
              <button onClick={submitForm}>Verify</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
