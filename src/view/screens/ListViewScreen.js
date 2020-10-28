/*ListViewScreen*/

import '../styles/main.css';
import { ListViewStyle as styles } from '../styles/ListViewStyle'
import React from 'react'
import { Link } from 'react-router-dom'

export function ListViewScreen(props) {

    // var handleStartButtonClick = function(){

    //     /**
    //      *  When React Router v4 renders a component, it’ll pass that component three props:
    //      *  location, match, and history. This history prop comes from the History library 
    //      * and has a ton of fancy properties on it related to routing. In this case, the one 
    //      * we’re interested in is history.push. What it does is it pushes a new entry into the history stack
    //      * - aka redirecting the user to another route.
    //      */
    //     props.history.push('/lists');
    // }

    return (
        <div id="main-container" style={styles.mainContainer}>
            <div style={styles.menus} >
                <div>
                    <icon>
                        Back arrow
                    </icon>
                    <span>
                        Back to My Lists
                    </span>

                </div>
                <div style={styles.rightCornerMenus}>
                    <span style={styles.myAccountMenu}>
                        <Link to="/account" className="myAccount">My Account</Link>
                    </span>
                    <span>
                        <Link to="/" className="signup">Sign out</Link>
                    </span>
                </div>

            </div >

            <div className="list-title" style={styles.listTitle}>
                <span style={styles.listTitleText}>List Name</span>
                <span style={styles.editListButton}>Edit icon</span>
            </div>

            <div className="show-completed-switch"
                style={styles.showCompleted}>
                <span>Show completed</span>
                <span>Switch</span>
            </div>

            <div class="items-list-container" style={styles.itemsContainer}>
                <div style={styles.listHeader}>
                    <span style={styles.itemDescriptionHeader}>Description</span>
                    <span style={styles.itemDateHeader}>Date</span>
                    <span style={styles.itemStatusHeader}>Status</span>
                </div>

            </div>

        </div>
    );
}


