import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 62,
    },
    header: {
        padding: 20,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerContent: {
        gap: 2
    },
    headerTitle: {
        color: COLORS.purpleBase,
        fontSize: FONTS.lg,
        fontWeight: 'bold'
    },
    headerText: {
        color: COLORS.gray500,
        fontSize: FONTS.sm,
    },
    content: {
        gap: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        width: '100%'
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        alignItems: 'center',
    },
    filterIcon: {
        backgroundColor: COLORS.gray100,
        borderColor: COLORS.gray300,
        borderWidth: 1,
        padding: 12,
        borderRadius: 100,
        justifyContent: 'center',
    },
    empty: {
        fontSize: 14,
        color: "#808080",
        textAlign: 'center'
    },
    separator: {
        width: "100%",
        height: 8,
    },
    statusBody: {
        gap: 16
    },
    subTitle: {
        fontSize: FONTS.xs,
        color: COLORS.gray500,
    },
    statusContent: {
        gap: 12
    },
    ordenationContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        width: 'auto',
        gap: 6,
    },
    orderingText: {
        fontSize: FONTS.md,
    },
    statusBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
})