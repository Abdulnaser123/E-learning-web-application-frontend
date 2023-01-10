import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = 'http://127.0.0.1:8000/api';
function CheckQuizAssignStatus(props) {
  const [quizData, setQuizData] = useState([]);
  const teacher_id = localStorage.getItem('teacherId');

  useEffect(() => {
    console.log(props);
    try {
      axios
        .get(
          baseURL +
            '/fetch-quiz-assign-status/' +
            props.quiz +
            '/' +
            props.course
        )
        .then((res) => {
          setQuizData(res.data);
        });
    } catch (error) {}
  }, []);
  const assignQuiz = (quizId) => {
    const _formData = new FormData();
    _formData.append('teacher', teacher_id);
    _formData.append('course', props.course);
    _formData.append('quiz', props.quiz);
    try {
      axios
        .post(baseURL + '/quiz-assign-course/', _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          Swal.fire({
            title: 'quiz is successfully assign in the course',
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
  return (
    <td>
      {quizData.bool == false && (
        <button
          onClick={() => assignQuiz(props.quiz)}
          className="btn btn-success btn-sm ms-2"
        >
          Assign
        </button>
      )}
      {quizData.bool === true && (
        <>
          <span className="text-success">Assigned</span>
          <Link
            className="btn btn-sm btn-secondary ms-5"
            to={'/attempted-students/' + props.quiz}
          >
            Attempted Students
          </Link>
        </>
      )}
    </td>
  );
}

export default CheckQuizAssignStatus;
