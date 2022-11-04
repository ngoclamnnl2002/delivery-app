import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { assetImages } from "../../config/assets";
import styles from "./style";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("DeliveryScreen"), 3800);
  }, []);
  return (
    <SafeAreaView style={styles.preparingOrder}>
      <Animatable.Image
        source={assetImages.giphy}
        animation="slideInUp"
        iterationCount={1}
        style={{ height: 330, width: 330 }}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={styles.preparingOrderTitle}
      >
        Đơn của bạn đang được xác nhận
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
