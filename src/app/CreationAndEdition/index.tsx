import { useState } from 'react'
import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import Status from '@/components/Status'
import Header from '@/components/Header'
import { Input } from '@/components/Input'
import Services from '@/components/Services'
import Tag from '../../assets/icons/Tag.svg'
import { Button } from '@/components/Button'
import { QuoteStatus } from '@/types/Status'
import Shop from '../../assets/icons/Shop.svg'
import Note from '../../assets/icons/Note.svg'
import ModalComponent from '@/components/Modal'
import Credit from '../../assets/icons/Credit.svg'
import RadioButton from '@/components/RadioButton'
import { quoteStorage } from "@/storage/quoteStorage"
import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView, Alert } from 'react-native'

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
}
export default function CreationAndEdition() {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [client, setClient] = useState('');
    const [discount, setDiscount] = useState('');
    const [serviceQty, setServiceQty] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');
    const [status, setStatus] = useState<QuoteStatus>()
    const [serviceTitle, setServiceTitle] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [services, setServices] = useState<ServiceItem[]>([]);
    const discountPercentage = Number(discount.replace(',', '.')) || 0;
    const [editingServiceId, setEditingServiceId] = useState<number | null>(null);
    const subtotal = services.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountValue = subtotal * (discountPercentage / 100);
    const totalValue = subtotal - discountValue;
    function formatCurrency(value: number) {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    function parseMoney(value: string) {
        if (!value) return 0;
        const cleaned = value
            .replace(/[^\d,.-]/g, "")
            .replace(/\./g, "")
            .replace(",", ".");
        return Number(cleaned);
    }
    function handleEdit(service: ServiceItem) {
        setEditingServiceId(service.id);
        setServiceTitle(service.title);
        setServiceDesc(service.description);
        setServicePrice(String(service.price).replace('.', ','));
        setServiceQty(String(service.quantity));
        setModalVisible(true);
    }
    function handleDeleteService() {
        if (!editingServiceId) return;
        setServices(prev => prev.filter(item => item.id !== editingServiceId));
        setEditingServiceId(null);
        setServiceTitle('');
        setServiceDesc('');
        setServicePrice('');
        setServiceQty('');
        setModalVisible(false);
    }
    function handleSaveService() {
        if (!serviceTitle || !servicePrice || !serviceQty) return;
        const formattedService = {
            id: editingServiceId ?? Date.now(),
            title: serviceTitle,
            description: serviceDesc,
            price: parseMoney(servicePrice),
            quantity: Number(serviceQty)
        };
        if (editingServiceId) {
            setServices(prev =>
                prev.map(item =>
                    item.id === editingServiceId ? formattedService : item
                )
            );
        } else {
            setServices(prev => [...prev, formattedService]);
        }
        setEditingServiceId(null);
        setServiceTitle('');
        setServiceDesc('');
        setServicePrice('');
        setServiceQty('');
        setModalVisible(false);
    }
    async function handleSaveQuote() {
        if (!title || !client || services.length === 0 || !status) {
            console.warn("Preencha todos os campos");
            return;
        }
        const newQuote = {
            id: String(Date.now()),
            title,
            client,
            items: services,
            discountPct: discountPercentage,
            status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        try {
            await quoteStorage.add(newQuote);
            Alert.alert("Sucesso", "Cotação salva com sucesso", [{ text: "OK", onPress: () => navigation.goBack() }]);
        } catch (error) {
            console.error("Erro ao salvar orçamento:", error);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Shop width={24} height={24} color={COLORS.purpleBase} />
                        <Text style={styles.cardTitle}>Informações gerais</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <Input placeholder="Título" value={title} onChangeText={setTitle} />
                        <Input placeholder="Cliente" value={client} onChangeText={setClient} />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Tag width={24} height={24} color={COLORS.purpleBase} />
                        <Text style={styles.cardTitle}>Status</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.list}>
                            <View style={styles.option}>
                                <RadioButton selected={status == QuoteStatus.SKETCH} onPress={() => setStatus(QuoteStatus.SKETCH)} />
                                <Status mode={QuoteStatus.SKETCH} />
                            </View>
                            <View style={styles.option}>
                                <RadioButton selected={status == QuoteStatus.APPROVED} onPress={() => setStatus(QuoteStatus.APPROVED)} />
                                <Status mode={QuoteStatus.APPROVED} />
                            </View>
                        </View>
                        <View style={styles.list}>
                            <View style={styles.option}>
                                <RadioButton selected={status == QuoteStatus.SENT} onPress={() => setStatus(QuoteStatus.SENT)} />
                                <Status mode={QuoteStatus.SENT} />
                            </View>
                            <View style={styles.option}>
                                <RadioButton selected={status == QuoteStatus.REFUSED} onPress={() => setStatus(QuoteStatus.REFUSED)} />
                                <Status mode={QuoteStatus.REFUSED} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Note width={24} height={24} color={COLORS.purpleBase} />
                        <Text style={styles.cardTitle}>Serviços inclusos</Text>
                    </View>
                    <View style={styles.cardContent}>
                        {services.map(item => (
                            <Services
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                                onPress={() => handleEdit(item)}
                            />
                        ))}
                        <Button title="Adicionar serviço" mode="Plus" variant="pale" onPress={() => setModalVisible(true)} />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Credit width={24} height={24} color={COLORS.purpleBase} />
                        <Text style={styles.cardTitle}>Investimento</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={styles.item}>
                            <Text style={styles.contentTitle}>Subtotal</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.itens}>{`${services.length} itens`}</Text>
                                <View style={styles.priceInfo}>
                                    <Text style={styles.symbol}>R$</Text>
                                    <Text style={styles.price}>{formatCurrency(subtotal)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.contentTitle}>Desconto</Text>
                                <Input placeholder='0' isPercentage value={discount} onChangeText={setDiscount} />
                            </View>
                            {discountValue > 0 && (
                                <View style={styles.priceContainer}>
                                    <View style={styles.priceDiscount}>
                                        <Text style={[styles.symbol, styles.red]}>- R$</Text>
                                        <Text style={[styles.price, styles.red]}>{formatCurrency(discountValue)}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Valor total</Text>
                        <View>
                            {discountValue > 0 && (
                                <Text style={[styles.line, styles.itens]}>
                                    R$ {formatCurrency(subtotal)}
                                </Text>
                            )}
                            <View style={styles.totalPrice}>
                                <Text style={styles.symbol}>R$</Text>
                                <Text style={styles.total}>{formatCurrency(totalValue)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <Button title="Cancelar" mode="none" variant="pale" onPress={() => navigation.goBack()} />
                    <Button title="Salvar" mode="Check" variant="purple" onPress={handleSaveQuote} />
                </View>
            </View>
            <ModalComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title='Serviço'
                footer={
                    <>
                        {editingServiceId && (
                            <Button
                                mode="Trash"
                                variant="pale"
                                onPress={handleDeleteService}
                            />
                        )}
                        <Button
                            title="Salvar"
                            mode="Check"
                            variant="purple"
                            onPress={handleSaveService}
                        />
                    </>
                }
            >
                <>
                    <Input placeholder='Título' value={serviceTitle} onChangeText={setServiceTitle} />
                    <Input placeholder='Descrição' isMultiline numberOfLines={10} value={serviceDesc} onChangeText={setServiceDesc} />
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 0.7 }}>
                            <Input placeholder='0,00' isMoney value={servicePrice} onChangeText={setServicePrice} />
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Input placeholder='0' isNumber value={serviceQty} onChangeText={setServiceQty} />
                        </View>
                    </View>
                </>
            </ModalComponent>
        </ScrollView>
    )
}