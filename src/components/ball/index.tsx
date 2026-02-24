import React from "react";
import {TouchableHighlightProps, TouchableOpacity, Text, View} from 'react-native';
import { style } from "./style";

type Props = TouchableHighlightProps & {
    color: string
}

export function Ball({...rest}: Props){
    return(
        <View style={[style.ball,{borderColor: rest.color||'gray'}]} />
    )
}