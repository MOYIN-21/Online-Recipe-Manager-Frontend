import Layout from "../layout/Layout";
import HeroSection from "../home/HeroSection";
import FeatureDescription from "../home/FeatureDescription";
import CallToAction from "../home/CallToAction";
import Contact from "../home/Contact";
import Home from "../home/Index";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import DashBoard from "../../pages/DashBoard";

export const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path:'/home',
                element: <Home/>,
            },
            {
                path: '/heroSection',
                element: <HeroSection/>
            },
            {
                path: '/feature',
                element: <FeatureDescription/>
            },
            {
                path: '/action',
                element: <CallToAction/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/signup',
        element: <SignUp/>,
    },
    {
        path: '/dashboard',
        element:<DashBoard/>,
    }
]