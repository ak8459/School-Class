import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';
import CourseHome from '../Pages/allCourses/CourseHome';
const AllRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CourseHome />} />
                <Route path="/team" element={<Team />} />
            </Routes>

        </>
    )
}

export default AllRoutes

