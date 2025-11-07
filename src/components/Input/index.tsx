import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "@/utils/theme";
import Search from '../../assets/icons/Search.svg'

export function Input({ ...rest }: TextInputProps) {
    return (
        <View style={styles.container}>
            <Search width={20} height={20} stroke={COLORS.gray600} />
            <TextInput
                style={styles.textInput}
                placeholderTextColor={COLORS.gray500}
                {...rest}
            />
        </View>
    )
}