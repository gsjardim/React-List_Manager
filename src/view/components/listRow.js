
import React from 'react'
import { colors } from '../styles/themes'

const styles = {

    listRow: {
        height: "40px",
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr",
        columnGap: "2px",
        backgroundColor: colors.rowColor
    },

    itemDescription: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    itemDate: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    itemStatus: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}

const description = "This is my first item. This app will Rock!"

/**
 * This component renders a single row in the ListViewScreen.
 * Each row represents one item in the list.
 */
export function ListRow() {

    return (

        <div style={styles.listRow}>
            <span style={styles.itemDescription}>{description}</span>
            <span style={styles.itemDate}>25-10-2020</span>
            <span style={styles.itemStatus}>Pending</span>
        </div>

    )
}