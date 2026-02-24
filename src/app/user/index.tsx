import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";


export default function User(){
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Tela de Usuário
            </Text>
        </View>
    )
}