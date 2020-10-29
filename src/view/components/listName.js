import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const styles = {

    inputField: {
        display: "flex",
        flexDirection: "row"

    },

    nameInput: {
        color: "#b7b795",
        marginRight: "8px",
        fontSize: "25px",
        height: "40px",
    },

    saveButton: {
        backgroundColor: "#80ffaa",
        width: "120px",
        fontWeight: "800"
    },

    listTitle: {
       
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    listTitleText: {
        fontSize: "40px",
        fontFamily: "Comic Sans MS",
        marginRight: "20px"
    },

    editListButton: {
        border: "none"
    },

    editListIcon: {
        color: "gray",
        fontSize: "30px"
    },
}

export function ListName(props) {

    const [name, setName] = useState(props.defaultName);
    const [isEditMode, toggleEditMode] = useState(false);

    const handleClick = () => {
        toggleEditMode(!isEditMode)
    }


    return (
        <div className="list-title" style={styles.listTitle}>
            {isEditMode ?
                <div style={styles.inputField}>
                    <input
                        style={styles.nameInput}
                        value={name}
                        onChange={(text) => setName(text.target.value)}
                    />
                    <button
                        style={styles.saveButton}
                        onClick={() => handleClick()}
                    >
                        Save
                    </button>
                </div>
                :
                <div>
                    <span style={styles.listTitleText}>{name}</span>
                    <button
                        style={styles.editListButton}
                        onClick={() => handleClick()}
                    >
                        <FontAwesomeIcon icon={faEdit} style={styles.editListIcon} />
                    </button>
                </div>
            }



        </div>
    )
}