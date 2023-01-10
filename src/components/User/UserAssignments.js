import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useParams} from 'react-router-dom';
import {PencilSquare, Trash, PlusSquare} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function UserAssignments() {
  const [AssignmentData, setAssignmentData] = useState([]);
  const [CompleteAssignmentStatus, setCompleteAssignmentStatus] = useState();

  const studentId = localStorage.getItem('studentId');
  console.log(studentId);
  useEffect(() => {
    axios.get(baseURL + '/my-assignments/' + studentId).then((res) => {
      setAssignmentData(res.data);
      console.log(res.data);
    });
  }, []);
  const markAsDone = (id, title, detail, student, teacher) => {
    const _formData = new FormData();
    _formData.append('student_status', true);
    _formData.append('student', student);
    _formData.append('title', title);
    _formData.append('detail', detail);
    _formData.append('teacher', teacher);

    try {
      axios
        .put(baseURL + '/update-assignments/' + id, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          Swal.fire({
            title: 'you are has been mark this assignment as done',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
          setTimeout(window.location.reload(), 3000);
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
          {' '}
          <div className="card">
            <h4 className="card-header">My Assignments</h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title </th>
                    <th>Detail</th>
                    <th>Teacher</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {AssignmentData.map((assignment, index) => {
                    return (
                      <>
                        <tr>
                          {}
                          <td>{assignment.title}</td>

                          <td>{assignment.title}</td>
                          <td>
                            <Link
                              to={'/teacher-detail/' + assignment.teacher.id}
                            >
                              {assignment.teacher.full_name}
                            </Link>
                          </td>
                          <td>
                            {!assignment.student_status && (
                              <button
                                onClick={() =>
                                  markAsDone(
                                    assignment.id,
                                    assignment.title,
                                    assignment.detail,
                                    assignment.student.id,
                                    assignment.teacher.id
                                  )
                                }
                                className={'btn btn-success'}
                              >
                                mark as done
                              </button>
                            )}
                            {assignment.student_status && (
                              <span className="text-success">completed </span>
                            )}
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

export default UserAssignments;
