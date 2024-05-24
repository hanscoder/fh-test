import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegistrationPage from "@/registration/RegistrationPage.tsx";
import Home from "@/home/Home.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'registration',
                    element: <RegistrationPage/>
                },
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
