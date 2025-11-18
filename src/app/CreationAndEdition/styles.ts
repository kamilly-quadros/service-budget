import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../utils/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 62,
    },
    title: {
        fontSize: FONTS.sm,
        fontWeight: 'bold',
        color: COLORS.gray700
    },
    content: {
        padding: 20,
        gap: 20
    },
    card: {
        borderRadius: 10,
        borderColor: COLORS.gray200,
        borderWidth: 1
    },
    cardHeader: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: FONTS.xs,
        color: COLORS.gray500
    },
    cardContent: {
        gap: 12,
        padding: 16,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1
    },
    option: {
        flexDirection: 'row',
        gap: 12,
        width: 100,
        alignItems: 'center',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    contentTitle: {
        fontSize: FONTS.sm,
        color: COLORS.gray700
    },
    itens: {
        fontSize: FONTS.xs,
        color: COLORS.gray600
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    symbol: {
        fontSize: FONTS.xs,
        color: COLORS.gray700
    },
    price: {
        fontSize: FONTS.sm,
        color: COLORS.gray700
    },
    priceContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    priceInfo: {
        flexDirection: 'row',
        gap: 4
    },
    priceDiscount: {
        color: COLORS.dangerBase,
        flexDirection: 'row',
        alignItems: 'center'
    },
    discount: {
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: COLORS.gray100,
        borderColor: COLORS.gray300,
        borderWidth: 1,
        borderRadius: 999,
        flexDirection: 'row',
        alignItems: 'center'
    },
    discountValue: {
        fontSize: FONTS.md,
        color: COLORS.gray700
    },
    discountSymbol: {
        fontSize: 16,
        color: COLORS.gray600
    },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: COLORS.gray100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 80,
        flexDirection: 'row',
        gap: 12,
        borderTopColor: COLORS.gray200,
        borderTopWidth: 1,
        justifyContent: 'center'
    },
    line: {
        textDecorationLine: 'line-through',
        alignSelf: 'flex-end',
        gap: 1
    },
    total: {
        fontSize: FONTS.lg,
        fontWeight: 'bold',
        color: COLORS.gray700,
    },
    totalPrice: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4
    },
    red: {
        color: COLORS.dangerBase
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 8
    }
})