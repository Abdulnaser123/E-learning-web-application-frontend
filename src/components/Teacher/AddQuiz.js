import React from 'react';
import Sidebar from './Sidebar';
import {useState} from 'react';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api';

function AddQuiz() {
  const [quizData, setQuizData] = useState({
    title: '',
    detail: '',
  });

  const handleChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    const teacherId = localStorage.getItem('teacherId');
    const _formData = new FormData();

    _formData.append('teacher', teacherId);
    _formData.append('title', quizData.title);
    _formData.append('detail', quizData.detail);

    // console.log(11);
    try {
      axios.post(baseURL + '/quiz/', _formData, {}).then((res) => {
        window.location.href = '/add-quiz/';
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
                    value={quizData.title}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="detail" className="col-sm-2 col-form-label">
                  Detail
                </label>
                <div className="col-sm-10">
                  <textarea
                    id="detail"
                    name="detail"
                    rows="4"
                    cols="30"
                    onChange={handleChange}
                    value={quizData.detail}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Add Quiz
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddQuiz;
