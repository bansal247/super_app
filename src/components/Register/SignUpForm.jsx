import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './Form.module.css'

function SignUpForm() {

    const [formValues, setFormValues] = useState({
        check: false,
        name: "",
        username: "",
        mail: "",
        mobile: ""
    });

    const [nameError, setNameError] = useState(false)
    const [userNameError, setUserNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [mobileError, setMobileError] = useState(false)
    const [signUpError, setSignUpError] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!(formValues.name.trim().length > 0)) {
            setNameError(true);
            valid = false;
        } else {
            setNameError(false);
        }

        if (!(formValues.username.trim().length > 0)) {
            setUserNameError(true);
            valid = false;
        } else {
            setUserNameError(false);
        }

        if ((!(formValues.mail.trim().length > 0) || !formValues.mail.includes('@') || !formValues.mail.includes('.'))) {
            setMailError(true);
            valid = false;
        } else {
            setMailError(false);
        }

        if (!(formValues.mobile.trim().length > 0)) {
            setMobileError(true);
            valid = false;
        } else {
            setMobileError(false);
        }

        if (!formValues.check) {
            setSignUpError(true);
            valid = false;
        } else {
            setSignUpError(false);
        }

        if (valid) {
            window.localStorage.setItem('userData', JSON.stringify(formValues));
            navigate('/genre');
        }
    }

    return (
        <div className={styles.mainStyle}>
            <div className={styles.heading}>Super app</div>
            <div className={styles.subHeading}>Create your new account</div>
            <form className={styles.form}>
                <div>
                    <input className={`${userNameError ? styles.inputError : ""} ${styles.input}`} type="text" name='name' placeholder='Name' onChange={handleChange} />
                    {nameError ? <div className={styles.error}>Field is required</div> : <></>}
                </div>

                <div><input className={`${userNameError ? styles.inputError : ""} ${styles.input}`} type="text" name='username' placeholder='UserName' onChange={handleChange} />
                    {userNameError ? <div className={styles.error}>Field is required</div> : <></>}
                </div>
                <div><input className={`${mailError ? styles.inputError : ""} ${styles.input}`} type="email" name='mail' placeholder='Email' onChange={handleChange} />
                    {mailError ? <div className={styles.error}>Field is required</div> : <></>}
                </div>
                <div>
                    <input className={`${mobileError ? styles.inputError : ""} ${styles.input}`} type="number" name='mobile' placeholder='Mobile' onChange={handleChange} />
                    {mobileError ? <div className={styles.error}>Field is required</div> : <></>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
                    <label className={styles.checkLabel}>
                        <input type="checkbox" name='check' onChange={(e) => (
                            setFormValues(
                                {
                                    ...formValues,
                                    [e.target.name]: e.target.checked,
                                }
                            )
                        )} />
                        Share my registration data with Superapp
                    </label>
                    {signUpError ? <label className={styles.error}>Check this box if you want to proceed</label> : <></>}

                </div>
                <button className={styles.button} onClick={handleSubmit}>SIGN UP</button>
            </form>
            <div className={styles.bottomText}>
            <div>By clicking on Sign up. you agree to Superapp <span style={{color:'#72DB73'}}>Terms and Conditions of Use</span></div>
            <br />
            <div>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:'#72DB73'}}>Privacy Policy</span></div>
            </div>
            </div>
    )
}

export default SignUpForm