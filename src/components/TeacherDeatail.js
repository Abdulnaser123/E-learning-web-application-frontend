import React from 'react';
import {Link} from 'react-router-dom';

function TeacherDetail() {
  return (
    <div class="card mb-3">
      <script src="js/addons/rating.js"></script>

      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://blog.consdata.tech/assets/img/posts/2019-03-22-java-darmowa-czy-nie/java-darmowa.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Salem Mohammed</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="fw-bold">
              Courses <Link to={'/category/php'}>php</Link>{' '}
              <Link to={'/category/php'}>django</Link>{' '}
              <Link to={'/category/php'}>nodejs</Link>{' '}
            </p>
            <p className="fw-bold">
              Recent Courses: <Link to={'/teacher-detail/1'}>react js</Link>
            </p>
            <p className="fw-bold">Total Enrolled: 351 Students</p>

            <p className="fw-bold">Rating: 4.5/5</p>

            <p class="card mt-4">
              <h5>Course List</h5>
              <div className="list-group list-group-flush">
                <Link
                  to={'/detail/1'}
                  className="list-group-item list-group-item-action"
                >
                  php course
                </Link>{' '}
                <Link
                  to={'/detail/1'}
                  className="list-group-item list-group-item-action"
                >
                  django{' '}
                </Link>{' '}
                <Link
                  to={'/detail/1'}
                  className="list-group-item list-group-item-action"
                >
                  nodejs
                </Link>{' '}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
