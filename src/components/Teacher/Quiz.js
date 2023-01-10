import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  PencilSquare,
  Trash,
  PlusSquare,
  Binoculars,
} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function AllQuizes() {
  const [quizData, setQuizData] = useState([]);
  const teacherId = localStorage.getItem('teacherId');
  //   console.log(teacherId);
  useEffect(() => {
    axios.get(baseURL + '/teacher-quiz/' + teacherId).then((res) => {
      setQuizData(res.data);
      // console.log(res.data);
    });
  }, []);
  console.log(quizData);
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
                            <Link
                              to={'/quiz-questions/' + quiz.id}
                              className="text-decoration-none"
                            >
                              {quiz.title}
                            </Link>
                          </td>

                          <td>
                            <Link to={'/edit-quiz/' + quiz.id}>
                              <button className="btn btn-info btn-sm">
                                Edit <PencilSquare size={20} />
                              </button>
                            </Link>
                            <Link to={'/add-question/' + quiz.id}>
                              <button className="btn btn-success btn-sm ms-4">
                                Add Question <PlusSquare size={20} />
                              </button>
                            </Link>
                            {/* to={'/delete-chapter/' + chapter.id} */}
                            <Link>
                              <button className="btn btn-danger ms-4 btn-sm">
                                Delete <Trash size={20} />
                              </button>
                            </Link>
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
