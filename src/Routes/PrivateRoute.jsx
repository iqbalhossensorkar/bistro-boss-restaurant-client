import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingSpinner from '../assets/99274-loading.json'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        <Lottie animationData={loadingSpinner}></Lottie>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;