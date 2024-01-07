import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme, Switch } from "react-native";
import Colors from "../../constants/Colors";
import React, { useState } from "react";
import { IsEnabledContext } from "./IsEnabledContext";


function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function ThemeSwitch({ isEnabled, toggleSwitch }) {
  return (
    <Switch
      trackColor={{ false: "#767577", true: "#fff" }}
      thumbColor={isEnabled ? "#000" : "#f4f3f4"}
      onValueChange={toggleSwitch}
      value={isEnabled}
      {...Platform.select({
        web: {
          activeThumbColor: "#f4f3f4",
        },
      })}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <IsEnabledContext.Provider value={isEnabled}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,

            headerRight: () => (
              <ThemeSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerRight: () => (
              <ThemeSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            ),
          }}
        />
      </Tabs>
    </IsEnabledContext.Provider>
  );
}
