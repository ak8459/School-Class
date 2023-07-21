import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../Context/authContext';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Pricing from '../Pages/Pricing/Pricing';
import Team from '../Pages/Team/Team';
import CourseHome from '../Pages/allCourses/CourseHome';
import Footer from '../components/Footer/Footer';
import AuthUser from '../components/SignUp/AuthUser';
const AllRoutes = () => {
    const { isAuth: { isAuth } } = useContext( AuthContext )
    console.log( isAuth );
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CourseHome />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<AuthUser />} />
            </Routes>
            {!isAuth && < Footer />}
        </>
    )
}

export default AllRoutes

