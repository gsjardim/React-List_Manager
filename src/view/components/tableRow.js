
import React from 'react'

const styles = {

    inputContainer: {
        width: "100%"
    },

    inputField: {
        border: "1px solid gray",
        backgroundColor: "white"
    }
}

/**
 * This component renders a single row in the table of lists
 * in the ListsMainScreen
 */
export function TableRow() {

    return (

        <div style={styles.inputContainer}>
            <input type="text" style={styles.inputField}/>
        </div>

    )
}