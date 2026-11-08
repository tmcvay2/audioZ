import TrackPlayer from "@rntp/player";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { tracks } from "@/data/tracks";

export default function Library() {
  const trackPressed = (index: number) => {
    TrackPlayer.setMediaItems(tracks, index);
    TrackPlayer.play();
    router.navigate("/player");
  };

  return (
    <FlatList
      data={tracks}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      renderItem={({ item, index }) => (
        <Pressable style={styles.row} onPress={() => trackPressed(index)}>
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
});
