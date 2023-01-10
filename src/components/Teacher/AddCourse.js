import React from 'react';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function AddCourse() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: '',
    title: '',
    description: '',
    f_img: '',
    techs: '',
  });
  useEffect(() => {
    axios.get(baseURL + '/category').then((res) => {
      setCats(res.data);
      console.log(res.data);
    });
  }, []);
  // console.log(cats);
  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.files[0],
    });
  };
  const submitForm = () => {
    const teacherId = localStorage.getItem('teacherId');

    const _formData = new FormData();
    _formData.append('category', courseData.category);
    _formData.append('teacher', teacherId);
    _formData.append('title', courseData.title);
    _formData.append('description', courseData.description);
    _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
    _formData.append('techs', courseData.techs);
    // console.log(11);
    try {
      axios
        .post(baseURL + '/course/', _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          window.location.href = '/add-course';
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
            <h5 className="card-header">Add Course</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="category" className="col-sm-2 col-form-label">
                  Category
                </label>
                <div className="col-sm-10">
                  <select
                    name="category"
                    onChange={handleChange}
                    className="form-control"
                  >
                    {cats.map((category, index) => (
                      <option key={index} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
                    value={courseData.title}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols="30"
                    onChange={handleChange}
                    value={courseData.description}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="videos" className="col-sm-2 col-form-label">
                  Course Image
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    id="videos"
                    onChange={handleFileChange}
                    name="f_img"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="technologies" className="col-sm-2 col-form-label">
                  Technologies
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="technologies"
                    name="techs"
                    onChange={handleChange}
                    value={courseData.techs}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddCourse;
