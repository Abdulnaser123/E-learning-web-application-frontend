import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Check2All} from 'react-bootstrap-icons';
const baseURL = 'http://127.0.0.1:8000/api';
function CheckQuizStudentStatus(props) {
  const [quizAttemptData, setAttemptQuizData] = useState([]);

  useEffect(() => {
    console.log(props);
    try {
      axios
        .get(
          baseURL +
            '/fetch-quiz-attempt-status/' +
            props.quizId +
            '/' +
            props.studentId
        )
        .then((res) => {
          setAttemptQuizData(res.data);
        });
    } catch (error) {}
  }, []);

  return (
    <td>
      {quizAttemptData.bool === false && (
        <Link
          to={'/take-quiz/' + props.quizId}
          className="btn btn-success btn-sm ms-2"
        >
          Tack Quiz
        </Link>
      )}
      {quizAttemptData.bool === true && (
        <span className="text-success ">
          Attempted <Check2All />
        </span>
      )}
    </td>
  );
}

export default CheckQuizStudentStatus;
