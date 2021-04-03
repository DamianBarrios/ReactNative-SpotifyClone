import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import albumDetails from "../data/albumDetails";

import SongListItem from "../components/SongListItem";
import { FlatList } from "react-native-gesture-handler";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.warn(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello From Album screen</Text>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;
