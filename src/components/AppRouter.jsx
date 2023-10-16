import React from 'react';
import {RouterProvider} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <div>
            <RouterProvider router={privateRoutes}/>
        </div>

    );
};

export default AppRouter;

// const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
// if (isLoading) {
//     return //loader
// }

// import {AuthContext} from "../context";
