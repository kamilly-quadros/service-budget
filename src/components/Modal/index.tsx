import Status from "../Status";
import { useState } from "react";
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
    const [ordering, setOrdering] = useState<string | null>(null);
    const [status, setStatus] = useState({ rascunho: false, enviado: false, aprovado: false, recusado: false, });
    const resetFilters = () => { setStatus({ rascunho: false, enviado: false, aprovado: false, recusado: false, }); setOrdering(null); };
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
                                <CheckboxComponent value={status.rascunho} onValueChange={() => setStatus({ ...status, rascunho: !status.rascunho })} />
                                <Status mode="Rascunho" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent value={status.enviado} onValueChange={() => setStatus({ ...status, enviado: !status.enviado })} />
                                <Status mode="Enviado" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent value={status.aprovado} onValueChange={() => setStatus({ ...status, aprovado: !status.aprovado })} />
                                <Status mode="Aprovado" />
                            </View>
                            <View style={styles.content}>
                                <CheckboxComponent value={status.recusado} onValueChange={() => setStatus({ ...status, recusado: !status.recusado })} />
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
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={resetFilters}>
                        <Text style={styles.buttonText}>Resetar filtros</Text>
                    </TouchableOpacity>
                    <Button title="Aplicar" mode="Check" />
                </View>
            </View>
        </Modal>
    );
}
