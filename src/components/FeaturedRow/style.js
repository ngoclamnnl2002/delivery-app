import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  feature: {
    marginHorizontal: 12,
    marginBottom: 15,
  },
  featureHeader: {
    flexDirection: "row",
    alignItems: 'center'
  },
  featureHeaderText: {
    fontWeight: "bold",
    fontSize: theme.fontSize["text_base"],
    flex: 1,
  },
  featureDes: {
    color: theme.color.color_text["gray"],
    fontSize: theme.fontSize["text_xs"],
    marginTop: 2,
    marginBottom: 15,
  },
});

export default styles;
