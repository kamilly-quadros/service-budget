import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import { Pressable, View } from 'react-native'
interface RadioButtonProps {
    selected: boolean;
    onPress: () => void;
}
export default function RadioButton({ selected, onPress }: RadioButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <View
                style={[
                    styles.radioOuter,
                    {
                        backgroundColor: selected ? COLORS.purpleBase : "transparent",
                        borderColor: selected ? COLORS.purpleBase : COLORS.gray400,
                    },
                ]}
            >
                {selected && <View style={styles.radioInner} />}
            </View>
        </Pressable>
    );
}
