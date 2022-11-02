import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import RestaurantCard from "../RestaurantCard";
import { assetImages } from "../../config/assets";

const FeaturedRow = (props) => {
  const { title, description } = props;

  return (
    <View style={styles.feature}>
      <View style={styles.featureHeader}>
        <Text style={styles.featureHeaderText}>{title}</Text>
        <Image
          style={{ width: 20, height: 20 }}
          source={assetImages.icon_next}
        />
      </View>

      <Text style={styles.featureDes}>{description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          imgUrl="https://img-global.cpcdn.com/recipes/978f10f62a0b230d/680x482cq70/bo-kho-banh-mi-recipe-main-photo.jpg"
          title="Bo kho"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Bánh mì bò kho đặc sản Việt Nam thơm ngon mời bạn ăn nha"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Sushi của Nhật nhưng được chế biến và bán tại Việt Nam với những món đồ tươi ngon"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is the tesst"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is the tesst"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
