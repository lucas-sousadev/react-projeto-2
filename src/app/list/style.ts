import { themas } from "@/src/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    header:{
        width: "100%",
        height: Dimensions.get('window').height/6,
        backgroundColor: "#f80f0f",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    greeting:{
        fontSize: 20,
        color: "white",
        marginTop: 20,
    },
    boxInput:{
        width: "80%",
    },
    boxList :{
        flex: 1,
        width: "100%",
    },
    card:{
        width: "100%",
        height: 90,
        backgroundColor: "#f2f2f2",
        marginTop: 6,
        borderRadius: 10,
        justifyContent: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    rowCard:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rowCardLeft:{
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,        
    },
    titleCard:{
        fontSize: 16,
        fontWeight: "bold",
    },
    descricaoCard:{
        color: themas.Colors.textBlack,
    }
});