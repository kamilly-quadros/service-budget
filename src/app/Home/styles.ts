import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../utils/theme"

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
})