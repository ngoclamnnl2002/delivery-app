import {
  View,
  Text,
  // SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import styles from "./style";
import colors from "../../theme/colors";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.restaurant.restaurant);

  return (
    <SafeAreaView style={styles.delivery}>
      <View>
        <View style={styles.deliveryHeader}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 35,
              height: 35,
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              style={{
                width: 18,
                height: 18,
                marginVertical: 9,
                marginHorizontal: 8,
              }}
              source={require("../../assets/arrow.png")}
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 16 }}>Trợ giúp</Text>
        </View>

        <View style={styles.deliveryWaiting}>
          <View style={styles.deliveryWaitingHead}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.colorOpacity,
                  marginBottom: 5,
                  fontSize: 16,
                }}
              >
                Dự tính giao trong
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 30 }}>
                15 - 20 phút
              </Text>
            </View>
            <Image
              style={{ height: 50, width: 50 }}
              source={{
                uri: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/11/shipper-la-gi-1.jpg",
              }}
            />
          </View>
          <Progress.Bar
            style={{ marginVertical: 12 }}
            color="#00CCBB"
            indeterminate={true}
          />
          <Text style={{ color: colors.colorOpacity }}>
            Đơn của bạn đang được {restaurant.title} chuẩn bị
          </Text>
        </View>

        <MapView
          initialRegion={{
            latitude: 10.833979244603213,
            longitude: 106.61350093985722,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="mutedStandard"
          style={{ width: "100%", height: 510, marginTop: -30, zIndex: 0 }}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 10.833979244603213,
              longitude: 106.61350093985722,
            }}
            identifier="origin"
          />
        </MapView>

        <View style={styles.deliveryInfoShiper}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={require("../../assets/images/logo/logo_shipper.png")}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Nguyễn Ngọc Lâm
            </Text>
            <Text
              style={{ color: colors.colorOpacity, fontSize: 12, marginTop: 3 }}
            >
              Shiper của bạn
            </Text>
          </View>
          <Text style={{ color: "#00CCBB", fontSize: 16, fontWeight: "bold" }}>
            Call
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
