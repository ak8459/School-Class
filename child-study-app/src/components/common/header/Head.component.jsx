import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/authContext'
import "../../../Routes/Header.styles.css"
const Head = () => {
    // const [isAuth, setIsAuth] = useState( false )
    let navigate = useNavigate();
    const { isAuth, setShowOnlyAdmin, showOnlyAdmin } = useContext( AuthContext )

    const handleLogin = () => {
        navigate( "/login" )
        setShowOnlyAdmin( !showOnlyAdmin )
    }
    return (
        <>
            <section className='head'>
                <div className="container flexSB">
                    <div style={{ cursor: "pointer" }} onClick={() => { navigate( "/" ) }} className="logo">
                        <h1>GROW SKILL</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                    </div>
                    <div className='social'>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <span className='loginContainer'>
                            <i onClick={() => navigate( "/login" )} className="fa-solid fa-right-to-bracket login-icon">
                                {isAuth.isAuth ? <span>LOGOUT</span> : <span onClick={handleLogin} >LOGIN</span>}
                            </i>
                        </span>
                    </div>


                </div>

            </section>

        </>
    )
}

export default Head
