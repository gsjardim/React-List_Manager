/*ListViewScreen*/

import '../styles/main.css'
import { ListViewStyle as styles } from '../styles/ListViewStyle'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch'
import Modal from '@material-ui/core/Modal'
import { ListRow } from '../components/listRow'
import { ListName } from '../components/listName'
import { ItemView } from '../components/itemView'


export function ListViewScreen(props) {

    const [modalState, setModalState] = useState(false);

    const toggleModal = () => {
        setModalState(!modalState)
    }

    const getModal = () => {

        return (
                <Modal
                    open={modalState}
                    onClose={toggleModal}
                    style={styles.modalStyle}
                >
                    <ItemView/>
                </Modal>
        )
    }


    return (
        <div id="main-container" style={styles.mainContainer}>

            {getModal()}

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
            <div style={styles.listNameField}>
                <ListName 
                    defaultName={"List Name"}
                />
            </div>
            

            <div style={styles.controlsDiv}>
                <div className="show-completed-switch"
                    style={styles.showCompleted}>
                    <span>Show completed</span>
                    <span><Switch /></span>
                </div>
                <span style={styles.addItemSpan}>
                    <button
                        style={styles.addItemButton}
                        onClick={() => toggleModal()}
                    >
                        Add Item
                    </button>
                </span>
            </div>


            <div class="items-list-container" style={styles.itemsContainer}>
                <div style={styles.listHeader}>
                    <span style={styles.itemDescriptionHeader}>Description</span>
                    <span style={styles.itemDateHeader}>Date</span>
                    <span style={styles.itemStatusHeader}>Status</span>
                </div>
                <ListRow />
                <ListRow />
                <ListRow />
                <ListRow />

            </div>

        </div>
    );
}


