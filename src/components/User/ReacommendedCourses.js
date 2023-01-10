import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {PencilSquare, Trash, PlusSquare} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function RecommendedCourses() {
  const [courseData, setCourseData] = useState([]);
  const studentId = localStorage.getItem('studentId');
  console.log(studentId);
  useEffect(() => {
    axios
      .get(baseURL + '/fetch-recommended-courses/' + studentId)
      .then((res) => {
        setCourseData(res.data);
        console.log(res.data);
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
            <h4 className="card-header">My Courses</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Course </th>
                    <th>Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => {
                    return (
                      <>
                        <tr>
                          {}
                          <td>
                            <Link to={'/all-chapters/' + course.id}>
                              {' '}
                              {course.title}
                            </Link>
                          </td>

                          <td>{course.techs}</td>
                          <td></td>
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

export default RecommendedCourses;
