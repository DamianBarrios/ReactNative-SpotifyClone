import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Album from "../components/Album/index";

const album = {
  id: "1",
  imageUri:
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1409&q=80",
  artistsHeadline: "Taylor Swift, Cardi Objective C, Avicii",
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Album album={album} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default HomeScreen;
