import React, { useState } from 'react'
import '../styles/main.css';
import { SignupScreenStyle as styles } from '../styles/SignupScreenStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



export function SignUpScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [revealPassword, setRevealPassword] = useState(false)

    const handleSubmit = () => {
        console.log('Form submitted')
    }

    const toggleRevealPassword = state => {
        setRevealPassword(!state)
    }

    return (
        <div id="main-container" style={styles.mainContainer} >

            <form id="login-form" style={styles.form}>
                <div id="email-input-container" style={styles.inputContainer}>
                    <label style={styles.labelText}>E-mail</label>
                    <input
                        type='email'
                        id="email-input"
                        className="input-box"
                        name="email-input"
                        value={email}
                        style={styles.emailInput}
                        onChange={text => setEmail(text.target.value)}
                    />
                </div>
                <div id="password-input-container" style={styles.inputContainer}>
                    <label style={styles.labelText}>Password</label>
                    <div id="password-field" style={styles.passwordField}>
                        <input
                            type={revealPassword ? "text" : "password"}
                            id="password-input"
                            className="input-box"
                            name="password-input"
                            value={password}
                            style={styles.passwordInput}
                            onChange={text => setPassword(text.target.value)}
                        />
                        <span id="reveal-password" onClick={() => toggleRevealPassword(revealPassword)}>
                            <span >
                                {revealPassword ?
                                    <FontAwesomeIcon icon={faEye} style={styles.eyeIcon} /> :
                                    <FontAwesomeIcon icon={faEyeSlash} style={styles.eyeIcon} />
                                }
                            </span>
                        </span>
                    </div>
                </div>
                <div id="conf-passwd-input-container" style={styles.inputContainer}>
                    <label style={styles.labelText}>Confirm password</label>
                    <div style={styles.passwordField}>
                        <input
                            type={"password"}
                            id="conf-password-input"
                            className="input-box"
                            name="conf-password-input"
                            value={password}
                            style={styles.passwordInput}
                            onChange={text => setPassword(text.target.value)}
                        />

                    </div>
                </div>


                <button
                    id="signUp-button"
                    type='submit'
                    onClick={() => handleSubmit()}
                    style={styles.signupButton}
                >
                    Sign up
                </button>
            </form>

        </div>
    )
}
