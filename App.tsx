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
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  useEffect(() => {
    EzvizPlayerVoiceTalk.initSDK("","https://isaopen.ezviz.com").then();
    return () => EzvizPlayerVoiceTalk.destroySDK();
  }, []);
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Route />
      </GestureHandlerRootView>
    </SafeAreaProvider>

  );
};

export default App;

