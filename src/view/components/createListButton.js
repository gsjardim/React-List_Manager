import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { fonts } from '../styles/themes'
import { TableRow } from './tableRow'


const style = {

    button: {
        backgroundColor: "rgba(256, 256, 256, 1)",
        border: "0",
        fontSize: "20px",
        fontFamily: fonts.mainFontFamily
    },

    plusIcon: {
        color: "green",
        marginRight: "8px"
    },
}

export function CreateListButton(props) {

    var tableRow = TableRow()

    const handleClick = () => {
        console.log("Create button was clicked")
        props.addList(tableRow)
    }

    return (
        <button
            type="button"
            style={style.button}
            onClick={() => handleClick()}
        >
            <FontAwesomeIcon icon={faPlus} style={style.plusIcon} />
                    Create New
        </button>
    )
}