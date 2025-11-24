import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import Edit from '../../assets/icons/Edit.svg'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ServiceProps extends TouchableOpacityProps {
    title: string
    description: string
    price: number
    quantity: number
    canEdit?: boolean
}
export default function Services({ title, description, price, quantity, canEdit = false, ...rest }: ServiceProps) {
    const formattedPrice = price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">{description}</Text>
            </View>
            <View style={styles.priceAndQuantity}>
                <View style={styles.price}>
                    <Text style={styles.symbol}>R$</Text>
                    <Text style={styles.money}>{formattedPrice}</Text>
                </View>
                <Text style={styles.quantity}>{`Qt: ` + quantity}</Text>
            </View>
            {canEdit && <TouchableOpacity {...rest}>
                <Edit width={24} height={24} color={COLORS.purpleBase} />
            </TouchableOpacity>}
        </View>
    )
}