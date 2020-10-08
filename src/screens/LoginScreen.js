import React, { useState } from 'react'
import '../styles/main.css';
import '../styles/LoginScreen.css'
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
        <div className="main-container">

            <form id="login-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="labelText">E-mail</label>
                    <input
                        type='email'
                        id="email-input"
                        className="input-box"
                        name="email-input"
                        value={email}
                        onChange={text => setEmail(text.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label className="labelText">Password</label>
                    <div className="password-field">
                        <input
                            type={revealPassword ? "text" : "password"}
                            id="password-input"
                            className="input-box"
                            name="password-input"
                            value={password}
                            onChange={text => setPassword(text.target.value)}
                        />
                        <span id="reveal-password" onClick={() => toggleRevealPassword(revealPassword)}>
                            <span >
                                {revealPassword ?
                                    <FontAwesomeIcon icon={faEye} className="eye-icon" /> :
                                    <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" />
                                }
                            </span>
                        </span>
                    </div>
                </div>
                <div className="checkbox-container">
                    <label className="labelText">Remember me</label>
                    <input
                        id="remember-me-checkbox"
                        name="remember-me-checkbox"
                        type='checkbox'
                        value={isChecked}
                        onChange={action => setIsChecked(!action.target.value)}
                    />
                </div>

                <button id="login-button" type='submit'>Login</button>
            </form>

        </div>
    )
}

export function SignUpScreen() {

    return (
        <div className="main-container">
            <p>Signup Screen</p>
        </div>
    )
}