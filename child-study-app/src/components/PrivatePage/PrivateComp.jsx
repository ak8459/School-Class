import { useContext } from 'react';
import { AuthContext } from '../../Context/authContext';
import AuthUser from '../SignUp/AuthUser';
const PrivateComp = ( { children } ) => {
    const { isAuth, } = useContext( AuthContext );
    return (
        <>
            {isAuth.isAuth ? children : <AuthUser />}
        </>
    )
}

export default PrivateComp
