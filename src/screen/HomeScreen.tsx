import React from "react";

import { Pressable, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {


  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
      <Pressable style={{ borderRadius: 8, backgroundColor: "#12b235" }}
                 onPress={() => navigation.navigate("real_play")}>
        <Text style={{ paddingHorizontal: 12, paddingVertical: 8, fontSize: 16, color: "#fff" }}>
          EzvizRealPlay
        </Text>
      </Pressable>
    </View>
  );
};


export default HomeScreen;
