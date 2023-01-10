import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import MessagesList from './MessagesList';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {
  ChatRightText,
  PencilSquare,
  Trash,
  PlusSquare,
  Binoculars,
  Send,
} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function EnrolledStudents() {
  const teacher_id = localStorage.getItem('teacherId');
  const [msgData, setMsgData] = useState({
    msg_text: '',
  });
  const handleChange = (e) => {
    setMsgData({
      ...msgData,
      [e.target.name]: e.target.value,
    });
    console.log(msgData);
  };
  const submitForm = (student_id) => {
    console.log(student_id + '  ' + teacherId);
    const _formData = new FormData();

    _formData.append('teacher', teacher_id);
    _formData.append('student', student_id);
    _formData.append('msg_text', msgData.msg_text);
    _formData.append('msg_from', 'teacher');

    try {
      axios
        .post(baseURL + '/send-msg/' + teacher_id + '/' + student_id, _formData)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };
  const [studentData, setStudentData] = useState([]);
  const teacherId = localStorage.getItem('teacherId');
  //   console.log(teacherId);
  useEffect(() => {
    axios
      .get(baseURL + '/fetch-all-enrolled-students/' + teacherId)
      .then((res) => {
        setStudentData(res.data);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          {' '}
          <div className="card">
            <h4 className="card-header">Enrolled Students</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                    <th>Assignment </th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student, index) => {
                    return (
                      <>
                        <tr>
                          <td>{student.student.full_name}</td>

                          <td>{student.student.username}</td>
                          <td>
                            <Link to={'/add-chapter/' + student.id}>
                              <button className="btn btn-info btn-sm ms-2 ">
                                view
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={
                                '/assignments/' +
                                teacherId +
                                '/' +
                                student.student.id
                              }
                              className="btn btn-sm btn-warning"
                            >
                              Assignments
                            </Link>
                            <Link
                              to={
                                '/add-assignment/' +
                                teacherId +
                                '/' +
                                student.student.id
                              }
                              className="btn btn-sm btn-success ms-2"
                            >
                              Add Assignment
                            </Link>
                            <button
                              className="btn btn-sm btn-primary ms-2"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              title="send message"
                              type="button"
                            >
                              <ChatRightText />
                            </button>

                            <div
                              className="modal fade"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabindex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog  modal-dialog-centered modal-fullscreen">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="staticBackdropLabel"
                                    >
                                      Chatting
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    {' '}
                                    <MessagesList
                                      teacher_id={teacherId}
                                      student_id={student.student.id}
                                    />{' '}
                                  </div>{' '}
                                  <raw>
                                    <form
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '3px',
                                      }}
                                      className="col-12"
                                    >
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="msg"
                                          name="msg_text"
                                          aria-describedby="emailHelp"
                                          placeholder="Write your message"
                                          style={{width: '354px'}}
                                          onChange={handleChange}
                                        />
                                      </div>{' '}
                                      <button
                                        type="button"
                                        name="send"
                                        className="btn btn-primary"
                                        onClick={() =>
                                          submitForm(student.student.id)
                                        }
                                      >
                                        Send {<Send />}
                                      </button>
                                    </form>
                                  </raw>
                                </div>{' '}
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EnrolledStudents;
