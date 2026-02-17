import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	tabArea: {
		flexDirection: "row",
		height: 80,
		justifyContent: "space-around",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.40,
		shadowRadius: 10.65,
		elevation: 24,
	},
	tabItem:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tabItemButton:{
		width: 70,
		height: 70,
		borderRadius: 35,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 999,
		top: -35,
		backgroundColor: "#f80f0f",
	},
})