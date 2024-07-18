import React, { useEffect, useRef } from "react";

import { EzvizPlayerView } from "react-native-ezviz-player";
import { SafeAreaView } from "react-native-safe-area-context";

const EzvizRealPlayScreen = () => {
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



export default EzvizRealPlayScreen;
