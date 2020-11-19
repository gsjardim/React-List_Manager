import React, { useState } from 'react'
import { colors } from '../styles/themes'
import { ListName } from './listName'

const styles = {

    containerStyle: {
        backgroundColor: "white",
        borderRadius: "10px",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        marginRight: "auto",
        marginLeft: "auto"
    },

    closeModal: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "1% 1% ",
        fontWeight: "bold",
        color: colors.mainColor

    },

    innerContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "2% 3%"
    },

    headerLine: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    datesLine: {
        margin: "1.5% 0",
    },

    dateCreatedText: {
        marginRight: "60px"
    },

    attachmentDiv: {
        margin: "2% 0",
    },

    attachmentText: {
        marginRight: "10px"
    },

    detailsDiv: {
        display: "flex",
        flexDirection: "column",
        margin: "1.5% 0",
    },

    detailsLabel: {
        marginBottom: "4px"
    },

    detailsTextArea: {
        width: "100%",
        borderColor: colors.secondaryColor,
        fontSize: "20px"
    },

    bottomControls: {
        display: "flex",
        justifyContent: "center",
    },

    doneControl: {
        //marginRight: "10px"
        marginRight: "auto"
    },

    saveButton: {

    }
}


export const ItemView = (props) => {
    let itemData = props.item
    for(let key in itemData){
        console.log(key + ": " + itemData[key])
    }
    
    const [description, setDescription] = useState(itemData.description || "")
    const [status, setStatus] = useState(itemData.status || "pending")
    const [attachments, setAttachments] = useState(itemData.attachments || [])
    const [dueDate, setDueDate] = useState(itemData.dueDate || "")
    const [details, setDetails] = useState(itemData.details || "")

    const handleSave = () => {
        if (isValidated()) {            
            if(Object.keys(itemData).length > 0){
                itemData.description = description;
                itemData.status = status;
                itemData.attachments = attachments;
                itemData.dueDate = dueDate;
                itemData.details = details;

                props.editItem(itemData);

            }
            else {
                let newItem = {
                    id: new Date().getTime(),
                    description: description,
                    listId: "",
                    status: status,
                    attachments: attachments,
                    dueDate: dueDate,
                    dateCreated: new Date().toLocaleDateString(),
                    details: details
                }
                props.getItem(newItem)
            }
            
            props.closeModal()
        }
    }

    const isValidated = () => {

        if (description === "") {
            alert("Please enter a new name for your item.")
            return
        }
        return true
    }

    return (
        <div
            id="item-modal-container"
            style={styles.containerStyle}
        >
            <div style={styles.closeModal}>
                <span onClick={()=>props.closeModal()}>X</span>
            </div>
            <div style={styles.innerContainer}>
                <div style={styles.headerLine}>
                    <span style={styles.listNameField}>
                        <ListName
                            defaultName={itemData.description || ""}
                            placeholder="Enter item name"
                            getName={(value) => setDescription(value)}
                            editMode={ Object.keys(itemData).length > 0 ? false : true}
                        />
                    </span>
                    <span>
                        Status: Pending
                </span>

                </div>
                <div style={styles.datesLine}>
                    <span>
                        Due date: 10-Nov-2020
                    </span>

                </div>

                <div style={styles.attachmentDiv}>
                    <span style={styles.attachmentText}>Attachments</span>
                    <button>+</button>
                </div>

                <div style={styles.detailsDiv}>
                    <label for="details" style={styles.detailsLabel}>Details</label>
                    <textarea
                        value={details}
                        type="text"
                        name="details"
                        style={styles.detailsTextArea}
                        rows="5"
                        onChange={(text) => setDetails(text.target.value)}
                        
                    />
                </div>

                <div style={styles.bottomControls}>
                    <span style={styles.doneControl}>
                        <input type="checkbox" name="done" />
                        <label for="done">Done</label>
                    </span>
                    <button
                        style={styles.saveButton}
                        onClick={() => handleSave()}
                    >
                        Save
                    </button>
                </div>
            </div>

        </div>
    )
}

