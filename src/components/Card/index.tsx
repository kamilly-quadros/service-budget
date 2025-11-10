import { styles } from "./styles"
import { View,Text } from "react-native"

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Desenvolvimento de aplicativo de loja online</Text>
                <Text>Soluções Tecnológicas Beta</Text>
            </View>
            <View style={styles.status}>
                <View style={styles.statusCircle}/>
                <Text>Aprovado</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceLabel}>R$</Text>
                <Text style={styles.priceValue}>22.300,00</Text>
            </View>
        </View>
    )
}