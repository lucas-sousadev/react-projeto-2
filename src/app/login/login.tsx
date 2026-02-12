import React from "react";
import {
    View,
    Text, 
    Image,
    TextInput,

 } from 'react-native';
import {style} from "./style";
import Logo from "../../assets/logo.png";

export function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={style.text}>Bem vindo de Volta</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de email</Text>
                    <View style={style.boxInput}>
                        <TextInput style={style.input} placeholder="Digite seu email" />
                    </View>
                <Text style={style.titleInput}>Senha</Text>
                <TextInput style={style.input} placeholder="Digite sua senha" />
            </View>
            <View style={style.boxBottom}>

            </View>
        </View>
    )};