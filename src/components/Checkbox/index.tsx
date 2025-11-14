import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { COLORS } from "@/utils/theme";

interface CheckboxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}
export default function CheckboxComponent({ value, onValueChange }: CheckboxProps) {
    return (
        <Checkbox
            style={styles.checkbox}
            value={value}
            onValueChange={onValueChange}
            color={value ? COLORS.purpleBase : undefined}
        />
    )
}