import React from 'react';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
const baseURL = 'http://127.0.0.1:8000/api';
function EditCourse() {
  const teacherId = localStorage.getItem('teacherId');
  const [quizData, setQuizData] = useState({
    title: '',
    detail: '',
  });
  const {quizId} = useParams();
  useEffect(() => {
    try {
      axios.get(baseURL + '/teacher-quiz-detail/' + quizId).then((res) => {
        setQuizData({
          title: res.data.title,
          detail: res.data.detail,
        });
      });
      console.log(quizData);
    } catch (error) {}
  }, []);
  // console.log(cats);
  const handleChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    const _formData = new FormData();
    _formData.append('teacher', teacherId);
    _formData.append('title', quizData.title);
    _formData.append('detail', quizData.detail);
    // console.log(11);
    try {
      axios
        .put(baseURL + '/teacher-quiz-detail/' + quizId, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Swal.fire({
              title: 'data has been updated',
              icon: 'success',
              toast: true,
              timer: 1500,
              position: 'top-right',
              timerProgressBar: true,
              showConfirmButton: false,
            });
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
          <div className="card">
            <h5 className="card-header">Edit Quiz</h5>
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
                <label for="videos" className="col-sm-2 col-form-label">
                  quiz detail
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="detail"
                    onChange={handleChange}
                    name="detail"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Update Course
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditCourse;
