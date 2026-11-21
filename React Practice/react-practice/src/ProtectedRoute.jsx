import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children}) {
    //agar user logged in nahi hai toh sidha login page par bhej do
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    //agar logged in hai toh andar ka page dikhao yani childen
    return children;
}

export default ProtectedRoute;