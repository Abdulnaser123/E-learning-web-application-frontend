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
  const handleDelete = (study_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          try {
            axios
              .delete(baseURL + '/study-material/' + study_id)
              .then((res) => {
                // setChapterData(res.data);
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                );
                window.location.reload();
              });
          } catch (error) {}
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };
  useEffect(() => {
    try {
      axios.get(baseURL + '/study-materials/' + course_id).then((res) => {
        setStudyMaterialsData(res.data);
      });
    } catch (error) {}
  }, []);
  console.log(studyMaterialsData);
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
              <Link
                to={'/add-study-material/' + course_id}
                className="btn btn-success"
              >
                Add study material
              </Link>
            </h4>

            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Upload</th>
                    <th>Remark</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studyMaterialsData.map((studyMaterial, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to={'/edit-study/' + studyMaterial.id}>
                              {' '}
                              {studyMaterial.title}
                            </Link>
                          </td>
                          <td>
                            <Link to={studyMaterial.upload}>File</Link>
                          </td>

                          <td>{studyMaterial.remarks} </td>
                          <td>
                            <Link
                              to={'/edit-study/' + studyMaterial.id}
                              className="btn btn-sm text-white btn-info"
                            >
                              <PencilSquare size={20} />
                            </Link>

                            <button
                              className="btn btn-danger btn-sm ms-1"
                              onClick={() => handleDelete(studyMaterial.id)}
                            >
                              <Trash size={20} />
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudyMaterials;
