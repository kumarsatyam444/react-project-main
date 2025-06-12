import React, { useState } from 'react'
import styles from './signup.module.css'
import { data, Link } from 'react-router';


const SignUp = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <div className={styles.signUpBox}>
        <h1>Create your PopX account</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name<span>*</span></label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="fullName" name="fullName" placeholder="Marry Doe" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone number<span>*</span></label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" placeholder="Marry Doe" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email Adress<span>*</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Marry Doe" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password<span>*</span></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Marry Doe" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="company">Company name</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} id="company" name="company" placeholder="Marry Doe" required />
            </div>
            <div className={styles.radioGroup}>
                <p>Are you Agency?<span>*</span></p>
                <div>
                    <input type="radio" id="yes" name="radio-group" />
                    <label htmlFor="yes">Yes</label>
    
                    <input type="radio" id="no" name="radio-group" />
                    <label htmlFor="no">No</label>
                </div>
            </div>

            <Link to={'/profile'} state={{name, email}} className={styles.registerBtn}>Create Account</Link>
        </form>
    </div>
    )
}

export default SignUp
