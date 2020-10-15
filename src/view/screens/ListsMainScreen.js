import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListsMainStyle as styles } from '../styles/ListsMainStyle'
import { CreateListButton } from '../components/createListButton'

export function ListsMainScreen() {
    //Temporary data
    let userName = "Guilherme";
    let listCount = 5;

    const [lists, setLists] = useState([]);

    const addList = (list) => {
        let newLists = [...lists, list]
        setLists(newLists)
    }

    return (
        <div style={styles.mainContainer} >
            <span ><h2 id="screen-header">My Lists</h2></span>
            <div style={styles.userMenusContainer}>
                <span style={styles.accountMenu}>
                    <p id="account-menu">Account</p>
                </span>
                <span>
                    <Link id="signout-menu" to="/" >Sign out</Link>
                </span>
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
                <table style={styles.table}>
                    {
                        lists.map((row) => {
                            return row
                        })
                        // lists.length > 0 ?
                        //     <tr style={{ backgroundColor: "rgba(47, 229, 36, 0.6)" }}>
                        //         <th style={styles.tableCell}>List name</th>
                        //         <th style={styles.tableCell}>Total tems</th>
                        //         <th style={styles.tableCell}>Overdue items</th>
                        //     </tr>


                        //     :
                        //     null
                    }

                    {/* <tr style={{ textAlign: "center" }}>
                        <td style={styles.tableCell} >Pendencias</td>
                        <td style={styles.tableCell}>10</td>
                        <td style={styles.tableCell}>0</td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td style={styles.tableCell}>Shopping</td>
                        <td style={styles.tableCell}>5</td>
                        <td style={styles.tableCell}>1</td>
                    </tr> */}
                </table>
            </div>

        </div>
    )
}