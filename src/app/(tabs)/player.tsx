import TrackPlayer, { useActiveMediaItem } from "@rntp/player";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Player() {
  const activeItem = useActiveMediaItem();

  const playButtonPressed = () => {
    TrackPlayer.play();
  };
  const pauseButtonPressed = () => {
    TrackPlayer.pause();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activeItem?.title ?? "Nothing playing"}</Text>
      <Button title="Play" onPress={playButtonPressed} />
      <Button title="Pause" onPress={pauseButtonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
});
