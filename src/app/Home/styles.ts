import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../utils/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.gray100,
        paddingTop: 62,
    },
    header: {
        padding: 20,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        width: "100%",
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
})