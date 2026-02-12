import { StyleSheet, View } from "react-native";
import { Login } from "./login/login";

export default function Index() {
	return <Login />;
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
}); 
