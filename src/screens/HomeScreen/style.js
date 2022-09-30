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
  search: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
  },
  searchInput: {
    height: 40,
    width: "80%",
    backgroundColor: "#E9EAEE",
    flexDirection: "row",
  },
  searchFilter: {
    height: 30,
    width: 30,
  },
});

export default styles;
