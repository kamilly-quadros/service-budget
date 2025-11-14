import { styles } from "./styles";
import { COLORS } from "@/utils/theme";
import { View, Text } from "react-native";

interface StatusProps {
    mode: 'Rascunho' | 'Enviado' | 'Aprovado' | 'Recusado'
}
export default function Status({ mode }: StatusProps) {
    return (
        <View
            style={
                [styles.status, {
                    backgroundColor:
                        mode == 'Rascunho' ? COLORS.gray300 :
                            mode == 'Enviado' ? COLORS.infoLight :
                                mode == 'Aprovado' ? COLORS.successLight : COLORS.dangerLight
                }]
            }
        >
            <View
                style={
                    [styles.statusCircle, {
                        backgroundColor:
                            mode == 'Rascunho' ? COLORS.gray400 :
                                mode == 'Enviado' ? COLORS.infoBase :
                                    mode == 'Aprovado' ? COLORS.successBase : COLORS.dangerBase
                    }]
                }
            />
            <Text
                style={
                    [styles.statusText, {
                        color:
                            mode == 'Rascunho' ? COLORS.gray500 :
                                mode == 'Enviado' ? COLORS.infoDark :
                                    mode == 'Aprovado' ? COLORS.successDark : COLORS.dangerDark
                    }]
                }
            >
                {mode}
            </Text>
        </View>
    )
}