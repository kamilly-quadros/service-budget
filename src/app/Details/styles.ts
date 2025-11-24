import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 42,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 20,
        minHeight:'80%'
    },
    info: {
        borderRadius: 10,
        backgroundColor: COLORS.gray100,
        borderColor: COLORS.gray200,
        borderWidth: 1,
    },
    projectInfoContainer: {
        flexDirection: 'row',
        gap: 12,
        padding: 16,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        paddingRight: 20,
        height: 82
    },
    projectIconContainer: {
        borderRadius: 8,
        backgroundColor: COLORS.purpleLight,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: FONTS.lg,
        fontWeight: 'bold',
        color: COLORS.gray700,
        maxWidth: 266
    },
    clientInfoContainer: {
        gap: 12,
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    heading: {
        gap: 62,
        flexDirection: 'row'
    },
    text: {
        gap: 4,
        flexDirection: 'column',
    },
    title2: {
        fontSize: FONTS.xs,
        color: COLORS.gray600,
    },
    title3: {
        fontSize: FONTS.sm,
        color: COLORS.gray700,
    },
    services: {
        gap: 8,
    },
    list: {
        borderRadius: 10,
        borderColor: COLORS.gray200,
        borderWidth: 1,
    },
    heading2: {
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    title4: {
        fontSize: FONTS.xs,
        color: COLORS.gray500,
        maxWidth: 211,
    },
    servicesListContainer: {
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 20
    },
    listItemType: {
        gap: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%'
    },
    text2: {
        gap: 2,
    },
    text4: {
        fontSize: FONTS.sm,
        fontWeight: 'bold',
        color: COLORS.gray700,
    },
    price: {
        gap: 2,
        alignItems: 'flex-end'
    },
    info2: {
        gap: 12,
        flexDirection: 'row',
    },
    price2: {
        gap: 4,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    title5: {
        fontSize: FONTS.xs,
        color: COLORS.gray700,
    },
    price3: {
        gap: 16,
        paddingLeft: 16,
        paddingVertical: 16,
        paddingRight: 20,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: COLORS.gray100,
        borderColor: COLORS.gray200,
        borderWidth: 1,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 262,
    },
    title7: {
        fontSize: FONTS.sm,
        color: COLORS.gray600,
    },
    title8: {
        fontSize: FONTS.xs,
        fontWeight: 'bold',
        color: COLORS.gray600,
        textDecorationLine: 'line-through',
    },
    discountInfoContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    tag: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        backgroundColor: COLORS.successLight,
    },
    title9: {
        fontSize: FONTS.xs,
        fontWeight: 'bold',
        color: COLORS.successDark,
    },
    line: {
        borderColor: COLORS.gray200,
        borderWidth: 1,
        marginTop: 10
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100,
        justifyContent: 'space-between',
        borderTopColor: COLORS.gray200,
        borderTopWidth: 1,
    }
})