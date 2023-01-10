import React from 'react';
import Sidebar from './Sidebar';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api';

function AddQuizQuestions() {
  const [enrollStatus, setEnrollStatus] = useState();

  const [quizQuestionData, setQuizQuestionData] = useState({
    quiz: '',
    question: '',
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    rightAns: '',
  });

  const handleChange = (e) => {
    setQuizQuestionData({
      ...quizQuestionData,
      [e.target.name]: e.target.value,
    });
  };
  const {quizId} = useParams();
  console.log('quiz id is L:' + quizId);
  const submitForm = () => {
    const _formData = new FormData();

    _formData.append('question', quizQuestionData.question);
    _formData.append('ans1', quizQuestionData.ans1);
    _formData.append('ans2', quizQuestionData.ans2);
    _formData.append('ans3', quizQuestionData.ans3);
    _formData.append('ans4', quizQuestionData.ans4);
    _formData.append('quiz', quizId);
    _formData.append('rightAns', quizQuestionData.rightAns);

    // console.log(11);
    try {
      axios
        .post(baseURL + '/quizQuestions/' + quizId, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
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
            <h5 className="card-header">Add Quiz</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="questions" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="question"
                    type="text"
                    className="form-control"
                    id="questions"
                  />
                </div>
              </div>{' '}
              <div className="mb-3 row">
                <label for="ans1" className="col-sm-2 col-form-label">
                  Answer 1
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="ans1"
                    type="text"
                    className="form-control"
                    id="ans1"
                  />
                </div>
              </div>{' '}
              <div className="mb-3 row">
                <label for=" Answer 2" className="col-sm-2 col-form-label">
                  Answer 2
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="ans2"
                    type="text"
                    className="form-control"
                    id=" Answer 2"
                  />
                </div>
              </div>{' '}
              <div className="mb-3 row">
                <label for="Answer 3" className="col-sm-2 col-form-label">
                  Answer 3
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="ans3"
                    type="text"
                    className="form-control"
                    id="Answer 3"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="Answer 4" className="col-sm-2 col-form-label">
                  Answer 4
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="ans4"
                    type="text"
                    className="form-control"
                    id="Answer 4"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="rightAns" className="col-sm-2 col-form-label">
                  Right Answer
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="rightAns"
                    type="text"
                    className="form-control"
                    id="rightAns"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Add Question
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddQuizQuestions;
