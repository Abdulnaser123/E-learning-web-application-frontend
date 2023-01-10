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
import AddCourse from './Teacher/AddCourse';
import TeacherLogout from './Teacher/TeacherLogout';
import AllChapters from './Teacher/AllChapters';
import AddChapter from './Teacher/AddChapter';
import EditChapter from './Teacher/EditChapter';
import EditCourse from './Teacher/EditCourse';
import MyStudents from './Teacher/MyStudents';
import StudentLogout from './User/studentLogout';
import EnrolledStudents from './Teacher/EnrolledStudents';
import DashboardCard from './Teacher/DashboardCard';
import RecommendedCourses from './User/ReacommendedCourses';
import AddAssignment from './Teacher/AddAssignment';
import ShowAssignment from './Teacher/ShowAssignment';
import UserAssignments from './User/UserAssignments';
import AddQuiz from './Teacher/AddQuiz';
import AllQuizes from './Teacher/Quiz';
import EditQuiz from './Teacher/EditQuiz';
import AddQuizQuestions from './Teacher/AddQuizQuestions';
import QuizQuestions from './Teacher/QuizQuestions';
import AssignQuiz from './Teacher/assignQuiz';
import CourseQuiz from './User/CourseQuizList';
import TakeQuiz from './User/takeQuiz';
import Search from './Search';
import StudyMaterials from './Teacher/StudyMaterial';
import AddStudyMaterials from './Teacher/AddStudyMaterials';
import UserStudyMaterials from './User/StudyMaterials';
import AttemptedStudents from './Teacher/AttemtedStudents';
import FAQs from './FAQs';
import Verify from './Teacher/verifyEmail';
// attempted-students/
function Main() {
  return (
    <div>
      {<Header />}

      {/* <Setting /> */}
      <Routes>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route
          path="/study-materials/:course_id"
          element={<StudyMaterials />}
        />
        <Route
          path="/add-study-material/:course_id"
          element={<AddStudyMaterials />}
        />
        <Route
          path="/user-study-materials/:course_id"
          element={<UserStudyMaterials />}
        />
        <Route
          path="/attempted-students/:quizId"
          element={<AttemptedStudents />}
        />
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
        <Route path="/user-logout" element={<StudentLogout />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/quiz" element={<AllQuizes />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/add-chapter/:course_id" element={<AddChapter />} />
        <Route path="/assign-quiz/:course_id" element={<AssignQuiz />} />
        <Route path="/all-chapters/:course_id" element={<AllChapters />} />
        <Route path="/edit-chapter/:chapter_id" element={<EditChapter />} />
        <Route path="/edit-course/:course_id" element={<EditCourse />} />
        <Route path="/edit-quiz/:quizId" element={<EditQuiz />} />
        <Route path="/add-question/:quizId" element={<AddQuizQuestions />} />
        <Route path="/my-students/:teacher_id" element={<MyStudents />} />
        <Route path="/dashboard-cards" element={<DashboardCard />} />
        <Route path="/recommended-courses" element={<RecommendedCourses />} />
        <Route path="/user-assignments/" element={<UserAssignments />} />
        <Route path="/quiz-questions/:quizId" element={<QuizQuestions />} />
        <Route path="/course-quiz/:course_id" element={<CourseQuiz />} />
        <Route path="/take-quiz/:quiz_id" element={<TakeQuiz />} />
        <Route path="/FAQs" element={<FAQs />} />

        <Route path="/verify-teacher/:teacher_id" element={<Verify />} />

        <Route
          path="/assignments/:teacher_id/:student_id"
          element={<ShowAssignment />}
        />
        <Route
          path="/add-assignment/:teacher_id/:student_id"
          element={<AddAssignment />}
        />
        <Route
          path="/enrolled-students/:course_id"
          element={<EnrolledStudents />}
        />
        <Route
          path="/teacher-change-password"
          element={<TeacherChangePassword />}
        />
        <Route path="/search-courses/:searchString" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
