import { fonts } from './themes'

export const ListViewStyle = {

    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: fonts.mainFontFamily,
        padding: "30px 15px",
    },

    menus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 100px",
        width: "100%"
    },

    backArrowButton: {
        border: "none"
    },

    backArrowIcon: {
        color: "gray",
        fontSize: "22px"
    },

    rightCornerMenus: {

    },

    myAccountMenu: {
        marginRight: "60px"
    },

    showCompleted: {
        alignSelf: "flex-start",
        marginLeft: "20%"
    },

    itemsContainer: {
        margin: "2%",
        width: "70%"
    },

    listHeader: {
        height: "40px",
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr"
    },

    itemDescriptionHeader: {
        backgroundColor: "yellow",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    itemDateHeader: {
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    itemStatusHeader: {
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }


}