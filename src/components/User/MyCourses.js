import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
function MyCourses() {
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
                    <th>Created By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <td>django backend framework</td>
                  <td>
                    <Link to="/">Abdelnasser Obeid</Link>
                  </td>
                  <td>
                    <button className="btn btn-danger active">Deleted</button>
                  </td>
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
