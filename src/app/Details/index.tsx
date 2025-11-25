import { styles } from './styles'
import * as Print from 'expo-print'
import Share from 'react-native-share'
import { COLORS } from '@/utils/theme'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import Services from '@/components/Services'
import Shop from '../../assets/icons/Shop.svg'
import Note from '../../assets/icons/Note.svg'
import { RootStackParamList } from '../../../App'
import Credit from '../../assets/icons/Credit.svg'
import { RouteProp, useRoute } from '@react-navigation/native'
import { quoteStorage, QuoteItem } from '@/storage/quoteStorage'
import { View, Text, ScrollView, Alert, Platform, PermissionsAndroid } from 'react-native'

const generateHTML = (quote: QuoteItem, subtotal: number, discountValue: number, total: number, formatMoney: (value: number) => string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>${quote.title}</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      .header { text-align: center; margin-bottom: 20px; }
      .title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
      .client { margin-bottom: 20px; }
      .section { margin-bottom: 20px; }
      .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
      .service { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #f5f5f5; }
      .service-title { font-weight: bold; }
      .service-description { color: #666; margin: 5px 0; }
      .service-price { text-align: right; }
      .total { margin-top: 20px; text-align: right; font-weight: bold; font-size: 18px; }
      .subtotal, .discount { display: flex; justify-content: space-between; margin: 5px 0; }
      .divider { border-top: 1px solid #eee; margin: 10px 0; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1 class="title">${quote.title}</h1>
      <div class="client">
        <p><strong>Cliente:</strong> ${quote.client}</p>
        <p><strong>Data:</strong> ${new Date(quote.createdAt).toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
    <div class="section">
      <h2 class="section-title">Serviços</h2>
      ${quote.items.map(item => `
        <div class="service">
          <div class="service-title">${item.title} x${item.quantity}</div>
          ${item.description ? `<div class="service-description">${item.description}</div>` : ''}
          <div class="service-price">${formatMoney(item.price * item.quantity)}</div>
        </div>
      `).join('')}
    </div>
    <div class="section">
      <div class="subtotal">
        <span>Subtotal:</span>
        <span>${formatMoney(subtotal)}</span>
      </div>
      ${quote.discountPct ? `
        <div class="discount">
          <span>Desconto (${quote.discountPct}%):</span>
          <span>-${formatMoney(discountValue)}</span>
        </div>
      ` : ''}
      <div class="divider"></div>
      <div class="total">
        <span>Total:</span>
        <span>${formatMoney(total)}</span>
      </div>
    </div>
  </body>
  </html>
`;
async function requestStoragePermission() {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Permissão de Armazenamento',
                    message: 'O aplicativo precisa de permissão para salvar o PDF.',
                    buttonNeutral: 'Perguntar depois',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'OK',
                },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    }
    return true;
}
type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
export default function Details({ navigation }: any) {
    const route = useRoute<DetailsRouteProp>()
    const { id } = route.params;
    const [quote, setQuote] = useState<QuoteItem | null>(null)
    const subtotal = quote?.items.reduce((acc, item) => { return acc + item.price * item.quantity; }, 0) ?? 0;
    const discountValue = subtotal * ((quote?.discountPct ?? 0) / 100);
    const total = subtotal - discountValue;
    function formatDate(dateString?: string) {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    }
    function formatMoney(value: number) {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }
    async function handleCopy() {
        if (!quote) return
        const newQuote = {
            id: String(Date.now()),
            title: quote.title,
            client: quote.client,
            items: quote.items,
            discountPct: quote.discountPct,
            status: quote.status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        await quoteStorage.add(newQuote);
        Alert.alert("", "Cotação duplicada com sucesso", [{ text: "OK", onPress: () => navigation.navigate("Home") }]);
    }
    async function handleDelete() {
        Alert.alert(
            "Excluir cotação",
            "Tem certeza que deseja excluir esta cotação?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        await quoteStorage.remove(id)
                        navigation.goBack()
                        setTimeout(() => {
                            Alert.alert('Sucesso', 'Cotação excluída com sucesso')
                        }, 100)
                    }
                }
            ]
        )
    }
    useEffect(() => {
        async function loadQuote() {
            if (id) {
                const data = await quoteStorage.getById(id)
                setQuote(data)
            }
        }
        loadQuote()
    }, [id])
    return (
        <ScrollView style={styles.container}>
            <Header id={id} />
            <View style={styles.content}>
                <View style={styles.info}>
                    <View style={styles.projectInfoContainer}>
                        <View style={styles.projectIconContainer}>
                            <Shop width={24} height={24} color={COLORS.purpleBase} />
                        </View>
                        <Text style={styles.title}>{quote?.title}</Text>
                    </View>
                    <View style={styles.clientInfoContainer}>
                        <View style={styles.heading}>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Cliente</Text>
                                <Text style={styles.title3}>{quote?.client}</Text>
                            </View>
                        </View>
                        <View style={styles.heading}>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Criado em</Text>
                                <Text style={styles.title3}>{formatDate(quote?.createdAt)}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Atualizado em</Text>
                                <Text style={styles.title3}>{formatDate(quote?.updatedAt)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.services}>
                    <View style={styles.list}>
                        <View style={styles.heading2}>
                            <Note width={16} height={16} color={COLORS.purpleBase} />
                            <Text style={styles.title4}>Serviços inclusos</Text>
                        </View>
                        <View style={styles.servicesListContainer}>
                            {quote?.items.map((service, index) => (
                                <Services
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    quantity={service.quantity}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.price3}>
                        <View style={styles.projectIconContainer}>
                            <Credit width={24} height={24} color={COLORS.purpleBase} />
                        </View>
                        <View style={styles.services}>
                            <View style={styles.text2}>
                                <View style={styles.subtotalContainer}>
                                    <Text style={styles.title7}>Subtotal</Text>
                                    <Text style={styles.title8}>
                                        {formatMoney(subtotal)}
                                    </Text>
                                </View>
                                <View style={styles.subtotalContainer}>
                                    <View style={styles.discountInfoContainer}>
                                        <Text style={styles.title7}>Desconto</Text>
                                        {quote?.discountPct ? (
                                            <View style={styles.tag}>
                                                <Text style={styles.title9}>
                                                    {quote.discountPct}% off
                                                </Text>
                                            </View>
                                        ) : null}
                                    </View>
                                    <Text style={styles.title9}>
                                        - {formatMoney(discountValue)}
                                    </Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.subtotalContainer}>
                                    <Text style={styles.title3}>Investimento total</Text>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.title}>
                                                {total.toLocaleString("pt-BR", {
                                                    minimumFractionDigits: 2
                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.discountInfoContainer}>
                    <Button mode="Trash" variant="pale" onPress={handleDelete} />
                    <Button mode="Copy" variant="pale" onPress={handleCopy} />
                    <Button mode="Edit" variant="pale" onPress={() => navigation.navigate('CreationAndEdition', { id })} />
                </View>
                <Button
                    mode="Direction"
                    variant="purple"
                    title="Compartilhar"
                    onPress={async () => {
                        if (!quote) return;
                        try {
                            if (Platform.OS === 'android') {
                                const hasPermission = await requestStoragePermission();
                                if (!hasPermission) {
                                    Alert.alert('Permissão necessária', 'É necessária permissão para salvar e compartilhar o PDF.');
                                    return;
                                }
                            }
                            const html = generateHTML(
                                quote,
                                subtotal,
                                discountValue,
                                total,
                                formatMoney
                            );
                            const { uri } = await Print.printToFileAsync({
                                html,
                                base64: false,
                            });
                            const shareOptions = {
                                title: `Compartilhar Orçamento - ${quote.title}`,
                                url: Platform.OS === 'android' ? `file://${uri}` : uri,
                                type: 'application/pdf',
                                failOnCancel: false,
                            };
                            await Share.open(shareOptions);
                        } catch (error) {
                            console.error('Error sharing PDF:', error);
                            Alert.alert('Erro', 'Não foi possível compartilhar o orçamento. Por favor, tente novamente.');
                        }
                    }}
                />
            </View>
        </ScrollView>
    )
}