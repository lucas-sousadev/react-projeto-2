import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
   boxInput: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		borderRadius: 40,
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		backgroundColor: "#f0f0f0",
		borderColor: "#ccc",
	},
	input: {
		height: "100%",
		width: "90%",
		padding: 10,
		borderRadius: 40,
	},
    iconInput:{
        position: "absolute",
        right: 25,
        top: 8,
    },
    titleInput: {
		marginLeft: 5,
		color: "black",
		marginTop: 20,
	},
    Icon:{
        width: "100%",
        left: 35,
    },
    Button: {
        width: "10%",
    }
})