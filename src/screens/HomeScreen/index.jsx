import { Text, Image, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 50 }}
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
            style={{ width: "100%", height: "100%", borderRadius: 50 }}
            source={require("../../assets/user.png")}
          />
        </View>
      </View>
      {/* HEADER */}

      {/* SEARCH */}
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <Image
            style={{ width: 20, height: 20, marginTop: 10, marginLeft: 10 }}
            source={require("../../assets/search.png")}
          />
          <TextInput
            style={{
              paddingHorizontal: 10,
              width: "100%",
              backgroundColor: "#E9EAEE",
            }}
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>

        <View style={styles.searchFilter}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/filter.png")}
          />
        </View>
      </View>
      {/* SEARCH */}
    </SafeAreaView>
  );
};

export default HomeScreen;
