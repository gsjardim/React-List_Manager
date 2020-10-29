/*ListViewScreen*/

import '../styles/main.css'
import { ListViewStyle as styles } from '../styles/ListViewStyle'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch'
import { ListRow } from '../components/listRow'
import { ListName } from '../components/listName'

export function ListViewScreen(props) {


    return (
        <div id="main-container" style={styles.mainContainer}>
            <div style={styles.menus} >
                <div>
                    <button style={styles.backArrowButton}>
                        <FontAwesomeIcon icon={faArrowLeft} style={styles.backArrowIcon} />
                    </button>

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

            <ListName/>

            <div className="show-completed-switch"
                style={styles.showCompleted}>
                <span>Show completed</span>
                <span><Switch/></span>
            </div>

            <div class="items-list-container" style={styles.itemsContainer}>
                <div style={styles.listHeader}>
                    <span style={styles.itemDescriptionHeader}>Description</span>
                    <span style={styles.itemDateHeader}>Date</span>
                    <span style={styles.itemStatusHeader}>Status</span>
                </div>
                <ListRow/>
                <ListRow/>
                <ListRow/>
                <ListRow/>

            </div>

        </div>
    );
}


