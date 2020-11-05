import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListsMainStyle as styles } from '../styles/ListsMainStyle'
import { CreateListButton } from '../components/createListButton'
import Menu from '@material-ui/core/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Fade, MenuItem } from '@material-ui/core'

export function ListsMainScreen() {
    //Temporary data
    let userName = "Guilherme";
    let listCount = 5;

    const [lists, setLists] = useState([]);
    const [color, setColor] = useState("white")
    const [anchorEl, setAnchorEl] = useState(null)
    const isMenuOpen = Boolean(anchorEl)

    const toggleButtonColor = (color) => {
        setColor(color)
    }

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchorEl(null)
    }

    const addList = (list) => {
        let newLists = [...lists, list]
        setLists(newLists)
    }

    return (
        <div style={styles.mainContainer} >
            <span ><h2 id="screen-header">My Lists</h2></span>
            <div style={styles.userMenusContainer}>
                <FontAwesomeIcon
                    icon={faUser}
                    onClick={(event) => openMenu(event)}
                />
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={isMenuOpen}
                    onClose={() => closeMenu()}
                    TransitionComponent={Fade}
                >
                    <MenuItem>
                        <span style={styles.accountMenu}>
                            <p id="account-menu">Account</p>
                        </span>
                    </MenuItem>
                    <MenuItem>
                        <span
                            style={{ backgroundColor: color }}
                            onMouseEnter={() => toggleButtonColor("red")}
                            onMouseLeave={() => toggleButtonColor("white")}
                        >
                            <Link id="signout-menu" to="/" >Sign out</Link>
                        </span>
                    </MenuItem>
                </Menu>
            </div>
            {/**This is where the welcome message is shown, with the add new list button right below it */}
            <div style={styles.subHeaderContainer}>
                <span style={styles.welcomeLine}>
                    <h3
                        id="welcome-line"
                    >{`Welcome ${userName}. You have ${listCount} lists.`}</h3>
                </span>
                <CreateListButton addList={addList.bind(this)} />
            </div>

            <div id="lists-container" style={styles.listsContainer}>
                {lists.length > 0 ?
                    <table style={styles.table}>
                        {
                            lists.map((row) => {
                                return row
                            })
                        }

                    </table>
                    :
                    <div style={{
                        height: "100px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <span>You currently do not have any lists.</span>
                    </div>

                }

            </div>

        </div>
    )
}