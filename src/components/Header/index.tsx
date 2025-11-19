import Status from "../Status"
import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from "react-native"
import ChevronLeft from '../../assets/icons/ChevronLeft.svg'

interface HeaderProps {
    id?: number
    status?: string
}
export default function Header({ id, status }: HeaderProps) {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.leftGroup}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeft width={24} height={24} color={COLORS.gray600} />
                </TouchableOpacity>
                <Text style={styles.title}>{`Orçamento ${id ? id : ''}`}</Text>
            </View>
            {status && <Status mode="Enviado" />}
        </View>
    )
}

