import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  basketHeader: {
    backgroundColor: '#fff',
    position: "relative",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#94D3CC",
  },
  IconClose: {
    position: "absolute",
    top: 10,
    right: 15,
    width: 35,
    height: 35,
  },
  basketTimeDiliver: {
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  basketDish: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 12,
    marginBottom: 70,
  },
  basketDishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "#94D3CC",
  },
  basketPrice: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  basketOrder: {
    backgroundColor: '#00CCBB',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 3
  }
});

export default styles;
