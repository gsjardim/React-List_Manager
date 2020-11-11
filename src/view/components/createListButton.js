import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { colors, fonts } from '../styles/themes'


const style = {

    button: {
        backgroundColor: "rgba(256, 256, 256, 1)",
        border: "0",
        fontSize: "20px",
        fontFamily: fonts.mainFontFamily
    },

    plusIcon: {
        color: colors.secondaryColor,
        marginRight: "8px"
    },
}

export function CreateListButton(props) {

    const handleClick = () => {
        props.createList()
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