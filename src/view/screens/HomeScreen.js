/*HomeScreen*/

import '../styles/main.css';
import { HomeStyle as styles } from '../styles/HomeStyle'
import React from 'react'
import { Link } from 'react-router-dom'

export function HomeScreen(props) {

    var handleStartButtonClick = function(){
        
        /**
         *  When React Router v4 renders a component, it’ll pass that component three props:
         *  location, match, and history. This history prop comes from the History library 
         * and has a ton of fancy properties on it related to routing. In this case, the one 
         * we’re interested in is history.push. What it does is it pushes a new entry into the history stack
         * - aka redirecting the user to another route.
         */
        props.history.push('/lists');
    }

    return (
        <div id="main-container" style={styles.mainContainer}>
            <div style={styles.menus} >
                
                <div id="login-menus">
                    <span style={styles.login}>
                        <Link to="/login" className="login">Login</Link>
                    </span>
                    <span>
                        <Link to="/signup" className="signup">Sign up</Link>
                    </span>

                </div>
            </div >

            <div id="presentation-box" style={styles.presentationBox}>
                <div id="box-left-side" style={styles.boxLeftSide}>
                    <h2 style={styles.presentationBoxH2} >Don't miss anything.<br/>
                    Get organized with<br />Easy List Manager</h2>
                    <button 
                        type="button" 
                        id="start-button" 
                        onClick={()=> handleStartButtonClick()}
                        style={styles.startButton}
                        >Start Now</button>
                </div>
                <div id="box-right-side">
                    <img
                        src="https://miro.medium.com/max/1200/1*w92wMLwBGlgfhIDa-AhGmg.png"
                        alt="Notes"
                        style={styles.notesImage} 
                    />
                </div>
            </div>

        </div>
    );
}

