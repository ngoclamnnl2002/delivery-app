import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const BasketIcon = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.basket.products);
  let totalPrice = products.reduce((total, item) => (total += item.price), 0);  

  return (
    <View style={styles.basketIconWrap}>
      <Pressable
        style={styles.basketIcon}
        onPress={() => navigation.navigate("BasketScreen")}
      >
        <Text
          style={[
            styles.basketIconText,
            { padding: 5, backgroundColor: "#01A296" },
          ]}
        >
          {products.length}
        </Text>
        <Text style={[styles.basketIconText, { textAlign: "center", flex: 1 }]}>
          Xem giỏ hàng
        </Text>
        <Text style={styles.basketIconText}>
          {Intl.NumberFormat("de-DE").format(totalPrice)}đ
        </Text>
      </Pressable>
    </View>
  );
};

export default BasketIcon;
