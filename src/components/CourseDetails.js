import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Youtube} from 'react-bootstrap-icons';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
const baseURL = 'http://127.0.0.1:8000/api';

function CourseDetails() {
  const [useLoginStatus, setUserLoginStatus] = useState();
  const [courseData, setCourseData] = useState([]);
  const [TeacherData, setTeacherData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [enrollStatus, setEnrollStatus] = useState();
  const [relatedCourseData, setRelatedCourseData] = useState([]);
  const [ratingStatus, setRatingStatus] = useState();
  const [courseRating, setCourseRating] = useState(0);
  const [courseViews, setCourseViews] = useState(0);
  let {course_id} = useParams();
  const studentId = localStorage.getItem('studentId');

  useEffect(() => {
    try {
      axios.get(baseURL + '/update-view/' + course_id).then((res) => {
        setCourseViews(res.data.views);
      });
    } catch (error) {}
    try {
      axios.get(baseURL + '/course/' + course_id).then((res) => {
        setCourseData(res.data);
        setTeacherData(res.data.teacher);
        setChapterData(res.data.course_chapters);
        setRelatedCourseData(JSON.parse(res.data.related_videos));
        if (res.data.course_rating.rating__avg)
          setCourseRating(res.data.course_rating.rating__avg);
        // console.log('data is ', res.data);
      });
    } catch (error) {}
    try {
      axios
        .get(baseURL + '/fetch-enroll-status/' + studentId + '/' + course_id)
        .then((res) => {
          if (res.data.bool === true) {
            setEnrollStatus('success');
          } else {
            setEnrollStatus('faild');
          }
        });
    } catch (error) {}

    try {
      axios
        .get(baseURL + '/rating-status/' + studentId + '/' + course_id)
        .then((res) => {
          if (res.data.bool === true) {
            setRatingStatus('success');
          } else {
            setRatingStatus('faild');
          }
        });
    } catch (error) {}

    const studentLoginStatus = localStorage.getItem('studentLoginStatus');
    if (studentLoginStatus == 'true') {
      setUserLoginStatus('success');
    }
  }, []);

  // add rating fun
  const [ratingData, setRatingData] = useState({
    rating: '',
    review: '',
  });
  const ratingHandleChange = (e) => {
    setRatingData({...ratingData, [e.target.name]: e.target.value});
  };
  const enroll = () => {
    const studentId = localStorage.getItem('studentId');

    const _formData = new FormData();
    _formData.append('course', course_id);
    _formData.append('student', studentId);
    try {
      axios
        .post(baseURL + '/student-enroll-course/', _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          Swal.fire({
            title: 'you are has been enrolled',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          }); // window.location.href = '/add-course';
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };
  const handleRatingSubmit = () => {
    const _formData = new FormData();
    _formData.append('course', course_id);
    _formData.append('student', studentId);
    _formData.append('review', ratingData.review);
    _formData.append('rating', ratingData.rating);

    try {
      axios
        .post(baseURL + '/rating/' + course_id + '', _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          Swal.fire({
            title: 'you are has been enrolled',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        });
    } catch (error) {
      // console.log('error is ', error);
    }
  };
  // console.log('rating', ratingStatus);
  return (
    <div class="card mb-3 container ">
      <script src="js/addons/rating.js"></script>

      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={courseData.featured_img}
            class="img-fluid rounded-start w-40"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{courseData.title}</h5>
            <p class="card-text">{courseData.description}</p>
            <p className="fw-bold">
              Course By:
              <Link to={'/teacher-detail/' + TeacherData.id}>
                {TeacherData.full_name}
              </Link>{' '}
            </p>
            <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
            <p className="fw-bold">
              Total Enrolled: {courseData.total_enrolled_students} Students
            </p>
            <p className="fw-bold">Rating: {courseRating}/5</p>
            <p className="text-primary fw-bold">Views: {courseViews}</p>

            {useLoginStatus && enrollStatus != 'success' && (
              <p>
                <button
                  onClick={enroll}
                  type="button"
                  className="btn btn-success"
                >
                  Enroll In This Course
                </button>
              </p>
            )}
            {useLoginStatus == 'success' && enrollStatus == 'success' && (
              <p>
                <div className="btn btn-dark">
                  You Are Enrolled In This Course
                </div>{' '}
                {ratingStatus != 'success' && (
                  <li className="list-group-item">
                    <button
                      className="btn  btn-info mt-2 "
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      Rating
                    </button>
                    {/* start video modal */}
                    <div
                      class="modal fade"
                      id="videoModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog ">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Rating for {courseData.title} course
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
                              <form>
                                <div class="mb-3">
                                  <label for="rating" class="form-label">
                                    Rating{' '}
                                  </label>
                                  <select
                                    className="form-control"
                                    onChange={ratingHandleChange}
                                    name="rating"
                                    id="rating"
                                  >
                                    {[1, 2, 3, 4, 5].map((rate) => (
                                      <option>{rate}</option>
                                    ))}
                                  </select>
                                </div>
                                <div class="mb-3">
                                  <label for="review" class="form-label">
                                    Review
                                  </label>
                                  <textarea
                                    id="review"
                                    onChange={ratingHandleChange}
                                    className="form-control"
                                    name="review"
                                    row="10"
                                  ></textarea>
                                </div>

                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  onClick={handleRatingSubmit}
                                >
                                  Submit your rate
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end video modal */}
                  </li>
                )}
              </p>
            )}
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">Course Videos</div>
        <ul className="list-group list-group-flush">
          {chapterData.length > 0 &&
            chapterData.map((chapter) => {
              return (
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
                            {chapter.title}
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
              );
            })}
          {chapterData.length === 0 && (
            <div class="alert alert-primary" role="alert">
              This course douse not has any chapter !
            </div>
          )}
        </ul>
      </div>
      <div className="card mt-4">
        <div className="card-header">Related Videos</div>
        <ul className="list-group list-group-flush">
          {relatedCourseData.map((relatedCourse) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <Link to="/detail/1">
                    {' '}
                    <img
                      src={
                        'http://127.0.0.1:8000/media/' +
                        relatedCourse.fields.featured_img
                      }
                      className="card-img-top w-40"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <Link to="/detail/1">{relatedCourse.fields.title}</Link>
                    </h5>
                    <p className="card-text">
                      {relatedCourse.fields.description}
                    </p>
                    <Link target={'__blank'} to={`/detail/${relatedCourse.pk}`}>
                      <a className="btn btn-primary">Course Detail</a>
                    </Link>
                    <div className="card-footer">
                      <div className="title">
                        <span>Rating: 4.6/5</span>
                        <span className="float-end">Views: 5451</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
