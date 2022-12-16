import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import UserDashboard from './User/Dashboard';
import About from './About';
import CourseDetails from './CourseDetails';
import UserLogin from './User/Login';
import UserSetting from './User/Setting';
import UserRegister from './User/Register';
import {Routes, Route} from 'react-router-dom';
import UserMyCourses from './User/MyCourses';
import FavoriteCourses from './FavoriateCourses';
import UserChangePassword from './User/Change-password';
import TeacherDetail from './TeacherDeatail';
import TeacherDashboard from './Teacher/Dashboard';
import TeacherLogin from './Teacher/Login';
import TeacherSetting from './Teacher/Setting';
import TeacherRegister from './Teacher/Register';
import TeacherMyCourses from './Teacher/MyCourses';
import TeacherChangePassword from './Teacher/Change-password';
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';
import TeacherLogout from './Teacher/TeacherLogout';
function Main() {
  return (
    <div>
      {<Header />}

      {/* <Setting /> */}
      <Routes>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetails />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-mycourses" element={<UserMyCourses />} />
        <Route path="/favorite" element={<FavoriteCourses />} />
        <Route path="/user-setting" element={<UserSetting />} />
        <Route path="/user-change-password" element={<UserChangePassword />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-mycourses" element={<TeacherMyCourses />} />
        <Route path="/teacher-setting" element={<TeacherSetting />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/AllCourses" element={<AllCourses />} />
        <Route path="/popular-courses" element={<PopularCourses />} />
        <Route path="/popular-teachers" element={<PopularTeachers />} />
        <Route path="/category/:course_name" element={<CategoryCourses />} />
        <Route path="/teacher-logout" element={<TeacherLogout />} />

        <Route
          path="/teacher-change-password"
          element={<TeacherChangePassword />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
