import { colors, fonts } from './themes'

export const ListsMainStyle = {

    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: fonts.mainFontFamily,
        padding: "30px 15px"
    },

    userMenusContainer: {
        display: "flex",
        alignSelf: "flex-end",
        marginRight: "5%",
        fontFamily: fonts.mainFontFamily,
        fontSize: "19px"
    },

    accountMenu: {
        marginRight: "13px"
    },

    subHeaderContainer: {
        alignSelf: "flex-start",
        marginLeft: "10%",
        marginTop: "3%",
        display: "flex",
        flexDirection: "column",
    },

    welcomeLine: {
        fontSize: "30px",
        marginBottom: "20px",
    },

    createListDiv: {
        display: "flex",
        flexDirection: "row",
       
    },

    newListSpan: {
        display: "flex",
        alignItems: "center"
    },

    listNameInput: {
        fontSize: "20px",
        borderRadius: "0",
        marginLeft: "50px",
        marginRight: "6px"
    },

    saveNewListButton: {
        border: "none",
        backgroundColor: colors.neutralColor,
        padding: "5px",
        color: colors.mainColor
    },

    listsContainer: {
        width: "60%",
        marginTop: "3%",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)"
    },

    table: {
        border: "2px solid gray",
        width: "100%",
        fontSize: "22px"
        
    },

    tableCell: {
        padding: "10px 0px"
    }

}