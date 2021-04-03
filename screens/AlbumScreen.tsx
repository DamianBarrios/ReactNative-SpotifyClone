import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import albumDetails from "../data/albumDetails";

import SongListItem from "../components/SongListItem";
import { FlatList } from "react-native-gesture-handler";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {}, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

export default AlbumScreen;
