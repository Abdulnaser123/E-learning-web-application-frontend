import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="card">
      <h5 className="card-header">Dashboard</h5>

      <div className="list-group list-group-flush">
        <Link
          to="/user-mycourses"
          className="list-group-item list-group-item-action"
        >
          My Courses
        </Link>
        <Link to="/favorite" className="list-group-item list-group-item-action">
          Favorite Courses
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          Recommended Courses for you
        </Link>
        <Link
          to="/user-setting"
          className="list-group-item list-group-item-action"
        >
          Profile Sitting
        </Link>
        <Link
          to="/user-change-password"
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
