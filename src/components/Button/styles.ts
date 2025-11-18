import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "@/utils/theme"

export const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    flexDirection: 'row',
    gap: 10,
    fontFamily: 'Lato-regular'
  },
  pale: {
    backgroundColor: COLORS.gray100,
    borderColor: COLORS.gray300,
    borderWidth: 1,
  },
  purple: {
    backgroundColor: COLORS.purpleBase,
  },
  title: {
    fontSize: FONTS.sm,
    fontWeight: 'bold',
  },
})