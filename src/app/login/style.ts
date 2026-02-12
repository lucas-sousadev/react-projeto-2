import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    boxTop: {
        height: Dimensions.get("window").height/3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    boxMid: {
        height: Dimensions.get("window").height/4,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get("window").height/3,
        width: "100%"},
    logo: {
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: "bold",
        marginTop: 40,
        fontSize: 18,
    },
    titleInput: {
        marginLeft: 5,
        color: "Black",
        marginTop: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        marginTop: 10,
    }
});