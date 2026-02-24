import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { forwardRef, Fragment, Ref } from "react";
import {
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View, StyleProp, TextStyle
} from "react-native";
import { style } from "./style";

type IconComponent =
	| React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
	| React.ComponentType<React.ComponentProps<typeof FontAwesome>>
	| React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
	IconLeft?: IconComponent;
	IconRight?: IconComponent;
	iconLeftName?: string;
	iconRightName?: string;
	title?: string;
	onIconLeftPress?: () => void;
	onIconRightPress?: () => void;
	height?: number;
	labelStyle?:StyleProp<TextStyle>;
};
export const Input = forwardRef((Props: Props, ref: Ref<TextInput>) => {
	const {
		IconLeft,
		IconRight,
		iconLeftName,
		iconRightName,
		title,
		onIconLeftPress,
		onIconRightPress,
		height,
		labelStyle,
		...rest
	} = Props;

	const calculateSizeWidth = () => {
		if (IconLeft && IconRight) {
			return "80%";
		} else if (IconLeft || IconRight) {
			return "90%";
		} else {
			return "100%";
		}
	};
    const calculateSizePaddingLeft = () => {
		if (IconLeft && IconRight) {
			return 5;
		} else if (IconLeft || IconRight) {
			return 10;
		} else {
			return 20;
		}
	};
	return (
		<Fragment>
			<Text style={[style.titleInput, labelStyle]}>{title}</Text>
			<View style={[style.boxInput, {paddingLeft: calculateSizePaddingLeft(), height: height || 40}]}>
				{IconLeft && iconLeftName && (
					<TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
						<IconLeft
							name={iconLeftName as any}
							size={20}
							color="#7a7a7a"
							style={style.Icon}
						/>
					</TouchableOpacity>
				)}
				<TextInput style={[style.input, {width:calculateSizeWidth(), height: "100%"}]} {...rest} underlineColorAndroid="transparent" />
				{IconRight && iconRightName && (
					<TouchableOpacity onPress={onIconRightPress} style={style.Button}>
						<IconRight
							name={iconRightName as any}
							size={20}
							color="#7a7a7a"
							style={style.Icon}
						/>
					</TouchableOpacity>
				)}
			</View>
		</Fragment>
	);
});
