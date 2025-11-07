import { styles } from "./styles";
import { View, Text } from "react-native";

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
            </View>
        </View>
    )
}