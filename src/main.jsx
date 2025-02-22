import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import Login from './Pages/Login/Login.jsx';
import StartLayout from './Layout/StartLayout.jsx';
import Landing from './Pages/Landing/Landing';
import Registration from './Pages/Login/Registration.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <StartLayout />, // Landing & Login - No Navbar/Footer
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/home",
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "/home",
            element: (
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
    </AuthProvider>
  </StrictMode>
);
