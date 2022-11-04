import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import { addToBasket, removeFromBasket } from "../../redux/basketSlice";
import { assetImages } from "../../config/assets";

const DishRow = (props) => {
  const { id, title, price, imgUrl } = props;
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.basket.products.filter((item) => item.id === id)
  );

  const handleAddItem = () => {
    dispatch(addToBasket({ id, title, price, imgUrl }));
  };

  const handleRemoveItem = () => {
    if (products.length < 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={{
          backgroundColor: "#fff",
          paddingTop: 15,
          paddingHorizontal: 12,
        }}
      >
        <View style={[styles.dish, isPressed && { borderBottomWidth: null }]}>
          <View style={styles.dishDes}>
            <Text style={styles.dishDesName}>{title}</Text>
            <Text style={[styles.dishDesText, { marginBottom: 5 }]}>
              Trà ôlong kết hợp với hương sen thanh mát, đậm vị sen bằng hạt sen
              dẻo thoem và lớp kem mềm mại.
            </Text>
            <Text style={styles.dishDesText}>{price}đ</Text>
          </View>
          <View>
            <Image
              style={{ height: 80, width: 80 }}
              source={{
                uri: imgUrl,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            backgroundColor: "#fff",
            borderBottomWidth: 0.3,
            borderColor: "#999",
          }}
        >
          <TouchableOpacity
            onPress={handleRemoveItem}
            disabled={!products.length}
          >
            <Image
              style={{ height: 30, width: 30, marginHorizontal: 12 }}
              source={assetImages.icon_minus}
            />
          </TouchableOpacity>
          <Text>{products.length}</Text>
          <TouchableOpacity onPress={handleAddItem}>
            <Image
              style={{ height: 30, width: 30, marginHorizontal: 12 }}
              source={assetImages.icon_plus}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
