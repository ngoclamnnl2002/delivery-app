import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  home: {
    backgroundColor: theme.color.color_background["while"],
  },
  //logo
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },
  headerLogoTitle: {
    flex: 1,
    marginLeft: 15,
  },
  //search
  headerSeach: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 12,
    alignItems: "center",
  },
  headerSeachInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    flex: 1,
    backgroundColor: "#E9EAEE",
    marginRight: 10,
  },
  //categories
  card: {
    marginRight: 10,
    marginBottom: 15,
  },
  cardImg: {
    height: 70,
    width: 70,
  },
  cartText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
    fontSize: theme.fontSize["text_sm"],
  },
});

export default styles;
