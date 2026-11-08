import TrackPlayer, { PlayerCommand } from "@rntp/player";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    TrackPlayer.setupPlayer({
      contentType: "music",
    });

    TrackPlayer.setCommands({
      capabilities: [
        PlayerCommand.PlayPause,
        PlayerCommand.Next,
        PlayerCommand.Previous,
      ],
    });
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
