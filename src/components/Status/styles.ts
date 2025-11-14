import { FONTS } from "@/utils/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        width: 'auto',
        gap: 6,
    },
    statusCircle: {
        width: 8,
        height: 8,
        borderRadius: 100,
    },
    statusText: {
        fontSize: FONTS.xs,
        fontWeight: 'bold',
    },
})