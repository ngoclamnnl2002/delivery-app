import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  dish: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottomWidth: 0.3,
    borderColor: "#999",
  },
  dishDes: {
    width: "80%",
  },
  dishDesName: {
    fontWeight: "500",
    fontSize: 17,
  },
  dishDesText: {
    color: colors.colorOpacity,
    fontSize: 13,
    marginTop: 2,
    lineHeight: 17,
    textAlign: "justify",
  },
});

export default styles;
