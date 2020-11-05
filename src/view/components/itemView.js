import React from 'react'
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
        marginLeft: "auto",
        padding: "2% 3%"
    },

    innerContainer: {
        display: "flex",
        flexDirection: "column",
    },

    headerLine: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
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
        borderColor: colors.secondaryColor
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

    return (
        <div
            id="item-modal-container"
            style={styles.containerStyle}
        >
            <div style={styles.innerContainer}>
                <div style={styles.headerLine}>
                    <span style={styles.listNameField}>
                        <ListName
                            defaultName={"Item Name"}
                        />
                    </span>
                    <span>
                        Status: Pending
                </span>

                </div>
                <div style={styles.datesLine}>
                    <span style={styles.dateCreatedText}>
                        Date created: 01-Nov-2020
                </span>
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
                        type="text"
                        name="details"
                        style={styles.detailsTextArea}
                        rows="5"
                    />
                </div>

                <div style={styles.bottomControls}>
                    <span style={styles.doneControl}>
                        <input type="checkbox" name="done" />
                        <label for="done">Done</label>
                    </span>
                    <button style={styles.saveButton}>Save</button>
                </div>
            </div>

        </div>
    )
}

