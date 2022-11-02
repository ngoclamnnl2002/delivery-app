import {
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedRow from "../../components/FeaturedRow";
import theme from "../../theme";
import { assetImages } from "../../config/assets";
import styles from "./style";

const HomeScreen = () => {
  const categoryMenu = [
    {
      title: "Pizza",
      imgUrl:
        "https://image.shutterstock.com/shutterstock/photos/529855003/display_1500/stock-photo-beautiful-pizza-with-ham-and-tomatoes-529855003.jpg",
    },
    {
      title: "Sushi",
      imgUrl:
        "https://i.pinimg.com/originals/09/f0/8f/09f08f0886c39e2709550b1cdc18366b.jpg",
    },
    {
      title: "Thai",
      imgUrl:
        "https://whenindanang.com/wp-content/uploads/2020/10/top-5-thai-food-restaurants-in-danang-2.jpg",
    },
    {
      title: "Asian",
      imgUrl:
        "https://www.rinag.com/wp-content/uploads/2020/02/Asian-Street-Kitchen-Festival-2019-min-1024x501.jpg",
    },
    {
      title: "Coffee",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhsOcF_gPRL-gqq491gyUvGPXUl3CImEWlA&usqp=CAU",
    },
    {
      title: "Vietnam",
      imgUrl: "https://statics.vinpearl.com/vietnamese-food-1_1649670657.jpg",
    },
    {
      title: "Korea",
      imgUrl:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/67/0b/f9/korean-bbq.jpg",
    },
  ];

  const featuredRow = [
    {
      title: "Featured",
      description: "Paid placements from our partners",
    },
    {
      title: "Tasty Discounts",
      description: "Everyone's been enjoying these juicy discounts!",
    },
    {
      title: "Offers near you!",
      description: "Why not support your local restaurant tonight!",
    },
  ];

  return (
    <SafeAreaView style={styles.home}>
      {/* HEADER */}
      <View>
        <View style={styles.headerLogo}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={assetImages.logo_shipper}
          />

          <View style={styles.headerLogoTitle}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize["text_xs"],
                color: theme.color.color_text["gray"],
              }}
            >
              Nhanh - Rẻ - An toàn !
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize["text_xl"],
              }}
            >
              Shipper Food
            </Text>
          </View>

          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={assetImages.icon_user}
          />
        </View>

        <View style={styles.headerSeach}>
          <View style={styles.headerSeachInput}>
            <Image
              style={{ width: 20, height: 20, marginLeft: 10 }}
              source={assetImages.icon_search}
            />
            <TextInput
              style={{
                paddingHorizontal: 10,
                width: 300,
              }}
              placeholder="Nhà hàng và món ăn"
              keyboardType="default"
            />
          </View>
          <Image
            style={{ width: 25, height: 25 }}
            source={assetImages.icon_filter}
          />
        </View>
      </View>

      {/* BODY */}
      <ScrollView
        style={{
          backgroundColor: theme.color.color_background["gray"],
          marginBottom: 90,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <ScrollView
          style={{ marginHorizontal: 12 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categoryMenu.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={{ uri: item.imgUrl }} style={styles.cardImg} />
              <Text style={styles.cartText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured */}
        {featuredRow.map((item, index) => (
          <FeaturedRow
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
