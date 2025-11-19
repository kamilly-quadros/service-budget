import { styles } from "./styles"
import { COLORS } from "@/utils/theme"
import Header from "@/components/Header"
import { Button } from "@/components/Button"
import Shop from '../../assets/icons/Shop.svg'
import Note from '../../assets/icons/Note.svg'
import Credit from '../../assets/icons/Credit.svg'
import { View, Text, ScrollView } from "react-native"

export default function Details() {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.info}>
                    <View style={styles.projectInfoContainer}>
                        <View style={styles.projectIconContainer}>
                            <Shop width={24} height={24} color={COLORS.purpleBase} />
                        </View>
                        <Text style={styles.title}>Desenvolvimento de aplicativo de loja online</Text>
                    </View>
                    <View style={styles.clientInfoContainer}>
                        <View style={styles.heading}>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Cliente</Text>
                                <Text style={styles.title3}>Soluções Tecnológicas Beta</Text>
                            </View>
                        </View>
                        <View style={styles.heading}>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Criado em</Text>
                                <Text style={styles.title3}>22/08/2024</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.title2}>Atualizado em</Text>
                                <Text style={styles.title3}>25/08/2024</Text>
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
                            <View style={styles.listItemType}>
                                <View style={styles.text2}>
                                    <Text style={styles.text4}>Design de interfaces</Text>
                                    <Text style={styles.title4}>Criação de wireframes e protótipos de alta fidalidade</Text>
                                </View>
                                <View style={styles.price}>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.text}>3.847,50</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.title2}>Qt: 1</Text>
                                </View>
                            </View>
                            <View style={styles.listItemType}>
                                <View style={styles.text2}>
                                    <Text style={styles.text4}>Desenvolvimento front-end</Text>
                                    <Text style={styles.title4}>Criação de interfaces de usuário interativas</Text>
                                </View>
                                <View style={styles.price}>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.text}>3.847,50</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.title2}>Qt: 1</Text>
                                </View>
                            </View>
                            <View style={styles.listItemType}>
                                <View style={styles.text2}>
                                    <Text style={styles.text4}>Desenvolvimento back-end</Text>
                                    <Text style={styles.title4}>Implementação de servidor, banco de dados e APIs</Text>
                                </View>
                                <View style={styles.price}>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.text}>3.847,50</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.title2}>Qt: 1</Text>
                                </View>
                            </View>
                            <View style={styles.listItemType}>
                                <View style={styles.text2}>
                                    <Text style={styles.text4}>Implantação e suporte</Text>
                                    <Text style={styles.title4}>Publicação nas lojas de aplicativos e suporte técnico</Text>
                                </View>
                                <View style={styles.price}>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.text}>3.847,50</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.title2}>Qt: 1</Text>
                                </View>
                            </View>
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
                                    <Text style={styles.title8}>R$ 4.050,00</Text>
                                </View>
                                <View style={styles.subtotalContainer}>
                                    <View style={styles.discountInfoContainer}>
                                        <Text style={styles.title7}>Desconto</Text>
                                        <View style={styles.tag}>
                                            <Text style={styles.title9}>5% off</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.title9}>- R$ 200,00</Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.subtotalContainer}>
                                    <Text style={styles.title3}>Investimento total</Text>
                                    <View style={styles.info2}>
                                        <View style={styles.price2}>
                                            <Text style={styles.title5}>R$</Text>
                                            <Text style={styles.title}>3.847,50</Text>
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