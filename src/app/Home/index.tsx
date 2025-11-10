import { styles } from "./styles"
import Card from "@/components/Card"
import { COLORS } from "@/utils/theme"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import Filter from '../../assets/icons/Filter.svg'
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { DrawerRoutesProps } from "@/routes/DrawerRoutes"

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
// const DATA = undefined;
export default function Home({navigation}:DrawerRoutesProps<"filter">) {
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
                <Button title="Novo" onPress={()=>navigation.toggleDrawer()}/>
            </View>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Input placeholder="Título ou cliente" />
                    <TouchableOpacity style={styles.filterIcon}>
                        <Filter width={24} height={24} color={COLORS.purpleBase} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({item})=><Card/>}
                    keyExtractor={item=>item.id}
                    ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </View>
    )
}