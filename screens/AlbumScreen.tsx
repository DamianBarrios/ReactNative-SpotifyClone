import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const album = {
  id: "11",
  name: "Good vibes",
  by: "Spotify",
  numberOfLikes: 38,
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
  songs: [
    {
      id: "1",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on You",
      artist: "Helen",
    },
    {
      id: "2",
      imageUri:
        "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
      title: "Lorem Ipsum",
      artist: "Artist 2",
    },
    {
      id: "3",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      title: "Hello from the other side",
      artist: "Helen",
    },
    {
      id: "4",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on You",
      artist: "Helen",
    },
  ],
};

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.warn(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello From Album screen</Text>
    </View>
  );
};

export default AlbumScreen;
