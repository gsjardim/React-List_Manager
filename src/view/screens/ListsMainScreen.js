import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListsMainStyle as styles } from '../styles/ListsMainStyle'
import { CreateListButton } from '../components/createListButton'
import Menu from '@material-ui/core/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Fade, MenuItem } from '@material-ui/core'
import { connect } from 'react-redux'
import { postList } from '../../redux/ActionCreator'

function mapStateToProps(state){
    return {
        lists: state.lists
    }
}

function mapDispatchToProps(dispatch){
    return {
        addNewList: list => dispatch(postList(list))
    }
}

function ListsMainScreen(props) {
    //Temporary data
    let userName = "Guilherme";

    //const [lists, setLists] = useState([]);
    const [name, setName] = useState('');
    const [createActive, setCreateActive] = useState(false);
    const [color, setColor] = useState("white");
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const toggleButtonColor = (color) => {
        setColor(color)
    }

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchorEl(null)
    }

    const handleCreate = () => {
        if (!createActive) setCreateActive(true)
    }

    const addList = (listName) => {
        if (listName !== "") {
            for (let list of props.lists) {
                if (list.name === listName) {
                    alert("You already have a list named " + list.name)
                    return
                }
            }

            let created = new Date().toLocaleDateString()

            let list = {
                name: listName,
                items: 0,
                date: created
            }

            props.addNewList(list)

            //let newLists = [...lists, list]
            //setLists(newLists)
            setName("")
            setCreateActive(false)
        }
        else {
            setCreateActive(false)
        }
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
                    {`Welcome ${userName}. You have ${props.lists.length} lists.`}
                </span>
                <div style={styles.createListDiv}>
                    <CreateListButton createList={handleCreate.bind(this)} />
                    {
                        createActive
                        &&
                        <span style={styles.newListSpan}>
                            <input
                                style={styles.listNameInput}
                                value={name}
                                placeholder={"Enter the list name"}
                                onChange={(text) => setName(text.target.value)}
                            />
                            <button
                                style={styles.saveNewListButton}
                                onClick={() => addList(name)}
                            >Save</button>
                        </span>
                    }

                </div>

            </div>

            <div id="lists-container" style={styles.listsContainer}>
                {props.lists.length > 0 ?
                    <table style={styles.table}>
                        <thead>
                            <tr style={{ border: "2px solid gray", backgroundColor: "silver" }}>
                                <th>
                                    List name
                            </th>
                                <th>
                                    Items
                            </th>
                                <th>
                                    Date created
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.lists.map((row, index) => {
                                    return (
                                        <tr
                                            style={{ textAlign: "center", padding: "10px 0" }}
                                            key={index.toString()}
                                        >
                                            <td><Link to={{
                                                pathname: "/my-list",
                                                name: row.name
                                            }}>{row.name}</Link></td><td>{row.items}</td><td>{row.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListsMainScreen);