import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";
import colors from "../../theme/colors";
import { removeFromBasket } from "../../redux/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const products = useSelector((state) => state.basket.products);
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]);
  let totalPrice = products.reduce((total, item) => (total += item.price), 0);

  useMemo(() => {
    const groupedItems = products.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemInBasket(groupedItems);
  }, [products]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
        <View style={styles.basketHeader}>
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
            >
              Giỏ hàng
            </Text>
            <Text style={{ textAlign: "center", color: colors.colorOpacity }}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.IconClose}
          >
            <Image
              style={{
                width: 18,
                height: 18,
                marginVertical: 9,
                marginHorizontal: 8,
              }}
              source={require("../../assets/close.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.basketTimeDiliver}>
          <Image
            style={{ width: 35, height: 35, borderRadius: 50 }}
            source={require("../../assets/images/logo/logo_shipper.png")}
          />
          <Text style={{ flex: 1, marginLeft: 15 }}>
            Giao hàng trong 15 - 20 phút
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#00CCBB" }}>Thay đổi</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.basketDish}>
          {Object.entries(groupedItemInBasket).map(([key, items]) => (
            <View key={key} style={styles.basketDishItem}>
              <Text style={{ marginRight: 5, color: "#00CCBB" }}>
                {items.length} x
              </Text>
              <Image
                style={{ height: 50, width: 50 }}
                source={{
                  uri: items[0]?.imgUrl,
                }}
              />
              <Text style={{ flex: 1 }}>{items[0]?.title}</Text>
              <Text>{items[0]?.price}đ</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Image
                  style={{ height: 30, width: 30, marginLeft: 12 }}
                  source={require("../../assets/minus.png")}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.basketPrice}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingBottom: 5,
              borderBottomWidth: 0.3,
              borderBottomColor: "#94D3CC",
            }}
          >
            <Text style={{ flex: 1, color: colors.colorOpacity }}>
              Tổng cộng ({products.length} món)
            </Text>
            <Text style={{ color: colors.colorOpacity }}>
              {Intl.NumberFormat("de-DE").format(totalPrice)}đ
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingBottom: 5,
              borderBottomWidth: 0.3,
              borderBottomColor: "#94D3CC",
            }}
          >
            <Text style={{ flex: 1, color: colors.colorOpacity }}>
              Phí giao hàng
            </Text>
            <Text style={{ color: colors.colorOpacity }}>
              {products.length == 0 ? 0 : "15.000"}đ
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ flex: 1, fontWeight: "bold" }}>Tổng cộng</Text>
            <Text style={{ fontWeight: "bold" }}>
              {products.length == 0
                ? 0
                : Intl.NumberFormat("de-DE").format(totalPrice + 15000)}
              đ
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.basketOrder}
          onPress={() => {
            if (products.length != 0)
              navigation.navigate("PreparingOrderScreen");
          }}
        >
          <Text
            style={{
              color: "#fff",
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Đặt đơn -{" "}
            {products.length == 0
              ? 0
              : Intl.NumberFormat("de-DE").format(totalPrice + 15000)}
            đ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
