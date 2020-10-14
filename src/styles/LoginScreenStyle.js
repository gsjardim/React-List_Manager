/*https://www.w3schools.com/jsref/dom_obj_style.asp*/
import { colors, fonts } from './themes'

export const LoginScreenStyle = {

    mainContainer: {
        borderColor: colors.mainColor,
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: fonts.mainFontFamily,
        width: "35%",
        height: "45%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "4%",
        minWidth: "300px",
        minHeight: "400px"
        
    },

    form : {
        width: "70%",
        display: "flex",
        flexDirection: "column",
    },
    
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
        width: "100%"
    },
    
    labelText: {
        marginRight: "6px",
        fontSize: "16pt",
    },
    
    emailInput: {
       
        fontSize: "14pt",
        fontFamily: fonts.mainFontFamily,
        backgroundColor: "white",
        padding: "5px",
    
    },

    passwordInput: {
       
        fontSize: "14pt",
        fontFamily: fonts.mainFontFamily,
        backgroundColor: "white",
        padding: "5px",
        width: "100%"
    
    },
    
    loginButton: {
        marginTop: "20px",
        width: "100px",
        height: "40px",
        borderRadius: "0",
        fontSize: "20px",
    },
    
    passwordField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    
    eyeIcon: {
        position: "relative",
         marginLeft: "-30px",
        
    },
}

