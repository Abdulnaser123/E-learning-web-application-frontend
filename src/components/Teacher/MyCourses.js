import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  PencilSquare,
  Trash,
  PlusSquare,
  BookmarkPlus,
  Briefcase,
  Person,
} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function MyCourses() {
  const [courseData, setCourseData] = useState([]);
  const teacherId = localStorage.getItem('teacherId');
  console.log(teacherId);
  useEffect(() => {
    axios.get(baseURL + '/teacher-courses/' + teacherId).then((res) => {
      setCourseData(res.data);
      // console.log(res.data);
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
                    <th>Name</th>
                    <th>Image</th>
                    <th>Total Enrollment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link
                              to={'/all-chapters/' + course.id}
                              className="text-decoration-none"
                            >
                              {' '}
                              {course.title}
                            </Link>
                          </td>
                          <td>
                            <img
                              src={course.featured_img}
                              alt={course.title}
                              width={80}
                              className="rounded"
                            />
                          </td>

                          <td className="mt-1">
                            <Link to={'/enrolled-students/' + course.id}>
                              <button className="btn btn-info btn-sm ">
                                <Person size={20} />
                                <span className="text-light bg-danger p-1 rounded-circle">
                                  {course.total_enrolled_students}
                                </span>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link to={'/edit-course/' + course.id}>
                              <button className="btn btn-info btn-sm ">
                                <PencilSquare size={20} />
                              </button>
                            </Link>
                            <Link to={'/add-chapter/' + course.id}>
                              <button className="btn btn-success btn-sm ms-2">
                                <PlusSquare size={20} />
                              </button>
                            </Link>
                            <Link to={'/assign-quiz/' + course.id}>
                              <button className="btn btn-warning  btn-sm ms-2">
                                <BookmarkPlus size={20} />
                              </button>
                            </Link>
                            <Link to={'/study-materials/' + course.id}>
                              <button className="btn btn-primary  btn-sm ms-2">
                                <Briefcase size={20} />
                              </button>
                            </Link>
                            <button className="btn btn-danger ms-2 btn-sm">
                              <Trash size={20} />
                            </button>
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

export default MyCourses;
