import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native"
import ChevronLeft from '../../assets/icons/ChevronLeft.svg'

export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeft width={24} height={24} color={COLORS.gray600} />
            </TouchableOpacity>
            <Text style={styles.title}>Orçamento</Text>
        </View>
    )
}
