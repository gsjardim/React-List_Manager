import React, { useState } from 'react'
import '../styles/main.css';
import { LoginScreenStyle as styles } from '../styles/LoginScreenStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [revealPassword, setRevealPassword] = useState(false)

    const handleSubmit = () => {
        console.log('Form submitted')
    }

    const toggleRevealPassword = state => {
        setRevealPassword(!state)
    }

    return (
        <div id="mainContainer" style={styles.mainContainer}>

            <form id="login-form" onSubmit={handleSubmit} style={styles.form} >
                <div id="email-input-container" style={styles.inputContainer}>
                    <label style={styles.labelText} >E-mail</label>
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
                <div id="password-input-container" style={styles.inputContainer} >
                    <label style={styles.labelText}>Password</label>
                    <div id="password-field" style={styles.passwordField} >
                        <input
                            type={revealPassword ? "text" : "password"}
                            id="password-input"
                            className="input-box"
                            name="password-input"
                            value={password}
                            style={styles.passwordInput }
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
                <div >
                    <label style={styles.labelText} >Remember me</label>
                    <input
                        id="remember-me-checkbox"
                        name="remember-me-checkbox"
                        type='checkbox'
                        value={isChecked}
                        onChange={action => setIsChecked(!action.target.value)}
                    />
                </div>

                <button id="login-button" type='submit' style={styles.loginButton}>Login</button>
            </form>

        </div>
    )
}
