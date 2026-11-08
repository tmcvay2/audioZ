import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          title: "Player",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}
