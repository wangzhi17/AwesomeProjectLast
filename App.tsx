/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import Route from "./src/route";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { EzvizPlayerVoiceTalk } from "react-native-ezviz-player";

const App = () => {
  useEffect(() => {
    EzvizPlayerVoiceTalk.initSDK("").then();
    return () => EzvizPlayerVoiceTalk.destroySDK();
  }, []);
  return (
    <GestureHandlerRootView>
      <Route />
    </GestureHandlerRootView>
  );
};

export default App;

