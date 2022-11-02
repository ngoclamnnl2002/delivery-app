import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  restaurantCard: {
    backgroundColor: theme.color.color_background["while"],
    paddingBottom: 15,
    marginRight: 10,
  },
  cardContent: {
    marginLeft: 12,
  },
  cardContentRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  cardContentAddress: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardName: {
    fontWeight: "bold",
    fontSize: theme.fontSize["text_base"],
    marginTop: 10,
    marginBottom: 4,
  },
  cardImgBig: {
    height: 130,
    width: 220,
  },
  cardImgSmall: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  cardText: {
    color: theme.color.color_text["gray"],
    fontSize: theme.fontSize["text_xs"],
    marginRight: 5,
  },
});

export default styles;
