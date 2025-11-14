import { styles } from "./styles";
import { COLORS } from "@/utils/theme";
import Plus from '../../assets/icons/Plus.svg';
import Check from '../../assets/icons/Check.svg';
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
    mode: 'Plus' | 'Check'
}
export function Button({ title, mode, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            {mode == 'Plus'
                ? <Plus width={24} height={24} color={COLORS.gray100} />
                : <Check width={24} height={24} color={COLORS.gray100} />
            }
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}