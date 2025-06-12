import React from 'react';
import styles from './index.module.css';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import { createBrowserRouter, Router, RouterProvider } from 'react-router';
import Welcome from './Welcome';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "/", Component: Welcome },
        { path: "/signup", Component: Signup },
        { path: "/login", Component: Login },
        { path: "/profile", Component: Profile }
      ],
    },
  ]);


  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
