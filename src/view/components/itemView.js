import React from 'react'
import { ListName } from './listName'

const styles = {

    containerStyle: {
        backgroundColor: "white",
        borderRadius: "10px",
        width: "60%",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "30px",
        marginRight: "auto",
        marginLeft: "auto",
    },

    headerLine: {
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        padding: "0 5%"
    },

    listNameField: {
        //marginTop: "5%"
    }
}


export const ItemView = (props) => {

    return (
        <div
            style={styles.containerStyle}
        >
            <div style={styles.headerLine}>
            <span style={styles.listNameField}>
                <ListName
                    defaultName={"Item Name"}
                />
            </span>
            <span>
                Status
            </span>

            </div>
            
            
        </div>
    )
}

