import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const baseURl = 'http://127.0.0.1:8000/api';
function Sidebar() {
  const [notifData, setNotifData] = useState([]);
  const studentId = localStorage.getItem('studentId');
  console.log('student-id' + studentId);
  useEffect(() => {
    try {
      axios
        .get(baseURl + '/student/fetch-all-notification/' + studentId)
        .then((res) => {
          console.log(res.data);
          setNotifData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="card">
      <h5 className="card-header">
        {' '}
        <Link
          to="/user-dashboard"
          className="list-group-item list-group-item-action text-secondary"
        >
          Dashboard
        </Link>
      </h5>

      <div className="list-group list-group-flush">
        <Link
          to="/user-mycourses"
          className="list-group-item list-group-item-action"
        >
          My Courses
        </Link>
        <Link
          to="/user-assignments/"
          className="list-group-item list-group-item-action"
        >
          My Assignment
          <span className="float-end badge bg-primary mt-1">
            {notifData.length}
          </span>
        </Link>
        <Link to="/favorite" className="list-group-item list-group-item-action">
          Favorite Courses
        </Link>
        <Link
          to="/recommended-courses"
          className="list-group-item list-group-item-action"
        >
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
