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
		height: Dimensions.get("window").height / 3,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	boxMid: {
		height: Dimensions.get("window").height / 4,
		width: "100%",
		alignItems: "flex-start",
		justifyContent: "center",
		paddingHorizontal: 37,
	},
	boxBottom: {
		height: Dimensions.get("window").height / 3,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 160,
		height: 80,
		borderRadius: 10,
	},
	text: {
		fontWeight: "bold",
		marginTop: 40,
		fontSize: 18,
	},
	textBottom: {
		fontSize: 16,
		color: "#000000",
	},
});
