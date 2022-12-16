import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/';
function PopularTeachers() {
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/teacher/').then((response) => {
      setTeacher(response.data);
    });
  }, []);
  console.log(teacher);
  return (
    <div className="container mt-4">
      <div className="row border-bottom border-primary pb-1 mb-1">
        <h3 className="col">Popular Teachers</h3>
        <a className="col text-uppercase fw-bold" href="#1">
          <Link to="/">Go Back</Link>
        </a>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.ptuk.edu.ps/projects/edu4all/wp-content/uploads/2021/02/cropped-Edu-4-all-Final-Jan-2021-01-1.png"
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#1" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.ptuk.edu.ps/projects/edu4all/wp-content/uploads/2021/02/cropped-Edu-4-all-Final-Jan-2021-01-1.png"
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#1" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>{' '}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.ptuk.edu.ps/projects/edu4all/wp-content/uploads/2021/02/cropped-Edu-4-all-Final-Jan-2021-01-1.png"
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#1" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>{' '}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.ptuk.edu.ps/projects/edu4all/wp-content/uploads/2021/02/cropped-Edu-4-all-Final-Jan-2021-01-1.png"
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#1" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTeachers;
