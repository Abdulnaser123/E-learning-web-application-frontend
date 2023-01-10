import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  PencilSquare,
  Trash,
  PlusSquare,
  Binoculars,
} from 'react-bootstrap-icons';
import CheckQuizAssignStatus from './CheckQuizAssignStatus';
const baseURL = 'http://127.0.0.1:8000/api';
function AllQuizes() {
  const {quizId} = useParams();
  const [quizData, setQuizData] = useState([]);

  const [assignStatus, setAssignStatus] = useState('field');
  const [courseData, setCourseData] = useState([]);

  const teacherId = localStorage.getItem('teacherId');
  const {course_id} = useParams();
  //   console.log(teacherId);
  useEffect(() => {
    // try {
    //   axios
    //     .get(baseURL + '/fetch-assign-status/' + teacherId + '/' + quizId)
    //     .then((res) => {
    //       if (res.data.bool === true) {
    //         setAssignStatus('success');
    //       } else {
    //         setAssignStatus('field');
    //       }
    //     });
    // } catch (error) {}
    try {
      axios.get(baseURL + '/course/' + course_id).then((res) => {
        setCourseData(res.data);
      });
    } catch (error) {}
    axios.get(baseURL + '/teacher-quiz/' + teacherId).then((res) => {
      setQuizData(res.data);
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
            <h4 className="card-header">Assign Quiz</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quizData.map((quiz, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to={'/quiz-questions/' + quiz.id}>
                              {quiz.title}
                            </Link>
                            {quiz.title}
                          </td>

                          <td>
                            <CheckQuizAssignStatus
                              quiz={quiz.id}
                              course={course_id}
                            />
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

export default AllQuizes;
