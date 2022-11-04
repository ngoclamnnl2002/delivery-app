import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  basketIconWrap: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    zIndex: 100,
  },
  basketIcon: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#00CCBB",
    marginHorizontal: 12,
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 3
  },
  basketIconText:{
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
});

export default styles;
