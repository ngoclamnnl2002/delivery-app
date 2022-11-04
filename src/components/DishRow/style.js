import { StyleSheet } from "react-native";
import theme from "../../theme";

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
    color: theme.color.color_text["gray"],
    fontSize: 13,
    marginTop: 2,
    lineHeight: 17,
    textAlign: "justify",
  },
});

export default styles;
