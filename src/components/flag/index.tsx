import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import { style } from "./style";

type Props = {
    caption: string,
    color: string,
    selected: boolean,
}

export function Flag({...rest}: Props){
    return(
        <TouchableOpacity 
            style={[style.flag, 
            {backgroundColor: rest?.color},
            rest?.selected && {borderWidth:2}
        ]}>
            <Text style={style.caption}>{rest.caption}</Text>
        </TouchableOpacity>
    )
}