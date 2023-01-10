import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api';
function AttemptedStudents() {
  const [studentData, setStudentData] = useState([]);
  const [resultStudentData, setResultStudentData] = useState([]);

  const {quizId} = useParams();
  const studentId = localStorage.getItem('studentId');
  useEffect(() => {
    try {
      axios.get(baseURL + '/attempted_students/' + quizId).then((res) => {
        setStudentData(res.data);
      });
    } catch (error) {}
  }, []);

  const showResult = () => {
    try {
      axios
        .get(baseURL + '/fetch-quiz-result/' + quizId + '/' + studentId)
        .then((res) => {
          setResultStudentData(res.data);
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
          {' '}
          <div className="card">
            <h4 className="card-header">Students Attempted Quiz </h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((attempt, index) => {
                    return (
                      <>
                        <tr>
                          <td>{attempt.student.full_name}</td>

                          <td>{attempt.student.username}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={showResult}
                            >
                              Show Result
                            </button>

                            <div
                              class="modal fade"
                              id="exampleModal"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1
                                      class="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Quiz Result
                                    </h1>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <table class="table table-bordered">
                                      <tr>
                                        <td>Total Questions</td>
                                        <td className="text-secondary">
                                          {resultStudentData.total_questions}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Attempted Questions</td>
                                        <td className="text-secondary">
                                          {' '}
                                          {
                                            resultStudentData.total_attempted_questions
                                          }
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Correct Questions</td>
                                        <td className="text-secondary">
                                          {' '}
                                          {
                                            resultStudentData.total_correct_questions
                                          }
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
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

export default AttemptedStudents;
