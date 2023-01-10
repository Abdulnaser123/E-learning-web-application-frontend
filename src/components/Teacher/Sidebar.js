import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  const teacherId = localStorage.getItem('teacherId');

  return (
    <div className="card">
      <Link to={'/dashboard-cards'} className="text-decoration-none">
        <h5 className="card-header text-secondary">Dashboard</h5>
      </Link>
      <div className="list-group list-group-flush">
        <Link
          to="/teacher-mycourses"
          className="list-group-item list-group-item-action"
        >
          My Courses
        </Link>
        <Link to={'/quiz/'} className="list-group-item list-group-item-action">
          Quiz
        </Link>
        <Link
          to={'/add-quiz/'}
          className="list-group-item list-group-item-action"
        >
          Add Quiz
        </Link>
        <Link
          to={'/my-students/' + teacherId}
          className="list-group-item list-group-item-action"
        >
          My Users
        </Link>
        <Link
          to={'/add-course'}
          className="list-group-item list-group-item-action"
        >
          Add Course
        </Link>

        <Link
          to="/teacher-setting"
          className="list-group-item list-group-item-action"
        >
          Profile Sitting
        </Link>
        <Link
          to="/teacher-change-password"
          className="list-group-item list-group-item-action"
        >
          Change password
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action text-danger"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
