import { colors, fonts } from './themes'

export const HomeStyle = {


    mainContainer: {
        width: "100%",
        height: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        //marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.mainColor

    },

    menus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: colors.fontDarkColor,
        fontSize: "20px",
        backgroundColor: colors.neutralColor,
        height: "5%",
        padding: "1% 10%"
    },


    login: {
        marginRight: "30px",
    },

    presentationBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        height: "auto",
        minWidth: "500px",
        flex: "1"
    },

    presentationBoxH2: {
        fontFamily: fonts.mainFontFamily, /*The second parameter is a default font that will be used if the first option has a problem loading*/
        fontSize: "300%",
        color: colors.fontLightColor,
    },

    boxLeftSide: {
        height: "40%",
        width: "30%",
    },

    notesImage: {
        width: "250px", //When we change one dimension, the other will change proportionally too
    },

    startButton: {
        backgroundColor: colors.neutralColor,
        color: colors.fontDarkColor,
        marginTop: "50px",
        fontSize: "18px",
        height: "40px",
        width: "120px",
        border: "none",
        borderRadius: "3px"
    }

}