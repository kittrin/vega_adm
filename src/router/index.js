import MainPage from "../pages/MainPage";
import Tutors from "../pages/Tutors";
import Universities from "../pages/Universities";
import College from "../pages/College";
import Tests from "../pages/Tests";
import {createBrowserRouter} from "react-router-dom";
import UniversityById from "../pages/UniversityById";
import Test from "../pages/Test";

export const privateRoutes = createBrowserRouter([
    {path: '*', element: <MainPage/>},
    {path: '/main', element: <MainPage/>, exact: true},
    {path: '/tutors', element: <Tutors/>, exact: true},
    {path: '/universities', element: <Universities/>, exact: true},
    {path: '/universities/:university_id', element: <UniversityById/>, exact: true},
    {path: '/college', element: <College/>, exact: true},
    {path: '/tests', element: <Tests/>, exact: true},
    {path: '/test', element: <Test/>, exact: true}
    ]
)


export const publicRoutes = [
    {path: '/', component: <div></div>, exact: true}
]