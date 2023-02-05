import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import {
  Login,
  Signup,
  ProductFeed
} from './components/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = localStorage.getItem("ECOM_TOKEN");

const TokenProvider = (props) => {
  const token = localStorage.getItem("ECOM_TOKEN") || 'NO_TOKEN';
  return <props.component token={token} addKey={'Additional Key'} />
}

const router = createBrowserRouter([
  {
    path: "/",
    element: token ? <Navigate to="/productfeed" /> : <TokenProvider component={Login} />
  },
  {
    path: "/login",
    element: token ? <Navigate to="/productfeed" /> : <TokenProvider component={Login} />
  },
  {
    path: "/signup",
    element: token ? <Navigate to="/productfeed" /> : <TokenProvider component={Signup} />
  },
  {
    // Protected Route
    path: "/productfeed",
    element: token ? <ProductFeed /> : <Navigate to="/login" />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
