import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import { View, Text } from "react-native"
import Edit from '../../assets/icons/Edit.svg'

interface ServiceProps {
    title: string
    description: string
    price: number
    quantity: number
}
export default function Services({ title, description, price, quantity }: ServiceProps) {
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
            <Edit width={24} height={24} color={COLORS.purpleBase} />
        </View>
    )
}