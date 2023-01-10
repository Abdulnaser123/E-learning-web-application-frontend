import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CheckQuizStudentStatus from './CheckQuizStudentStatus';
import {useParams} from 'react-router-dom';
import {Check2All} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function CourseQuiz() {
  const [quizData, setQuizData] = useState([]);
  const studentId = localStorage.getItem('studentId');
  const {course_id} = useParams();
  useEffect(() => {
    axios.get(baseURL + '/fetch-assigned-quiz/' + course_id).then((res) => {
      setQuizData(res.data);
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
            <h4 className="card-header">Quiz List</h4>
            <h5>
              {' '}
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Quiz </th>
                      <th>Quiz Attempt Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizData.map((quiz, index) => {
                      return (
                        <>
                          <tr>
                            {}
                            <td>
                              <Link
                                to={'/all-chapters/' + quiz.id}
                                className="text-decoration-none"
                              >
                                {' '}
                                {quiz.quiz.title}
                              </Link>
                            </td>

                            <td>
                              <CheckQuizStudentStatus
                                quizId={quiz.quiz.id}
                                studentId={studentId}
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseQuiz;
