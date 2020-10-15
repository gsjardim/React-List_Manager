import { colors, fonts } from './themes'

export const HomeStyle = {


    mainContainer: {
        maxWidth: "70%",
        height: "70%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "spacebetween",

    },

    menus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontFamily: "Arial, Helvetica, sansserif",
        color: "indigo",
        fontSize: "20px",
    },


    login: {
        marginRight: "20px",
    },

    presentationBox: {
        backgroundColor: colors.mainColor,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        height: "auto",
        minWidth: "500px"
    },

    presentationBoxH2: {
        fontFamily: fonts.mainFontFamily, /*The second parameter is a default font that will be used if the first option has a problem loading*/
        fontSize: "250%",
        color: colors.fontLightColor,
    },

    boxLeftSide: {
        marginRight: "35px",
    },

    notesImage: {
        width: "250px", //When we change one dimension, the other will change proportionally too
    },

    startButton: {
        backgroundColor: colors.fontLightColor,
        color: colors.fontDarkColor,
        fontSize: "18px",
        marginTop: "50px",
        height: "40px",
        width: "120px",
        border: "none",
    }

}