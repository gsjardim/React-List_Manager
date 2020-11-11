/*ListViewScreen*/

import '../styles/main.css'
import { ListViewStyle as styles } from '../styles/ListViewStyle'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch'
import Modal from '@material-ui/core/Modal'
import { ListRow } from '../components/listRow'
import { ListName } from '../components/listName'
import { ItemView } from '../components/itemView'

const items = require("../../data/testData").items;

export function ListViewScreen(props) {

    const [modalState, setModalState] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showCompleted, setShowCompleted] = useState(true);

    useEffect(() => {
        if (!isLoaded) {
            fetchItems();
        }
    })

    const fetchItems = () => {
        setListItems(items);
        setIsLoaded(true);
    }

    const toggleModal = () => {
        setModalState(!modalState)
    }

    const toggleSwitch = () => {
        setShowCompleted(!showCompleted);
    }

    const getModal = () => {

        return (
            <Modal
                open={modalState}
                onClose={toggleModal}
                style={styles.modalStyle}
            >
                <ItemView />
            </Modal>
        )
    }


    return (

        <div id="main-container" style={styles.mainContainer}>

            {getModal()}
            <div style={styles.menus} >
                <div>
                    <button
                        style={styles.backArrowButton}
                        onClick={()=> props.history.goBack()}
                    >
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
                    defaultName={props.location.name}
                />
            </div>


            <div style={styles.controlsDiv}>
                <div className="show-completed-switch"
                    style={styles.showCompleted}>
                    <span>Show completed</span>
                    <span>
                        <Switch
                            checked={showCompleted}
                            onChange={toggleSwitch}
                            color='primary'
                        />
                    </span>
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

            {!isLoaded ?
                <div style={{ fontSize: "25px", height: "100%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <span>Loading...</span>
                </div>
                :
                <div className="items-list-container" style={styles.itemsContainer}>
                    <div style={styles.listHeader}>
                        <span style={styles.itemDescriptionHeader}>Description</span>
                        <span style={styles.itemDateHeader}>Date</span>
                        <span style={styles.itemStatusHeader}>Status</span>
                    </div>
                    {listItems.map((item, index) => {
                        if (item.status !== "complete" || (item.status === "complete" && showCompleted))
                            return <ListRow key={index.toString()} item={item} />
                        return null
                    })}

                </div>
            }

        </div>
    );
}


