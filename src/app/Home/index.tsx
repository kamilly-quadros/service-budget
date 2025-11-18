import { useState } from 'react'
import { styles } from "./styles"
import Card from '@/components/Card'
import { COLORS } from '@/utils/theme'
import Status from '@/components/Status'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import ModalComponent from '@/components/Modal'
import RadioButton from '@/components/RadioButton'
import CheckboxComponent from '@/components/Checkbox'
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

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
export default function Home({ navigation }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [ordering, setOrdering] = useState<string | null>(null);
    const [status, setStatus] = useState({ rascunho: false, enviado: false, aprovado: false, recusado: false, });
    const resetFilters = () => {
        setStatus({ rascunho: false, enviado: false, aprovado: false, recusado: false, }); setOrdering(null); setModalVisible(!modalVisible)
    };
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
                <Button title="Novo" mode="Plus" onPress={() => navigation.navigate('CreationAndEdition')} variant="purple" />
            </View>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Input placeholder="Título ou cliente" isSearch />
                    <TouchableOpacity style={styles.filterIcon} onPress={() => setModalVisible(!modalVisible)}>
                        <FilterIcon width={24} height={24} color={COLORS.purpleBase} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Card />}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
            <ModalComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title="Filtrar e ordenar"
                footer={
                    <>
                        <Button title="Resetar filtros" mode="none" variant="pale" onPress={resetFilters} />
                        <Button title="Aplicar" mode="Check" variant="purple" />
                    </>
                }
            >
                <View style={styles.statusBody}>
                    <Text style={styles.subTitle}>
                        Status
                    </Text>
                    <View style={styles.statusContent}>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.rascunho}
                                onValueChange={() => setStatus({ ...status, rascunho: !status.rascunho })}
                            />
                            <Status mode="Rascunho" />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.enviado}
                                onValueChange={() => setStatus({ ...status, enviado: !status.enviado })}
                            />
                            <Status mode="Enviado" />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.aprovado}
                                onValueChange={() => setStatus({ ...status, aprovado: !status.aprovado })}
                            />
                            <Status mode="Aprovado" />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.recusado}
                                onValueChange={() => setStatus({ ...status, recusado: !status.recusado })}
                            />
                            <Status mode="Recusado" />
                        </View>
                    </View>
                </View>
                <View style={styles.statusBody}>
                    <Text style={styles.subTitle}>
                        Ordenação
                    </Text>
                    <View style={styles.statusContent}>
                        <View style={styles.ordenationContent}>
                            <RadioButton selected={ordering === "recent"} onPress={() => setOrdering("recent")} />
                            <View style={styles.status}>
                                <Text style={styles.orderingText}>
                                    Mais recente
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ordenationContent}>
                            <RadioButton selected={ordering === "old"} onPress={() => setOrdering("old")} />
                            <View style={styles.status}>
                                <Text style={styles.orderingText}>
                                    Mais antigo
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ordenationContent}>
                            <RadioButton selected={ordering === "high"} onPress={() => setOrdering("high")} />
                            <View style={styles.status}>
                                <Text style={styles.orderingText}>
                                    Maior valor
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ordenationContent}>
                            <RadioButton selected={ordering === "low"} onPress={() => setOrdering("low")} />
                            <View style={styles.status}>
                                <Text style={styles.orderingText}>
                                    Menor valor
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ModalComponent>
        </View>
    )
}