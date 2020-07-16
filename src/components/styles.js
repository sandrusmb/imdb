import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default makeStyles({
    container: {
        height: "100vh",
        flexDirection: "column",
        ...centeredStyleObj
    },

    cardContainer: {
        flexDirection: "column",
        ...centeredStyleObj,
        width: 400,
        height: 200,
        padding: "2rem"
    },

    title: {
        fontSize: "4rem"
    },

    titleGridContainer: {
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
    },

    movieIcon: {
        fontSize: "4rem"
    }

});