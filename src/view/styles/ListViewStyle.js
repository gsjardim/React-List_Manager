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

    modalStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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

    listNameField: {
        margin: "3% 0 1.5% 0",
    },

    controlsDiv: {
        display: "flex",
        flexDirection: "row",
        width: "65%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%"
    },

    showCompleted: {
        // justifySelf: "flex-start",
        // marginLeft: "20%"
    },

    addItemSpan: {
        //justifySelf: "flex-end"
    },

    addItemButton: {
        fontFamily: fonts.mainFontFamily,
        fontSize: "20px"
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