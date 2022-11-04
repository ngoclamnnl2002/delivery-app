import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import DishRow from "../../components/DishRow";
import BasketIcon from "../../components/BasketIcon/index.jsx";
import { setRestaurant } from "../../redux/restaurantSlice";
import { assetImages } from "../../config/assets";
import styles from "./style";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket.products);
  const {
    params: {
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
      })
    );
  }, [dispatch]);

  return (
    <>
      {products.length != 0 && <BasketIcon />}
      <TouchableOpacity style={styles.iconBack} onPress={navigation.goBack}>
        <Image
          style={{
            width: 18,
            height: 18,
            marginVertical: 9,
            marginHorizontal: 8,
          }}
          source={assetImages.icon_arrow}
        />
      </TouchableOpacity>
      <ScrollView
        style={
          products.length != 0 ? { marginBottom: 90 } : { marginBottom: 20 }
        }
      >
        <View>
          <Image style={styles.imageFood} source={{ uri: imgUrl }} />
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ paddingHorizontal: 12, paddingVertical: 15 }}>
            <Text style={styles.nameFood}>{title}</Text>
            <View style={styles.detailFood}>
              <Image
                style={styles.detailFoodIcon}
                source={assetImages.icon_star}
              />
              <Text style={[styles.detailFoodText, { color: "#94D3CC" }]}>
                {rating}
              </Text>
              <Text style={styles.detailFoodText}>. {genre}</Text>
              <Image
                style={styles.detailFoodIcon}
                source={assetImages.icon_location}
              />
              <Text style={styles.detailFoodText}>{address}</Text>
            </View>
            <Text style={styles.detailFoodDes}>{short_description}</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
              marginHorizontal: 12,
              fontSize: 18,
            }}
          >
            Menu
          </Text>

          {/* Dishrows */}
          <DishRow
            id="1"
            title="Trà sen vàng"
            price={45000}
            imgUrl="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
          />
          <DishRow
            id="2"
            title="Trà sen vàng"
            price={45000}
            imgUrl="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
          />
          <DishRow
            id="3"
            title="Trà sen vàng"
            price={45000}
            imgUrl="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
          />
          <DishRow
            id="4"
            title="Trà sen vàng"
            price={45000}
            imgUrl="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
          />
          <DishRow
            id="5"
            title="Trà sen vàng"
            price={45000}
            imgUrl="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
