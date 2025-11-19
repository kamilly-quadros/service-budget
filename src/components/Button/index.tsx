import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import Plus from '../../assets/icons/Plus.svg'
import Copy from '../../assets/icons/Copy.svg'
import Edit from '../../assets/icons/Edit.svg'
import Check from '../../assets/icons/Check.svg'
import Trash from '../../assets/icons/Trash.svg'
import Direction from '../../assets/icons/Direction.svg'
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    title?: string
    mode: 'Plus' | 'Check' | 'Trash' | 'Copy' | 'Edit' | 'Direction' | 'none'
    variant: 'purple' | 'pale'
}
export function Button({ title, mode, variant, ...rest }: Props) {
    return (
        <TouchableOpacity style={[styles.container, variant == 'purple' ? styles.purple : styles.pale]} activeOpacity={0.8} {...rest}>
            {mode == 'Plus'
                ? <Plus width={24} height={24} color={variant == 'purple' ? COLORS.gray100 : COLORS.purpleBase} />
                : mode == 'Check'
                    ? <Check width={24} height={24} color={COLORS.gray100} />
                    : mode == 'Trash'
                        ? <Trash width={24} height={24} color={COLORS.dangerBase} />
                        : mode == 'Copy'
                            ? <Copy width={24} height={24} color={COLORS.purpleBase} />
                            : mode == 'Edit'
                                ? <Edit width={24} height={24} color={COLORS.purpleBase} />
                                : mode == 'Direction'
                                    ? <Direction width={24} height={24} color='white' />
                                    : null
            }
            {title && <Text style={[styles.title, { color: variant == 'purple' ? COLORS.gray100 : COLORS.purpleBase }]}>{title}</Text>}
        </TouchableOpacity>
    )
}