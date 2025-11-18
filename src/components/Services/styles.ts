import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "@/utils/theme"

export const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:FONTS.sm,
        fontWeight:'bold',
        color:COLORS.gray700,
        marginBottom:2
    },
    description:{
        fontSize:FONTS.xs,
        color:COLORS.gray500,
        maxWidth:179,
    },
    priceAndQuantity:{
        alignItems:'flex-end',
        gap:2
    },
    price:{
        flexDirection:'row',
        gap:4,
        alignItems:'baseline',
    },
    symbol:{
        fontSize:FONTS.xs,
        color:COLORS.gray700
    },
    money:{
        fontSize:FONTS.md,
        fontWeight:'bold',
        color:COLORS.gray700
    },
    quantity:{
        fontSize:FONTS.xs,
        color:COLORS.gray600
    }
})