import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {
  PencilSquare,
  Trash,
  PlusSquare,
  Binoculars,
} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function EnrolledStudents() {
  const [studentData, setStudentData] = useState([]);
  const teacherId = localStorage.getItem('teacherId');
  //   console.log(teacherId);
  const {course_id} = useParams();
  useEffect(() => {
    axios.get(baseURL + '/fetch-enrolled-students/' + course_id).then((res) => {
      setStudentData(res.data);
      // console.log(res.data);
    });
  }, []);
  console.log(studentData);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          {' '}
          <div className="card">
            <h4 className="card-header">Enrolled Students</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student, index) => {
                    return (
                      <>
                        <tr>
                          <td>{student.student.full_name}</td>
                          {/* <td>
                            <img
                              src={student.featured_img}
                              alt={student.title}
                              width={80}
                              className="rounded"
                            />
                          </td> */}

                          <td>
                            {/* <Link to="/"> */}
                            {student.student.email}
                            {/* </Link> */}
                          </td>
                          <td>
                            {/* <Link to="/"> */}
                            {student.student.username}
                            {/* </Link> */}
                          </td>
                          <Link to={'/add-chapter/' + student.id}>
                            <button className="btn btn-info btn-sm ms-2 ">
                              view
                            </button>
                          </Link>
                          {/* <td>
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
                            <button className="btn btn-danger ms-2 btn-sm">
                              <Trash size={20} />
                            </button>
                          </td> */}
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

export default EnrolledStudents;
