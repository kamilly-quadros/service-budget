import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import { View, Text } from 'react-native'
import { QuoteStatus } from '@/types/Status'

interface StatusProps {
    mode: QuoteStatus.SKETCH | QuoteStatus.SENT | QuoteStatus.APPROVED | QuoteStatus.REFUSED
}
export default function Status({ mode }: StatusProps) {
    return (
        <View
            style={
                [styles.status, {
                    backgroundColor:
                        mode == QuoteStatus.SKETCH ? COLORS.gray300 :
                            mode == QuoteStatus.SENT ? COLORS.infoLight :
                                mode == QuoteStatus.APPROVED ? COLORS.successLight : COLORS.dangerLight
                }]
            }
        >
            <View
                style={
                    [styles.statusCircle, {
                        backgroundColor:
                            mode == QuoteStatus.SKETCH ? COLORS.gray400 :
                                mode == QuoteStatus.SENT ? COLORS.infoBase :
                                    mode == QuoteStatus.APPROVED ? COLORS.successBase : COLORS.dangerBase
                    }]
                }
            />
            <Text
                style={
                    [styles.statusText, {
                        color:
                            mode == QuoteStatus.SKETCH ? COLORS.gray500 :
                                mode == QuoteStatus.SENT ? COLORS.infoDark :
                                    mode == QuoteStatus.APPROVED ? COLORS.successDark : COLORS.dangerDark
                    }]
                }
            >
                {mode}
            </Text>
        </View>
    )
}