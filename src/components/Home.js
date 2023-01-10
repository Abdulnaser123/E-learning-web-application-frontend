import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api/course/';
function Home() {
  const [courseData, setCourseData] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [popularTeachers, setPopularTeacher] = useState([]);
  const teacherId = localStorage.getItem('teacherId');
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setCourseData(res.data);
      console.log(res.data);
    });
    try {
      axios
        .get('http://127.0.0.1:8000/api' + '/popular-courses/?popular=1/')
        .then((res) => {
          setPopularCourses(res.data);
        });
    } catch (error) {
      console.error(error);
    }
    try {
      axios
        .get('http://127.0.0.1:8000/api' + '/popular-teachers/?popular=1/')
        .then((res) => {
          setPopularTeacher(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(courseData);
  return (
    <>
      <div className="container mt-4">
        <div className="row border-bottom border-primary pb-1 mb-1">
          <h3 className="col">Latest Courses</h3>
          <a className="col text-uppercase fw-bold" href="#1">
            <Link to={'/AllCourses'}>See All</Link>
          </a>
        </div>
        <div className="row mb-4">
          {courseData &&
            courseData.map((data, index) => {
              return (
                index < 4 && (
                  <div className="col-md-3">
                    <div className="card">
                      <Link to={'/detail/' + data.id}>
                        {' '}
                        <img
                          src={data.featured_img}
                          className="card-img-top w-40"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          <Link
                            className="text-decoration-none text-light bg-dark p-1 rounded"
                            to={'/detail/' + data.id}
                          >
                            {data.title}
                          </Link>
                        </h5>
                        <p className="card-text">{data.description}</p>
                        <Link to={'/detail/' + data.id}>
                          <a href="#1" className="btn btn-primary">
                            Course Detail
                          </a>
                        </Link>
                        <div className="card-footer">
                          <div className="title">
                            <span>
                              Rating: {data.course_rating.rating__avg} / 5
                            </span>
                            <span className="float-end">Views: 5451</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>

      {/* popular 
      courses */}
      <div className="container mt-4">
        <div className="row border-bottom border-primary pb-1 mb-1">
          <h3 className="col">Popular Courses</h3>
          <a className="col text-uppercase fw-bold" href="#1">
            <Link to="/popular-courses">See All</Link>
          </a>
        </div>

        <div className="row mb-4">
          {popularCourses &&
            popularCourses.map((popularCourse, index) => (
              <div className="col-md-3">
                <div className="card">
                  <Link to={'/detail/' + popularCourse.course.id}>
                    {' '}
                    <img
                      src={popularCourse.course.featured_img}
                      className="card-img-top rounded"
                      alt="course_Image"
                    />
                  </Link>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <Link
                        className="text-decoration-none text-light bg-dark p-1 rounded"
                        to={'/detail/' + popularCourse.course.id}
                      >
                        {popularCourse.course.title}
                      </Link>
                    </h5>
                    <p className="card-text">
                      {popularCourse.course.description}
                    </p>
                    <Link to={'/detail/' + popularCourse.course.id}>
                      <a href="#1" className="btn btn-primary">
                        Course Detail
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* popular 
      teachers */}
      <div className="container mt-4">
        <div className="row border-bottom border-primary pb-1 mb-1">
          <h3 className="col">Popular Teachers</h3>
          <a className="col text-uppercase fw-bold" href="#1">
            <Link to="/popular-teachers">See All</Link>
          </a>
        </div>

        <div className="row mb-4">
          {popularTeachers &&
            popularTeachers.map((popularTeacher, index) => (
              <div className="col-md-3 ">
                <div className="card">
                  <img
                    src={popularTeacher.profile_img}
                    className="card-img-top rounded "
                    alt="teacher_image"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">
                      {popularTeacher.full_name}
                    </h5>
                    <p className="card-text ">
                      total courses: {popularTeacher.total_courses}
                    </p>
                    <Link to={'/teacher-detail/' + teacherId}>
                      <a href="#1" className="btn btn-primary">
                        Teacher Detail
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default Home;
