import React from 'react'
import styles from './login.module.css'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className={styles.loginBox}>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label for="email">Email adress</label>
                <input type="email" id="email" name="email" placeholder="Enter email address" required />
            </div>
            <div className={styles.formGroup}>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required />
            </div>
            
            <Link to={'/profile'} state={{}} className={styles.loginBtn}>Login</Link>
        </form> 
    </div>
  )
}

export default Login
