import React from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { style } from "./style";
import { Input } from "@/src/components/input";
import { Ball } from "@/src/components/ball"
import { Flag } from "@/src/components/flag";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

type PropCard = {
    item: number,
    title: string,
    descricao: string,
    flag: string,
}
const data:Array<PropCard> = [
    {
        item: 0,
        title: "Realizar tarefa de casa",
        descricao: "Páginas 10 a 20 do livro de matemática",
        flag: "Urgente",
    },
    {
        item: 1,
        title: "Comprar mantimentos",
        descricao: "Leite, pão, ovos e frutas",
        flag: "Opcional",
    },
    {
        item: 2,
        title: "Encher o tanque do carro",
        descricao: "Levar o carro para lavar no posto de gasolina",
        flag: "Opcional",
    }
]
export default function List(){

    const _renderCard = (item:PropCard) =>{
        return(
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color="red" />
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descricaoCard}>{item.descricao}</Text>
                        </View>
                    </View>
                    <Flag caption={item.flag} color="red" /> 
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, <Text style={{fontWeight: "bold"}}>Lucas!</Text></Text>
                <View style={style.boxInput}>
                    <Input IconLeft={MaterialIcons} iconLeftName="search" placeholder="Pesquisar"/>
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{marginTop: 40, paddingHorizontal: 30}}
                    keyExtractor={(item, index)=>item.item.toString()}
                    renderItem={({item, index})=>{
                        return(_renderCard(item))
                    }}
                />
            </View>
        </View>
    )
}