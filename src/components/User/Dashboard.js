import React from 'react';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import MyCourses from './MyCourses';

function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        <MyCourses />
      </div>
    </div>
  );
}

export default Dashboard;
