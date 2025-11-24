import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import Services from '@/components/Services'
import Shop from '../../assets/icons/Shop.svg'
import Note from '../../assets/icons/Note.svg'
import { RootStackParamList } from '../../../App'
import Credit from '../../assets/icons/Credit.svg'
import { View, Text, ScrollView } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { quoteStorage, QuoteItem } from '@/storage/quoteStorage'

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
export default function Details() {
    const route = useRoute<DetailsRouteProp>();
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
                            {quote?.items.map((service) => (
                                <Services
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
                    <Button mode="Trash" variant="pale" />
                    <Button mode="Copy" variant="pale" />
                    <Button mode="Edit" variant="pale" />
                </View>
                <Button mode="Direction" variant="purple" title="Compartilhar" />
            </View>
        </ScrollView>
    )
}