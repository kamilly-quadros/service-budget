import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray100,
        borderColor: COLORS.gray200,
        borderWidth: 1,
        padding: 16,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 12,
    },
    cardContent: {
        gap: 8,
        width: '60%',
    },
    cardTitle: {
        color: COLORS.gray700,
        fontSize: FONTS.md,
        fontWeight: 'bold',
    },
    status: {
        position: 'absolute',
        right: 10,
        top: 16,
    },
    price: {
        flexDirection: 'row',
        gap: 4,
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    priceLabel: {
        fontSize: FONTS.xs,
        color: COLORS.gray700,
        alignSelf: 'flex-end'
    },
    priceValue: {
        color: COLORS.gray700,
        fontSize: FONTS.md,
        fontWeight: 'bold',
    },
})