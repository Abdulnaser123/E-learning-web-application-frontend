import React from 'react';
import Sidebar from './Sidebar';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import {Link} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function AddAssignment() {
  const [AssignmentData, setAssignmentData] = useState({
    title: '',
    detail: '',
  });
  const handleFileChange = (e) => {
    setAssignmentData({
      ...AssignmentData,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleChange = (e) => {
    setAssignmentData({
      ...AssignmentData,
      [e.target.name]: e.target.value,
    });
  };
  const {teacher_id} = useParams();
  const {student_id} = useParams();

  const submitForm = () => {
    const _formData = new FormData();

    _formData.append('teacher', teacher_id);
    _formData.append('title', AssignmentData.title);
    _formData.append('detail', AssignmentData.detail);
    _formData.append('student', student_id);

    // console.log(11);
    try {
      axios
        .post(
          baseURL + '/student-assignment/' + teacher_id + '/' + student_id,
          _formData,
          {
            headers: {
              'content-type': 'multipart/form-data',
            },
          }
        )
        .then((res) => {
          const _notifData = new FormData();
          _notifData.append('teacher', teacher_id);
          _notifData.append('notif_subject', 'assignment');
          _notifData.append('notif_for', 'student');
          _notifData.append('student', student_id);
          axios
            .post(baseURL + '/save-notification/', _notifData, {
              headers: {
                'content-type': 'multipart/form-data',
              },
            })
            .then((res) => {
              console.log('notification Added');
            });

          window.location.href =
            '/student-assignment/' + teacher_id + '/' + student_id;
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Assignment</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    value={AssignmentData.title}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="detail" className="col-sm-2 col-form-label">
                  detail
                </label>
                <div className="col-sm-10">
                  <textarea
                    id="detail"
                    name="detail"
                    rows="4"
                    cols="30"
                    onChange={handleChange}
                    value={AssignmentData.detail}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Add Assignment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddAssignment;
