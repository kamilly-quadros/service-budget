import { styles } from "./styles"
import { QuoteStatus } from "@/types/Status"
import { View, Text, TouchableOpacity } from "react-native"

interface CardProps {
    title: string
    client: string
    status: QuoteStatus
    price: number
    onPress?: () => void
}
export default function Card({ title, client, status, price, onPress }: CardProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text>{client}</Text>
            </View>
            <View style={styles.status}>
                <View style={styles.statusCircle} />
                <Text>{status}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceLabel}>R$</Text>
                <Text style={styles.priceValue}>{price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    )
}