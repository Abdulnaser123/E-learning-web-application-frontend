import React from 'react';

function StudentLogout() {
  localStorage.removeItem('studentLoginStatus');
  window.location.href = '/user-login';
  return <div>TeacherLogout</div>;
}

export default StudentLogout;
