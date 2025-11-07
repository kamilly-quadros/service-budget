import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/utils/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purpleBase,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    flexDirection: 'row',
    gap: 10,
    fontFamily: 'Lato-regular'
  },
  title: {
    color: COLORS.gray100,
    fontSize: FONTS.sm,
    fontWeight: 'bold',
  },
})