
import React from 'react'

const style = {
    tableCell: {
        padding: "10px 0px"
    }
}

/**
 * This component renders a single row in the table of lists
 * in the ListsMainScreen
 */
export function TableRow() {

    return (

        <tr style={{ textAlign: "center" }}>
            <td style={style.tableCell} >Pendencias</td>
            <td style={style.tableCell}>10</td>
            <td style={style.tableCell}>0</td>
        </tr>

    )
}