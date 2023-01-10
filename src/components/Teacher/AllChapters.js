import React from 'react';
import {Link} from 'react-router-dom';
import {Trash, PencilSquare} from 'react-bootstrap-icons';
import axios from 'axios';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
const baseURL = 'http://127.0.0.1:8000/api';

function AllChapters() {
  const [chapterData, setChapterData] = useState([]);
  const {course_id} = useParams();
  const handleDelete = (chapter_id) => {
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
            axios.delete(baseURL + '/chapter/' + chapter_id).then((res) => {
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
      axios.get(baseURL + '/course-chapters/' + course_id).then((res) => {
        setChapterData(res.data);
      });
    } catch (error) {}
  }, []);
  console.log(chapterData);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          {' '}
          <div className="card">
            <h4 className="card-header">All Chapter ({chapterData.length}) </h4>
            <h5 className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Video</th>
                    <th>Remark</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {chapterData.map((chapter, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to=""> {chapter.title}</Link>
                          </td>
                          <td></td>

                          <td>
                            <Link to="/">{chapter.remarks}</Link>
                          </td>
                          <td>
                            <Link to={'/edit-chapter/' + chapter.id}>
                              <button className="btn btn-info btn-sm">
                                Edit
                                <PencilSquare size={20} />
                              </button>
                            </Link>
                            {/* to={'/delete-chapter/' + chapter.id} */}
                            <Link>
                              <button
                                className="btn btn-danger ms-4 btn-sm"
                                onClick={() => handleDelete(chapter.id)}
                              >
                                Delete
                                <Trash size={20} />
                              </button>
                            </Link>
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

export default AllChapters;
