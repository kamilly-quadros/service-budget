import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../utils/theme"

export const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        gap: 16,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        width: '100%',
    },
    title: {
        fontSize: FONTS.sm,
        fontWeight: 'bold',
        color: COLORS.gray700
    },
})