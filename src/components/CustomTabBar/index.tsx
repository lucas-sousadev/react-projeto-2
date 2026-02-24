import {
	AntDesign,
	Entypo,
	FontAwesome,
	MaterialIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { AuthContextList } from "../../context/authContext_list";

interface Props {
	state: any;
	navigation: any;
}

export default ({ state, navigation }: Props) => {
	const { onOpen } = useContext<any>(AuthContextList);

	const go = (screenName: string) => {
		navigation.navigate(screenName);
	};

	return (
		<View style={style.tabArea}>
			<TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
				<AntDesign
					name="bars"
					style={{
						opacity: state.index === 0 ? 1 : 0.3,
						color: "#f80f0f",
						fontSize: 32,
					}}></AntDesign>
			</TouchableOpacity>

			<TouchableOpacity style={style.tabItemButton} onPress={()=>onOpen()}>
				<View style={{ width: "100%", left: 10, top: 4 }}>
					<Entypo name="plus" size={40} color="#ffffff"></Entypo>
				</View>
				<View
					style={{ flexDirection: "row-reverse", width: "100%", right: 10, bottom: 10 }}>
					<MaterialIcons name="edit" size={32} color="#ffffff"></MaterialIcons>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
				<FontAwesome
					name="user"
					style={{
						opacity: state.index === 1 ? 1 : 0.3,
						color: "#f80f0f",
						fontSize: 32,
					}}></FontAwesome>
			</TouchableOpacity>
		</View>
	);
};
