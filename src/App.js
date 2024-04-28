import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Course from './pages/Course/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseLanguage from './pages/Course/CourseLanguage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:language" element={<CourseLanguage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
