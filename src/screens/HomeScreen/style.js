import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
  },
  headerTitle: {
    width: "70%",
  },
  headerImage: {
    height: 40,
    width: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default styles;
