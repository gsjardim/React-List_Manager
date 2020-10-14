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
    },

    welcomeLine: {
        fontSize: "30px",
        marginBottom: "3%"
    },

    createNewButton: {
        backgroundColor: "#FFFFFFFF",
        border: "0",
        fontSize: "20px",
        fontFamily: fonts.mainFontFamily
    },

    plusIcon: {
        color: "green",
        marginRight: "8px"
    },

    listsContainer: {
        width: "60%",
        marginTop: "3%",
        boxShadow: "4px 4px 8px 4px rgba(0, 0, 0, 0.3)"
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