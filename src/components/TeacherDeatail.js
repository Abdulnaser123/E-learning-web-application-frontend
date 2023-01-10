import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function TeacherDetail() {
  const [TeacherData, setTeacherData] = useState([]);
  const [TeacherCourses, setTeacherCourses] = useState([]);
  let {teacher_id} = useParams();
  useEffect(() => {
    axios.get(baseURL + '/teacher/' + teacher_id).then((res) => {
      console.log(res.data);
      setTeacherData(res.data);
      setTeacherCourses(res.data.teacher_courses);

      // console.log('data is ', res.data);
    });
  }, []);
  return (
    <div class="card mb-3 container">
      <script src="js/addons/rating.js"></script>

      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={TeacherData.profile_img}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{TeacherData.full_name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="fw-bold">
              Courses{' '}
              {TeacherCourses.map((teacherCourse) => {
                return (
                  <Link
                    to={'/category/php'}
                    className="text-decoration-none text-white bg-dark ms-2 p-2 rounded"
                  >
                    {teacherCourse.title}
                  </Link>
                );
              })}
            </p>
            <p className="fw-bold">
              Recent Courses:{' '}
              <Link
                to={'/teacher-detail/1'}
                className="text-decoration-none
                text-white
                bg-secondary
                ms-2
                p-2
                rounded"
              >
                react js
              </Link>
            </p>
            <p className="fw-bold">Total Enrolled: 351 Students</p>

            <p className="fw-bold">Rating: 4.5/5</p>

            <p class="card mt-4">
              <h5>Course List</h5>
              <div className="list-group list-group-flush">
                {TeacherCourses.map((course) => {
                  return (
                    <Link
                      to={'/detail/' + course.id}
                      target="_blank"
                      className="list-group-item list-group-item-action"
                    >
                      {course.title}
                    </Link>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
