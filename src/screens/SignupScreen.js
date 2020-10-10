import React, { useState } from 'react'
import '../styles/SignupScreen.css'
import '../styles/main.css';
//import { SignupScreenStyle as styles} from '../styles/styles'
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
        <div className="main-container" >

            <form id="login-form" >
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
                <div className="input-container">
                    <label className="labelText">Confirm password</label>
                    <div className="password-field">
                        <input
                            type={"password"}
                            id="conf-password-input"
                            className="input-box"
                            name="conf-password-input"
                            value={password}
                            onChange={text => setPassword(text.target.value)}
                        />
                       
                    </div>
                </div>
               

                <button id="login-button" type='submit' onClick={() => handleSubmit()} >Sign up</button>
            </form>

        </div>
    )
}
