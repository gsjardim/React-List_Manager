
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

/**
 * This component renders a single row in the ListViewScreen.
 * Each row represents one item in the list.
 */
export function ListRow(props) {

    return (

        <div style={styles.listRow}>
            <span style={styles.itemDescription}>{props.item.name}</span>
            <span style={styles.itemDate}>{props.item.dateCreated}</span>
            <span style={styles.itemStatus}>{props.item.status}</span>
        </div>

    )
}