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
  const teacher_id = localStorage.getItem('teacherId');
  useEffect(() => {
    try {
      axios.get(baseURL + '/teacher/dashboard/' + teacher_id).then((res) => {
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
                <div class="card-header">Total Courses</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.total_courses} course(s)
                  </h5>
                </div>
              </div>
              <div
                class="card text-white bg-secondary mb-3 ms-4"
                style={{maxWidth: '18rem'}}
              >
                <div class="card-header">Total Students</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.total_students} student(s)
                  </h5>
                </div>
              </div>
              <div
                class="card text-white bg-success mb-3 ms-4"
                style={{maxWidth: '18rem'}}
              >
                <div class="card-header">Total Chapters</div>
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {DashboardData.total_chapters} chapter(s){' '}
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
