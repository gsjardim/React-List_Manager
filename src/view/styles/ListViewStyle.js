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
        border: "2px solid blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 100px",
        width: "100%"
    },

    rightCornerMenus: {

    },

    myAccountMenu: {
        marginRight: "60px"
    },

    listTitle: {
        margin: "3% 0 1.5% 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    listTitleText: {
        fontSize: "40px",
        fontFamily: "Comic Sans MS",
        marginRight: "20px"
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
        border: "2px solid red",
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