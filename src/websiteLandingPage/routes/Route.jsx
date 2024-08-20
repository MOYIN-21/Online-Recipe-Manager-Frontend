import Layout from "../layout/Layout";
import HeroSection from "../home/HeroSection";
import FeatureDescription from "../home/FeatureDescription";
import CallToAction from "../home/CallToAction";
import Contact from "../home/Contact";
import Home from "../home/Index";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import DashBoard from "../../pages/DashBoard";
import Inbox from "../../pages/Inbox";
import DashBoardLayout from "../../DashBoardLayout/DashBoardLayout";
import Profile from "../../dashboardHome/Profile";
import Account from "../../dashboardHome/Account";
import Favorite from "../../dashboardHome/Favorite";
import BookMark from "../../dashboardHome/BookMark";
import Create from "../../dashboardHome/Create";
import DashboardAppBar from "../reusablesComponents/DashboardAppBar/";
import DashBoardHome from "../../dashboardHome/DashBoardHome";
import Settings from "../../dashboardHome/Settings";
import RecipeHome from "../../dashboardHome/RecipeHome";


export const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>,
            },
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
    },
    {
        path: '/inbox',
        element: <Inbox/>
    },
    {
      path: '/dashboard',
      element: <DashBoardLayout/>,
      children: [
        {
            path: '/dashboard/recipeHome',
            element: <RecipeHome/>
        },
        {
            path: '/dashboard/profile',
            element: <Profile/>
        },
        {
            path: '/dashboard/account',
            element: <Account/>
        },
        {
            path: '/dashboard/favorite',
            element: <Favorite/>
        },
        {
            path: '/dashboard/bookmark',
            element: <BookMark/>
        },
        {
            path: '/dashboard/create',
            element: <Create/>
        },
        {
            path: '/dashboard/setting',
            element: <Settings/>
        },

      ]  
    }

]