import { useState } from "react"
import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import Search from '../../assets/icons/Search.svg'
import { TextInput, TextInputProps, View } from "react-native"

export function Input({ ...rest }: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[
            styles.container,
            { borderColor: isFocused ? COLORS.purpleBase : COLORS.gray300 },
        ]}>
            <Search width={20} height={20} color={isFocused ? COLORS.purpleBase : COLORS.gray600} />
            <TextInput
                style={styles.textInput}
                placeholderTextColor={COLORS.gray500}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
        </View>
    )
}