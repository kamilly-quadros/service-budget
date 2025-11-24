import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/utils/theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    header: {
        padding: 20,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: FONTS.sm,
        fontWeight: 'bold'
    },
    body: {
        padding: 20,
        gap: 20
    },
    footer: {
        borderTopColor: COLORS.gray200,
        borderTopWidth: 1,
        padding: 20,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
})