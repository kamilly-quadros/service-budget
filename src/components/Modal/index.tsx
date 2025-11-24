import React from 'react'
import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import Close from '../../assets/icons/Close.svg';
import { Modal, View, Text, TouchableOpacity } from 'react-native'

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    title: string
    children: React.ReactNode
    footer: React.ReactNode
}
export default function ModalComponent({ modalVisible, setModalVisible, title, children, footer }: ModalProps) {
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
                    {children}
                </View>
                <View style={styles.footer}>
                    {footer}
                </View>
            </View>
        </Modal>
    );
}
