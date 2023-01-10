import React from 'react';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
const baseURL = 'http://127.0.0.1:8000/api';
function EditCourse() {
  const {course_id} = useParams();
  const [courseData, setCourseData] = useState({
    category: '',
    title: '',
    description: '',
    f_img: '',
    prev_img: '',

    techs: '',
  });
  useEffect(() => {
    try {
      axios.get(baseURL + '/teacher-course-detail/' + course_id).then((res) => {
        setCourseData({
          category: res.data.category,
          title: res.data.title,
          description: res.data.description,
          prev_img: res.data.featured_img,
          f_img: '',
          techs: res.data.techs,
        });
      });
      console.log(courseData);
    } catch (error) {}
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
    const _formData = new FormData();
    _formData.append('category', courseData.category);
    _formData.append('teacher', 4);
    _formData.append('title', courseData.title);
    _formData.append('description', courseData.description);
    _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
    _formData.append('techs', courseData.techs);
    // console.log(11);
    try {
      axios
        .put(baseURL + '/teacher-course-detail/' + course_id, _formData, {
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
            <h5 className="card-header">Update Course</h5>
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
                {courseData.prev_img && (
                  <img
                    src={courseData.prev_img}
                    alt="..."
                    className="img-thumbnail w-25"
                  />
                )}
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
