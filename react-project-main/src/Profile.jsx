import React from 'react'
import styles from './profile.module.css'
import profileImg from './assets/profile.png'
import editPhoto from './assets/edit.svg'
import { useLocation } from 'react-router'

const Profile = () => {
    const location = useLocation();
    const {name, email} = location?.state
    
    return (
        <>
            <div className={styles.topHeader}>
                <h1>Account Settings</h1>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileImage}>
                    <img src={profileImg} alt="" />
                    <img className={styles.editPhoto} src={editPhoto} alt="" />
                </div>
                <div className={styles.profileInfo}>
                    <h4>{name || 'Marry Doe'}</h4>
                    <p>{email || 'Marry@gmail.com'}</p>
                </div>
            </div>
            <div className={styles.profileDesc}>
                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
        </>
    )
}

export default Profile
