import { COLORS } from '@/utils/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.gray100,
    },
});
