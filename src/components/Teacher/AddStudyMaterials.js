import React from 'react';
import Sidebar from './Sidebar';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import {Link} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function AddStudyMaterials() {
  const [studyData, setStudyData] = useState({
    title: '',
    description: '',
    Video: '',
    remarks: '',
  });
  const handleFileChange = (e) => {
    window.URL = window.URL || window.webkitURL;
    var upload = document.createElement('upload');
    upload.src = URL.createObjectURL(e.target.files[0]);
    setStudyData({
      ...studyData,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleChange = (e) => {
    setStudyData({
      ...studyData,
      [e.target.name]: e.target.value,
    });
  };
  const {course_id} = useParams();

  const submitForm = () => {
    const _formData = new FormData();

    _formData.append('course', course_id);
    _formData.append('title', studyData.title);
    _formData.append('description', studyData.description);
    _formData.append('upload', studyData.upload, studyData.upload.name);
    _formData.append('remarks', studyData.remarks);
    // console.log(11);
    try {
      axios
        .post(baseURL + '/study-materials/' + course_id, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          window.location.reload();
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Study Materials</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    value={studyData.title}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols="30"
                    onChange={handleChange}
                    value={studyData.description}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="upload" className="col-sm-2 col-form-label">
                  Upload
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    id="upload"
                    onChange={handleFileChange}
                    name="upload"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="remarks" className="col-sm-2 col-form-label">
                  Remarks
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="remarks"
                    name="remarks"
                    onChange={handleChange}
                    value={studyData.techs}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <button className="btn btn-primary" onClick={submitForm}>
                  Add Chapter
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddStudyMaterials;
