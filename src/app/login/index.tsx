import { MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/testelogo.png";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { style } from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native";


export function Login() {
	const navigation = useNavigation<NavigationProp<any>>();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	async function getLogin() {
		try {
			if (!email || !password) {
				alert("Por favor, preencha todos os campos.");
				return;
			}

			navigation.reset({routes: [{name: "BottomRoutes"}]})

				if (email == "castanhajabuticaba@gmail.com" && password == "senha") {
					alert("Logado com sucesso!");
				} else {
					alert("Usuário não encontrado!");
				}
			
		} catch (error) {
			console.error("Erro ao fazer login:", error);
		}
	}

	return (
		<View style={style.container}>
			<View style={style.boxTop}>
				<Image source={Logo} style={style.logo} resizeMode="contain" />
				<Text style={style.text}>Olá, seja bem-vindo</Text>
			</View>
			<View style={style.boxMid}>
				<Input
					value={email}
					onChangeText={setEmail}
					title="E-mail"
					iconRightName="email"
					IconRight={MaterialIcons}
					placeholder="Ex: email@dominio.com"
				/>
				<Input
					value={password}
					onChangeText={setPassword}
					title="Senha"
					iconRightName={!showPassword ? "eye-closed" : "eye"}
					IconRight={Octicons}
					placeholder="Ex: senhalegal123..."
					secureTextEntry={!showPassword}
					onIconRightPress={() => setShowPassword(!showPassword)}
				/>
			</View>
			<View style={style.boxBottom}>
				<Button 
					text="Entrar"
				 	onPress={() => getLogin()} 
				/>
			</View>
			<Text style={style.textBottom}>
				Não tem conta?{" "}
				<Text style={{ fontSize: 16, color: "#f80f0f" }}>Crie agora!</Text>
			</Text>
		</View>
	);
}
