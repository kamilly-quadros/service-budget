import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import Plus from '../../assets/icons/Plus.svg'
import Check from '../../assets/icons/Check.svg'
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    title: string
    mode: 'Plus' | 'Check' | 'none'
    variant: 'purple' | 'pale'
}
export function Button({ title, mode, variant, ...rest }: Props) {
    return (
        <TouchableOpacity style={[styles.container, variant == 'purple' ? styles.purple : styles.pale]} activeOpacity={0.8} {...rest}>
            {mode == 'Plus'
                ? <Plus width={24} height={24} color={variant == 'purple' ? COLORS.gray100 : COLORS.purpleBase} />
                : mode == 'Check'
                    ? <Check width={24} height={24} color={COLORS.gray100} />
                    : null
            }
            <Text style={[styles.title, { color: variant == 'purple' ? COLORS.gray100 : COLORS.purpleBase }]}>{title}</Text>
        </TouchableOpacity>
    )
}