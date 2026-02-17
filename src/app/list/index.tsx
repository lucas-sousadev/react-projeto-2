import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

export default function List(){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
            <Text>Lista de itens</Text>
            <Text>Lista de itens</Text>
            <Text>Lista de itens</Text>
        </View>
    )
}