import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import { View, Text } from "react-native"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import Filter from '../../assets/icons/Filter.svg'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>
                        Orçamentos
                    </Text>
                    <Text style={styles.headerText}>
                        Você tem ? item em rascunho
                    </Text>
                </View>
                <Button title="Novo" />
            </View>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Input placeholder="Título ou cliente" />
                    <View style={styles.filterIcon}>
                        <Filter width={24} height={24} color={COLORS.purpleBase} />
                    </View>
                </View>
            </View>
        </View>
    )
}