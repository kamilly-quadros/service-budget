import { COLORS, FONTS } from "@/utils/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    header: {
        padding: 20,
        borderBottomColor: COLORS.gray200,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: FONTS.sm,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: FONTS.xs,
        color: COLORS.gray500,
    },
    body: {
        padding: 20,
        gap:20
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        gap:12
    },
    ordenationContent:{
        flexDirection:'row',
        alignItems:'center',
        gap:4
    },
    checkbox: {
        width: 20,
        borderRadius:8
    },
    statusBody:{
        gap:16
    },
    status:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:6,
        width:'auto',
        gap:6,
    },
    statusContent:{
        gap:12
    },
    statusCircle:{
        width:8,
        height:8,
        borderRadius:100,
    },
    statusText:{
        fontSize:FONTS.xs,
        fontWeight:'bold',
    },
radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
},

radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
},
orderingText:{
        fontSize:FONTS.md,
    },
    footer:{
borderTopColor:COLORS.gray200,
borderTopWidth:1,
padding:20,
flexDirection:'row',
gap:12,
alignItems:'center',
justifyContent:'center'
    },
    button:{
        backgroundColor:COLORS.gray100,
        borderColor:COLORS.gray300,
        borderWidth:1,
        padding:12,
        borderRadius:999,
        width:'auto',
        alignItems:'center',
    },
    buttonText:{
        paddingHorizontal:8,
        fontSize:FONTS.sm,
        fontWeight:'bold',
        color:COLORS.purpleBase
    },
backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "center",
    alignItems: "center",
},

})