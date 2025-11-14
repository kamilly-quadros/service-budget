import Status from "../Status";
import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "@/utils/theme";
import RadioButton from "../RadioButton";
import CheckboxComponent from "../Checkbox";
import Close from '../../assets/icons/Close.svg';
import { Modal, View, Text, TouchableOpacity } from "react-native";

interface FilterProps {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    title: string
}
export default function ModalComponent({ modalVisible, setModalVisible, title }: FilterProps) {
    return (
        <Modal
            animationType="slide"
            backdropColor="rgba(0,0,0,0.1)"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Close width={24} height={24} color={COLORS.gray600} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.statusBody}>
                        <Text style={styles.subTitle}>
                            Status
                        </Text>
                        <View style={styles.statusContent}>
                            <View style={styles.content}>
                                <CheckboxComponent />
                                <Status mode="Rascunho" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent />
                                <Status mode="Enviado" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent />
                                <Status mode="Aprovado" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent />
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
                                <RadioButton />
                                <View style={styles.status}>
                                    <Text style={styles.orderingText}>
                                        Mais recente
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.ordenationContent}>
                                <RadioButton />
                                <View style={styles.status}>
                                    <Text style={styles.orderingText}>
                                        Mais antigo
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.ordenationContent}>
                                <RadioButton />
                                <View style={styles.status}>
                                    <Text style={styles.orderingText}>
                                        Maior valor
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.ordenationContent}>
                                <RadioButton />
                                <View style={styles.status}>
                                    <Text style={styles.orderingText}>
                                        Menor valor
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Resetar filtros</Text>
                    </TouchableOpacity>
                    <Button title="Aplicar" mode="Check" />
                </View>
            </View>
        </Modal>
    );
}
