import { useState } from "react"
import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import Plus from '../../assets/icons/Plus.svg'
import Minus from '../../assets/icons/Minus.svg'
import Search from '../../assets/icons/Search.svg'
import { TextInput, TextInputProps, View, Text, TouchableOpacity } from "react-native"

interface InputProps extends TextInputProps {
    isSearch?: boolean
    isMultiline?: boolean
    isMoney?: boolean
    isNumber?: boolean
}
export function Input({ isSearch = false, isMultiline = false, isMoney = false, isNumber = false, onChangeText, ...rest }: InputProps) {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const formatMoney = (text: string) => {
        const numeric = text.replace(/\D/g, "");
        if (!numeric) return "";
        const value = (Number(numeric) / 100).toFixed(2);
        return `${value
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    };
    const handleChange = (text: string) => {
        if (isMoney) {
            const formatted = formatMoney(text);
            setValue(formatted);
            onChangeText?.(formatted);
        } else {
            setValue(text);
            onChangeText?.(text);
        }
    };
    const getNumericValue = () => {
        const num = Number(value.replace(/\D/g, ""));
        return isNaN(num) ? 0 : num;
    };
    const increment = () => {
        let num = getNumericValue() + 1;
        if (isMoney) {
            const formatted = formatMoney(String(num));
            setValue(formatted);
            onChangeText?.(formatted);
        } else {
            const newValue = String(num);
            setValue(newValue);
            onChangeText?.(newValue);
        }
    };
    const decrement = () => {
        let num = getNumericValue() - 1;
        if (num < 0) num = 0;
        if (isMoney) {
            const formatted = formatMoney(String(num));
            setValue(formatted);
            onChangeText?.(formatted);
        } else {
            const newValue = String(num);
            setValue(newValue);
            onChangeText?.(newValue);
        }
    };
    return (
        <View style={[
            styles.container,
            {
                borderColor: isFocused ? COLORS.purpleBase : COLORS.gray300,
                height: isMultiline ? 120 : 48,
                borderRadius: isMultiline ? 20 : 999,
                alignItems: isMultiline ? 'flex-start' : 'center',
                paddingVertical: isMultiline ? 10 : 0,
            },
        ]}>
            {isSearch && <Search width={20} height={20} color={isFocused ? COLORS.purpleBase : COLORS.gray600} />}
            {isMoney && <Text style={styles.money}>R$</Text>}
            {isNumber && (
                <TouchableOpacity onPress={decrement}>
                    <Minus width={20} height={20} color={COLORS.purpleBase} />
                </TouchableOpacity>
            )}
            <TextInput
                style={[styles.textInput, { textAlign: isNumber ? 'center' : 'left' }]}
                placeholderTextColor={COLORS.gray500}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                onChangeText={handleChange}
                keyboardType={isMoney || isNumber ? "numeric" : rest.keyboardType}
                multiline={isMultiline}
                textAlignVertical={isMultiline ? "top" : "center"}
                scrollEnabled={false}
                {...rest}
            />
            {isNumber && (
                <TouchableOpacity onPress={increment}>
                    <Plus width={20} height={20} color={COLORS.purpleBase} />
                </TouchableOpacity>
            )}
        </View>
    )
}