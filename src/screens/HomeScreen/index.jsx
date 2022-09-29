import { Text, Image, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

const HomeScreen = () => {
  const navigation = useNavigation();

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //         headerShown: false
  //     })
  //   }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.headerTitle}>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#999" }}>
            Deliver Now!
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Current Location
          </Text>
        </View>
        <View style={styles.headerImage}>
          <Image
            style={styles.image}
            source={require("../../assets/user.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
