import React from 'react';
import {Link} from 'react-router-dom';
import {Trash, PencilSquare} from 'react-bootstrap-icons';
import axios from 'axios';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
const baseURL = 'http://127.0.0.1:8000/api';
function EditChapter() {
  const [chapterData, setChapterData] = useState({
    course: '',
    title: '',
    description: '',
    // Video: '',
    remarks: '',
  });
  useEffect(() => {
    try {
      axios.get(baseURL + '/chapter/' + chapter_id).then((res) => {
        setChapterData(res.data);
        console.log(res.data);
      });
    } catch (error) {}
  }, []);
  const handleFileChange = (e) => {
    setChapterData({
      ...chapterData,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleChange = (e) => {
    setChapterData({
      ...chapterData,
      [e.target.name]: e.target.value,
    });
  };
  const {chapter_id} = useParams();
  const submitForm = () => {
    const _formData = new FormData();

    _formData.append('course', chapterData.course);
    _formData.append('title', chapterData.title);
    _formData.append('description', chapterData.description);
    // _formData.append('Video', chapterData.Video, chapterData.Video.name);
    _formData.append('remarks', chapterData.remarks);
    // console.log(11);
    try {
      axios
        .put(baseURL + '/chapter/' + chapter_id, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Swal.fire({
              title: 'data has been updated',
              icon: 'success',
              toast: true,
              timer: 4000,
              position: 'top-right',
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
    } catch (error) {
      console.log('error is ', error);
    }
  };
  return (
    <div>
      {' '}
      <div className="container mt-4">
        <div className="row">
          <aside className="col-md-3">
            <Sidebar />
          </aside>
          <section className="col-md-9">
            <div className="card">
              <h5 className="card-header">Update Chapter</h5>
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
                      value={chapterData.title}
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
                      value={chapterData.description}
                    />
                  </div>
                </div>
                {/* <div className="mb-3 row">
                  <label for="video" className="col-sm-2 col-form-label">
                    Video{' '}
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      id="video"
                      onChange={handleFileChange}
                      name="Video"
                      value={chapterData.Video}
                    />
                  </div>
                </div> */}
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
                      value={chapterData.techs}
                    />
                  </div>
                </div>

                <div className="mb-3 row">
                  <button className="btn btn-primary" onClick={submitForm}>
                    Update Chapter
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EditChapter;
