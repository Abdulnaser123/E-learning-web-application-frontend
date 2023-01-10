import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api/search-courses/';
function AllCourses() {
  const {searchString} = useParams();
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    axios.get(baseURL + searchString).then((res) => {
      setCourseData(res.data);

      // console.log('data is ', res.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <div className="row border-bottom border-primary pb-1 mb-1">
        <h3 className="col">
          Search for {<span className="text-primary">{searchString} </span>}
          courses
        </h3>
      </div>
      <div className="row mb-4">
        {courseData &&
          courseData.map((data, index) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <Link to="/detail/1">
                    {' '}
                    <img
                      src={data.featured_img}
                      className="card-img-top w-40"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <Link to="/detail/1">{data.title}</Link>
                    </h5>
                    <p className="card-text">{data.description}</p>
                    <Link to={`/detail/${courseData.id}`}>
                      <a href="#1" className="btn btn-primary">
                        Course Detail
                      </a>
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
      </div>
    </div>
  );
}

export default AllCourses;
