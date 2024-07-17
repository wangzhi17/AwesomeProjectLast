import React, { useEffect, useRef, useState } from "react";

import { Dimensions, Pressable, Text, View } from "react-native";
import { EzvizPlayerView } from "react-native-ezviz-player";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const ref = useRef(null);
  useEffect(() => {
    return () => ref.current?.releasePlayer();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <EzvizPlayerView ref={ref}
                       accessToken={""}
                       cameraNo={1}
                       deviceSerial={""}
                       verifyCode={""}
                       style={{ height: 280 }}
                       onLoad={() => ref.current?.createPlayer()}
                       onPlayFailed={event => console.log(event.nativeEvent)} />
    </SafeAreaView>
  );
};



export default HomeScreen;
