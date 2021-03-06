import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PlayerWidget from "./components/PlayerWidget";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import Amplify from "aws-amplify";
import config from "./src/aws-exports.js";
Amplify.configure(config);

import { AppContext } from "./AppContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            songId,
            setSongId: (id: string) => setSongId(id),
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
