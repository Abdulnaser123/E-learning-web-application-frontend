import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ChatRightText} from 'react-bootstrap-icons';
import MessagesList from '../Teacher/MessagesList';
import {Send, Briefcase} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function MyCourses() {
  const [courseData, setCourseData] = useState([]);
  const studentId = localStorage.getItem('studentId');
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
  const submitForm = (teacher_id) => {
    const _formData = new FormData();

    _formData.append('teacher', teacher_id);
    _formData.append('student', studentId);
    _formData.append('msg_text', msgData.msg_text);
    _formData.append('msg_from', 'student');

    try {
      axios
        .post(baseURL + '/send-msg/' + teacher_id + '/' + studentId, _formData)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };

  console.log(studentId);
  useEffect(() => {
    axios.get(baseURL + '/fetch-enrolled-courses/' + studentId).then((res) => {
      setCourseData(res.data);
      console.log(res.data);
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
            <h4 className="card-header">My Courses</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Course </th>
                    <th>Create By </th>
                    <th>Quiz</th> <th>Message to teacher</th>
                  </tr>
                </thead>

                <tbody>
                  {courseData.map((course, index) => {
                    return (
                      <>
                        <tr>
                          {}
                          <td>
                            <Link
                              to={'/all-chapters/' + course.id}
                              className="text-decoration-none"
                            >
                              {' '}
                              {course.course.title}
                            </Link>
                          </td>

                          <td>
                            <Link
                              to={'/enrolled-students/' + course.id}
                              className="text-decoration-none text-primary"
                            >
                              {course.course.teacher.full_name}
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="btn btn-sm btn-warning "
                              to={'/course-quiz/' + course.course.id}
                            >
                              Quiz List {}
                            </Link>
                            <Link
                              to={'/user-study-materials/' + course.course.id}
                            >
                              <button className="btn btn-primary  btn-sm ms-2">
                                Study materials <Briefcase size={20} />
                              </button>
                            </Link>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              title="send message"
                              type="button"
                            >
                              <ChatRightText />
                            </button>
                          </td>
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
                                    teacher_id={course.course.teacher.id}
                                    student_id={studentId}
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
                                        submitForm(course.course.teacher.id)
                                      }
                                    >
                                      Send {<Send />}
                                    </button>
                                  </form>
                                </raw>
                              </div>{' '}
                            </div>
                          </div>
                        </tr>
                      </>
                    );
                  })}{' '}
                </tbody>
              </table>
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyCourses;
