import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {PencilSquare, Trash, PlusSquare} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function CourseQuiz() {
  const [QuestionsData, setQuestionsData] = useState([]);
  const {quiz_id} = useParams();
  //   console.log('quiz_id' + quiz_id);
  const studentId = localStorage.getItem('studentId');

  useEffect(() => {
    try {
      axios.get(baseURL + '/quizQuestions/' + quiz_id + '/1').then((res) => {
        setQuestionsData(res.data);
        console.log('question is : ' + res);
      });
    } catch (error) {}
  }, []);
  const submitAnswer = (id, rightAns) => {
    const _formData = new FormData();

    _formData.append('student', studentId);
    _formData.append('quiz', quiz_id);

    _formData.append('question', id);
    _formData.append('rightAns', QuestionsData.right_ans);

    // console.log(11);
    try {
      axios
        .post(baseURL + '/attempt-quiz/', _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            try {
              axios
                .get(
                  baseURL + '/quizQuestions/' + quiz_id + '/next-question/' + id
                )
                .then((res) => {
                  setQuestionsData(res.data);
                });
            } catch (error) {}
          }
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
          <h4 className="mb-3">Quiz Title</h4>
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered">
                <tbody>
                  {QuestionsData.map((question, index) => (
                    <>
                      <h4 className="card-header">{question.question}</h4>
                      <tr>
                        <td>
                          <button
                            onClick={() =>
                              submitAnswer(question.id, question.ans1)
                            }
                            className="btn btn-outline-secondary"
                          >
                            {question.ans1}
                          </button>
                        </td>
                      </tr>{' '}
                      <tr>
                        <td>
                          <button
                            onClick={() =>
                              submitAnswer(question.id, question.ans2)
                            }
                            className="btn btn-outline-secondary"
                          >
                            {question.ans2}
                          </button>
                        </td>
                      </tr>{' '}
                      <tr>
                        <td>
                          <button
                            onClick={() =>
                              submitAnswer(question.id, question.ans3)
                            }
                            className="btn btn-outline-secondary"
                          >
                            {question.ans3}
                          </button>
                        </td>
                      </tr>{' '}
                      <tr>
                        <td>
                          <button
                            onClick={() =>
                              submitAnswer(question.id, question.ans4)
                            }
                            className="btn btn-outline-secondary"
                          >
                            {question.ans4}
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseQuiz;
