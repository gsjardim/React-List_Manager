/*HomeScreen*/

import '../styles/HomeScreen.css';
import '../styles/main.css';
import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen(props) {

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
        <div id="main-container">
            <div className="menus">
                {/* <div id="main-menu">
                    <p >Menu</p>
                </div> */}
                <div id="login-menus">
                    <span className="login">
                        <Link to="/login" className="login">Login</Link>
                    </span>
                    <span>
                        <Link to="/signup" className="signup">Sign up</Link>
                    </span>

                </div>
            </div >

            <div id="presentation-box">
                <div id="box-left-side">
                    <h2>Don't miss anything.</h2>
                    <h2>Get organized with<br />Easy List Manager</h2>
                    <button type="button" id="start-button" onClick={()=> handleStartButtonClick()}>Start Now</button>
                </div>
                <div id="box-right-side">
                    <img
                        src="https://miro.medium.com/max/1200/1*w92wMLwBGlgfhIDa-AhGmg.png"
                        alt="Notes"
                        width="250px" //When we change one dimension, the other will change proportionally too
                    />
                </div>
            </div>

        </div>
    );
}



export default HomeScreen;