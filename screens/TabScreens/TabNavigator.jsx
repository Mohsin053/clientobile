import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import EventsScreen from "./EventsScreen";
import ProfileScreen from "./ProfileScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const CircleTabBarIcon = ({ name, size, color }) => {
  return (
    <View style={[styles.circleContainer, { backgroundColor: color }]}>
      <Ionicons name={name} size={size} color="#FFFFFF" />
    </View>
  );
};

export default function TabNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Events") {
              iconName = "notifications-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            return (
              <CircleTabBarIcon name={iconName} size={size} color={color} />
            );
          },
          tabBarStyle: {
            height: 75,
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          headerShown: false,
          tabBarActiveTintColor: "#E45353",
          tabBarInactiveTintColor: "#BBBBBB",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    position: "relative",
  },
});
