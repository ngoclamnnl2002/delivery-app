import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { assetImages } from "../../config/assets";
import theme from "../../theme";
import styles from "./style";

const RestaurantCard = (props) => {
  const {
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = props;

  const navigation = useNavigation();
  const handleOnpress = () => {
    navigation.navigate("RestaurantScreen", {
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    });
  };

  return (
    <TouchableOpacity style={styles.restaurantCard} onPress={handleOnpress}>
      <Image style={styles.cardImgBig} source={{ uri: imgUrl }} />

      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{title}</Text>
        <View style={styles.cardContentRating}>
          <Image
            style={styles.cardImgSmall}
            source={assetImages.icon_star}
          />
          <Text style={[styles.cardText, {color: theme.color.color_text["green"]}]}>{rating}</Text>
          <Text style={styles.cardText}>. {genre}</Text>
        </View>
        <View style={styles.cardContentAddress}>
          <View style={styles.cardContentAddress}>
            <Image
              style={styles.cardImgSmall}
              source={assetImages.icon_location}
            />
            <Text style={styles.cardText}>{address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
