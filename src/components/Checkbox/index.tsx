import { useState } from "react";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { COLORS } from "@/utils/theme";

export default function CheckboxComponent() {
    const [isChecked, setChecked] = useState(false)
    return (
        <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? COLORS.purpleBase : undefined}
        />
    )
}