import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "@/utils/theme"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray100,
        paddingHorizontal: 16,
        paddingVertical: 4,
        flex: 1,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS.gray300,
        fontSize: FONTS.md,
        color: COLORS.gray500,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textInput: {
        flex: 1,
        padding: 0,
        margin: 0,
        fontSize: FONTS.md,
        color: COLORS.gray700,
    },
    money: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.gray600
    },
})