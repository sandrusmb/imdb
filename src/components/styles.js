import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default makeStyles({
    container: {
        border: "1px solid orange",
        height: "100vh",
        flexDirection: "column",
        ...centeredStyleObj
    },

    cardContainer: {
        border: "1px solid pink",
        flexDirection: "column",
        ...centeredStyleObj,
        width: 400,
        height: 200,
        padding: "2rem"
    },

    title: {
        border: "1px solid blue",
        fontSize: "2rem"
    },

    titleGridContainer: {
        border: "1px solid red",
        ...centeredStyleObj
    },

    textFieldSearch: {
        width: "90%"
    },

    searchButton: {
        marginLeft: "0.5rem"
    },

    buttonsContainer: {
        marginTop: "1.5rem"
    }

});