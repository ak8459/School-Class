import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './Context/authContext';
import AllRoutes from './Routes/AllRoutes';
import Header from './Routes/Header';
const App = () => {
  const { isAuth, showOnlyAdmin } = useContext( AuthContext );
  return (
    <div>
      <Header />
      <AllRoutes />

      {/* {showOnlyAdmin ? <AuthUser /> : ( <AllRoutes /> && <Header /> )}
      {showOnlyAdmin ? <AuthUser /> : <AllRoutes />} */}
    </div>
  )
}

export default App

