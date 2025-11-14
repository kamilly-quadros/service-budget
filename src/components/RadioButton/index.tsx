import { useState } from "react";
import { styles } from "./styles";
import { COLORS } from "@/utils/theme";
import { Pressable, View } from "react-native";

export default function RadioButton() {
    const [isChecked, setChecked] = useState(false)
    return (
        <Pressable onPress={() => setChecked(!isChecked)}>
            <View style={[
                styles.radioOuter,
                {
                    backgroundColor: isChecked ? COLORS.purpleBase : "transparent",
                    borderColor: isChecked ? COLORS.purpleBase : COLORS.gray400
                }
            ]}>
                {isChecked && (<View style={styles.radioInner} />)}
            </View>
        </Pressable>
    );
}
