import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  imageFood: {
    height: 200,
    width: "100%",
    padding: 4,
  },
  iconBack: {
    position: "relative",
    zIndex: 10,
    top: 50,
    left: 20,
    backgroundColor: theme.color.color_background["while"],
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  nameFood: {
    fontSize: 28,
    fontWeight: "bold",
  },
  detailFood: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  detailFoodIcon: {
    width: 15,
    height: 15,
    marginRight: 7,
  },
  detailFoodText: {
    color: theme.color.color_text["gray"],
    fontSize: 12,
    marginRight: 7,
  },
  detailFoodDes: {
    fontSize: 13,
  },
});

export default styles;
