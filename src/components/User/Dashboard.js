import React from 'react';
import {Link} from 'react-router-dom';
import {Trash, PencilSquare} from 'react-bootstrap-icons';
import axios from 'axios';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
const baseURL = 'http://127.0.0.1:8000/api';
function Dashboard() {
  const [DashboardData, setDashboardData] = useState([]);
  const student_id = localStorage.getItem('studentId');
  console.log(DashboardData);
  useEffect(() => {
    try {
      axios.get(baseURL + '/student/dashboard/' + student_id).then((res) => {
        setDashboardData(res.data);
        // console.log(res.data);
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      {' '}
      <div className="container mt-4">
        <div className="row">
          <aside className="col-md-3">
            <Sidebar />
          </aside>
          <section className="col-md-9">
            <div className="row">
              <div
                class="card text-white bg-primary mb-3 ms-4"
                style={{maxWidth: '18rem'}}
              >
                <div class="card-header">Enrolled Courses</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.enrolled_courses} course(s)
                  </h5>
                </div>
              </div>
              <div
                class="card text-white bg-secondary mb-3 ms-4"
                style={{maxWidth: '18rem'}}
              >
                <div class="card-header">Pending Assignments</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.pending_assignments} assignment(s)
                  </h5>
                </div>
              </div>
              <div
                class="card text-white bg-success mb-3 ms-4"
                style={{maxWidth: '18rem'}}
              >
                <div class="card-header">Complete Assignments</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.complete_assignment} assignment(s){' '}
                  </h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
