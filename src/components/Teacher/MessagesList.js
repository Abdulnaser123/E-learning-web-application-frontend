import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api';

function MessagesList(props) {
  const [msgData, setMsgData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(baseURL + '/get-msg/' + props.teacher_id + '/' + props.student_id)
        .then((res) => {
          setMsgData(res.data);
        });
    } catch (error) {}
  }, []);
  console.log(msgData);
  return (
    <div>
      {msgData.map((row, index) => (
        <>
          {row.msg_from == 'teacher' && (
            <div className="row">
              <div className="col-6 py-1">
                <div className="alert alert-primary">{row.msg_text}</div>{' '}
                <small style={{fontSize: '12px'}}>
                  {new Date(row.msg_time).toLocaleString()}
                </small>
              </div>
            </div>
          )}{' '}
          {row.msg_from != 'teacher' && (
            <div className="row">
              <div className="col-6 offset-6 ">
                <div className="alert alert-success">{row.msg_text}</div>
                <small style={{fontSize: '12px'}}>
                  {new Date(row.msg_time).toLocaleString()}
                </small>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default MessagesList;
