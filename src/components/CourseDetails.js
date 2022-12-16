import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Youtube} from 'react-bootstrap-icons';

function CourseDetails() {
  let {course_id} = useParams();
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
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="fw-bold">
              Course By:<Link to={'/teacher-detail/1'}>Teacher 1 </Link>{' '}
            </p>
            <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
            <p className="fw-bold">Total Enrolled: 456 Students</p>
            <p className="fw-bold">Rating: 4.5/5</p>

            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">Course Videos</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction
            <button
              className="btn btn-sm btn-danger float-end"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
            >
              <Youtube size={24} />{' '}
            </button>
            {/* start video modal */}
            <div
              class="modal fade"
              id="videoModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      This is the beginning and so much more
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/M766FGsv5do?rel=0"
                        title="YouTube video"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end video modal */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
