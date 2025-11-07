import { styles } from "./styles";
import { COLORS } from "@/utils/theme";
import Plus from '../../assets/icons/Plus.svg';
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}
export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Plus width={24} height={24} color={COLORS.gray100} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}