import { useState } from 'react'
import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import Status from '@/components/Status'
import Header from '@/components/Header'
import { Input } from '@/components/Input'
import Services from '@/components/Services'
import Tag from '../../assets/icons/Tag.svg'
import { Button } from '@/components/Button'
import Shop from '../../assets/icons/Shop.svg'
import Note from '../../assets/icons/Note.svg'
import Credit from '../../assets/icons/Credit.svg'
import RadioButton from '@/components/RadioButton'
import { View, Text, ScrollView } from 'react-native'

export default function CreationAndEdition() {
    const [status, setStatus] = useState('')
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
                        <Input placeholder="Título" />
                        <Input placeholder="Cliente" />
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
                                <RadioButton selected={status == 'rascunho'} onPress={() => setStatus('rascunho')} />
                                <Status mode="Rascunho" />
                            </View>
                            <View style={styles.option}>
                                <RadioButton selected={status == 'aprovado'} onPress={() => setStatus('aprovado')} />
                                <Status mode="Aprovado" />
                            </View>
                        </View>
                        <View style={styles.list}>
                            <View style={styles.option}>
                                <RadioButton selected={status == 'enviado'} onPress={() => setStatus('enviado')} />
                                <Status mode="Enviado" />
                            </View>
                            <View style={styles.option}>
                                <RadioButton selected={status == 'recusado'} onPress={() => setStatus('recusado')} />
                                <Status mode="Recusado" />
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
                        <Services title="Design de interfaces" description="Criação de wireframes e protótipos" price={3847.50} quantity={1} />
                        <Services title="Implantação e suporte" description="Publicação nas lojas de aplicativo" price={3847.50} quantity={1} />
                        <Button title="Adicionar serviço" mode="Plus" variant="pale" />
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
                                <Text style={styles.itens}>8 itens</Text>
                                <View style={styles.priceInfo}>
                                    <Text style={styles.symbol}>R$</Text>
                                    <Text style={styles.price}>3.847,50</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.contentTitle}>Desconto</Text>
                                <View style={styles.discount}>
                                    <Text style={styles.discountValue}>8</Text>
                                    <Text style={styles.discountSymbol}>%</Text>
                                </View>
                            </View>
                            <View style={styles.priceContainer}>
                                <View style={styles.priceDiscount}>
                                    <Text style={[styles.symbol, styles.red]}>- R$</Text>
                                    <Text style={[styles.price, styles.red]}>200,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Valor total</Text>
                        <View>
                            <Text style={[styles.line, styles.itens]}>RS 4.050,00</Text>
                            <View style={styles.totalPrice}>
                                <Text style={styles.symbol}>R$</Text>
                                <Text style={styles.total}>3.847,50</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <Button title="Cancelar" mode="none" variant="pale" />
                    <Button title="Salvar" mode="Check" variant="purple" />
                </View>
            </View>
        </ScrollView>
    )
}