import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Ourshop from "../Pages/Ourshop/Ourshop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import UserHome from "../Pages/Dashboard/UserHome";
import Reservation from "../Pages/Dashboard/Reservation";
import Payment from "../Pages/Dashboard/Payment";
import AddReview from "../Pages/Dashboard/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking";
import PaymentGateway from "../Components/ReservationCompo/PaymentGateway";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop/:category',
                element: <Ourshop></Ourshop>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },
            {
                path: 'myBooking',
                element: <MyBooking></MyBooking>
            },
            {
                path: 'paymentGateway',
                element: <PaymentGateway></PaymentGateway>
            }
        ]
    },
]);