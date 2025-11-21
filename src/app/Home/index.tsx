import { styles } from "./styles"
import Card from '@/components/Card'
import { COLORS } from '@/utils/theme'
import Status from '@/components/Status'
import { Input } from '@/components/Input'
import { QuoteStatus } from '@/types/Status'
import { Button } from '@/components/Button'
import { useState, useCallback } from 'react'
import ModalComponent from '@/components/Modal'
import RadioButton from '@/components/RadioButton'
import CheckboxComponent from '@/components/Checkbox'
import { useFocusEffect } from '@react-navigation/native'
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import { quoteStorage, QuoteItem } from '@/storage/quoteStorage'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

export default function Home({ navigation }: any) {
    const [search, setSearch] = useState("");
    const [quotes, setQuotes] = useState<QuoteItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [ordering, setOrdering] = useState<string | null>(null);
    const draftCount = quotes.filter(q => q.status === QuoteStatus.SKETCH).length;
    const filteredQuotes = quotes.filter(q => q.title.toLowerCase().includes(search.toLowerCase()));
    const [status, setStatus] = useState({ rascunho: false, enviado: false, aprovado: false, recusado: false, });
    const resetFilters = () => {
        setStatus({ rascunho: false, enviado: false, aprovado: false, recusado: false });
        setOrdering(null);
        setModalVisible(false);
    };
    function getTotalPrice(quote: QuoteItem) {
        const subtotal = quote.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        const discountValue = subtotal * (quote.discountPct / 100);
        return subtotal - discountValue;
    }
    useFocusEffect(
        useCallback(() => {
            async function loadQuotes() {
                const data = await quoteStorage.get();
                setQuotes(data);
            }
            loadQuotes();
        }, [])
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>
                        Orçamentos
                    </Text>
                    {draftCount > 0 && (
                        <Text style={styles.headerText}>
                            Você tem {draftCount} {draftCount === 1 ? "item" : "itens"} em rascunho
                        </Text>
                    )}
                </View>
                <Button title="Novo" mode="Plus" onPress={() => navigation.navigate('CreationAndEdition')} variant="purple" />
            </View>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Input placeholder="Título ou cliente" isSearch value={search} onChangeText={setSearch} />
                    <TouchableOpacity style={styles.filterIcon} onPress={() => setModalVisible(!modalVisible)}>
                        <FilterIcon width={24} height={24} color={COLORS.purpleBase} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={filteredQuotes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            client={item.client}
                            status={item.status}
                            price={getTotalPrice(item)}
                            onPress={() =>
                                navigation.navigate('CreationAndEdition', { id: item.id })
                            }
                        />
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.empty}>Nenhum item aqui.</Text>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
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
                            <Status mode={QuoteStatus.SKETCH} />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.enviado}
                                onValueChange={() => setStatus({ ...status, enviado: !status.enviado })}
                            />
                            <Status mode={QuoteStatus.SENT} />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.aprovado}
                                onValueChange={() => setStatus({ ...status, aprovado: !status.aprovado })}
                            />
                            <Status mode={QuoteStatus.APPROVED} />
                        </View>
                        <View style={styles.statusBox}>
                            <CheckboxComponent
                                value={status.recusado}
                                onValueChange={() => setStatus({ ...status, recusado: !status.recusado })}
                            />
                            <Status mode={QuoteStatus.REFUSED} />
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