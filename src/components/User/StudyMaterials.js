import React from 'react';
import {Link} from 'react-router-dom';
import {Trash, PencilSquare} from 'react-bootstrap-icons';
import axios from 'axios';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function StudyMaterials() {
  const [studyMaterialsData, setStudyMaterialsData] = useState([]);
  const {course_id} = useParams();

  const downloadMaterials = (file) => {
    window.location.href = file;
  };
  useEffect(() => {
    try {
      axios.get(baseURL + '/study-materials/' + course_id).then((res) => {
        setStudyMaterialsData(res.data);
      });
    } catch (error) {}
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          {' '}
          <div className="card">
            <h4 className="card-header">
              All Study Materials ({studyMaterialsData.length}){' '}
            </h4>
            <h5>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Detail</th>
                      <th>Remark</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studyMaterialsData.map((studyMaterial, index) => {
                      return (
                        <tr>
                          <td>{studyMaterial.title}</td>
                          <td>{studyMaterial.description}</td>
                          <td>{studyMaterial.remarks} </td>
                          <td>
                            <button
                              className="btn btn-outline-primary"
                              onClick={() =>
                                downloadMaterials(studyMaterial.upload)
                              }
                            >
                              Download Materials
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudyMaterials;
