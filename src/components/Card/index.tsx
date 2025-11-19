import { styles } from "./styles"
import { RootStackParamList } from "../../../App"
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Card() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('Details') }}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Desenvolvimento de aplicativo de loja online</Text>
                <Text>Soluções Tecnológicas Beta</Text>
            </View>
            <View style={styles.status}>
                <View style={styles.statusCircle} />
                <Text>Aprovado</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceLabel}>R$</Text>
                <Text style={styles.priceValue}>22.300,00</Text>
            </View>
        </TouchableOpacity>
    )
}