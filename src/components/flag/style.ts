import { themas } from "@/src/global/themes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    flag: {
        width: 80,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themas.Colors.primary,
        borderRadius: 15,
        borderWidth: 1,
    },
    caption: {
        color: themas.Colors.textWhite,
        fontSize: 13,
    }
    
})