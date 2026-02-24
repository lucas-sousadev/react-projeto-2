import React, { createContext, useContext, useRef } from "react";
import { Alert, View, Text, Dimensions, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import { Modalize } from "react-native-modalize";
import { Flag } from "../components/flag";
import { Input } from "../components/input";
import { themas } from "../global/themes";
import { MaterialIcons } from "@expo/vector-icons";
export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
	const flags = [
		{caption: "Urgente", color: themas.Colors.primary},
		{caption: "Opcional", color: themas.Colors.blueLight},
	]
	const modalizeRef = useRef<Modalize>(null);

	const onClose = () => {
		modalizeRef.current?.close();
	};
	const onOpen = () => {
		modalizeRef.current?.open();
	};
	const _renderFlags = () => {
		return flags.map((item, index)=>(
				<TouchableOpacity key={index}>
					<Flag caption={item.caption} color={item.color} selected />
				</TouchableOpacity>
		))	
	}
	const _container = () => {
		return (
			<View style={style.container}>

				<View style={style.header}>
					<TouchableOpacity onPress={onClose}>
						<MaterialIcons name="close" size={30}/>
					</TouchableOpacity>
					<Text style={style.title}>Adicionar nova tarefa</Text>
					<TouchableOpacity>
						<MaterialIcons name="check" size={30}/>
					</TouchableOpacity>
				</View>

				<View style={style.content}>
					<Input 
						title="Título da tarefa"
						labelStyle={style.label}
					/>
					<Input 
						title="Descrição da tarefa"
						labelStyle={style.label}
						height={100}
						multiline
						numberOfLines={5}

					/>
					<View style={{width: "40%"}}>
						<Input 
							title="Tempo limite"
							labelStyle={style.label}
						/>
					</View>
					<View style={style.containerFlags}>
						<Text style={style.label}>Flags:</Text>
						<View style={style.rowFlags}>
							{_renderFlags()}
						</View>
					</View>
				</View>
			</View>
		)
	}
	return (
		<AuthContextList.Provider value={{onOpen}}>
			{props.children}
			<Modalize 
				ref={modalizeRef} 
				childrenStyle={{height: Dimensions.get('window').height/1.3}}
				adjustToContentHeight={true}
				>
				{_container()}
			</Modalize>
		</AuthContextList.Provider>
	);
};

export const useAuth = ()=> useContext(AuthContextList);

export const style = StyleSheet.create({
	container:{
		width: "100%",
	},
	header:{
		width: "100%",
		height: 40,
		paddingHorizontal: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 20,
	},
	title:{
		fontSize: 20,
		fontWeight: "bold",
	},
	content:{
		width: "100%",
		paddingHorizontal: 20,
	},
	containerFlags:{
		width: "100%",
		marginTop: 20,
		padding: 10,		
	},
	label:{
		fontWeight: "bold",
	},
	rowFlags:{
		flexDirection: "row",
		gap: 10,
		marginTop: 10,
	}
})