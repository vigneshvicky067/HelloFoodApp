import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";
import ForgetPasswordScreen from "../screens/Auth/ForgetPassword";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import HomeScreen from "../screens/App/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/App/CartScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../screens/drawer/drawer";
import RestaurantScreen from "../screens/App/RestaurantScreen";
import FoodScreen from "../screens/App/FoodScreen";
import SearchScreen from "../screens/search/SearchScreen";
import { FoodDetailScreen } from "../screens/App/FoodDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ left: 35, width: 150, height: 50, alignItems: "center" }}
      source={require("../assets/images/logo.png")}
      resizeMode="contain"
    />
  );
}

function DrawNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerScreen {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: 25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="home2"
        component={TabNav}
        options={{ title: "Home",drawerIcon:config=><Ionicons name='home' size={20} color='black'/>}}
      />
      <Drawer.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Profile",drawerIcon:config=><Ionicons name='person' size={20} color='black'/>}}
      />
      <Drawer.Screen
        name="cart"
        component={CartScreen}
        options={{ title: "Your Cart",drawerIcon:config=><Ionicons name='cart' size={20} color='black'/> }}
      />
    </Drawer.Navigator>
  );
}

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home1") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "cart") {
            iconName = focused ? "cart" : "cart";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.info,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="home1"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginScreen}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={RegistrationScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerShadowVisible: false,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: Colors.primary,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="forget"
          component={ForgetPasswordScreen}
          options={{
            title: "ForgetPassword",
            headerShadowVisible: false,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: Colors.primary,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={RestaurantScreen}
          options={({ route, navigation }) => ({
            title: route.params.categoryName,

            headerTintColor: "white",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.primary },
          })}
        />

        <Stack.Screen
          name="food"
          component={FoodScreen}
          options={({ route, navigation }) => ({
            title: route.params.rName,
            headerTintColor: "white",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.primary },
          })}
        />

        <Stack.Screen
          name="foodDetails"
          component={FoodDetailScreen}
          options={({ route }) => ({
            title: route.params.foodName,
            headerTintColor: "white",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.primary },
          })}
        />

        <Stack.Screen
          name="home"
          component={DrawNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{
            title: "",
            headerShadowVisible: false,
            headerTintColor: "black",
            headerStyle: {
              backgroundColor: "#e5e5e5",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
