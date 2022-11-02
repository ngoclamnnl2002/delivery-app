import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  delivery: {
    backgroundColor: "#00CCBB",
    flex: 1,
  },
  deliveryHeader: {
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  deliveryWaiting: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    padding: 20,
    borderRadius: 6,
    zIndex: 2
  },
  deliveryWaitingHead: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryInfoShiper:{
    zIndex: 10,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignItems: 'center'
  }
});

export default styles;
