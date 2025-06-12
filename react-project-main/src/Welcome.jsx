import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router'

const Welcome = () => {

    return (
        <div className={styles.loginBox}>
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <Link to={'/signup'} className={styles.loginBtn}>Create Account</Link>
            <Link to={'/login'} className={styles.registerBtn}>Already Registered? Login</Link>
        </div>
    )
}

export default Welcome
