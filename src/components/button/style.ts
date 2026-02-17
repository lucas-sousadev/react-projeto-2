import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
		width: 200,
		height: 50,
		backgroundColor: "#f80f0f",
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#111111",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 7,
	},
    textButton: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "600",
	},
})