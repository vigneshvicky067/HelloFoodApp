import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
export function CartScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.cartImage}
        source={require("../../assets/images/cart.png")}
      />
      <Text>Your Cart is empty</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("home1");
        }}
      >
        <Text style={styles.btnText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cartImage: {
    height: 300,
    width: 300,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
  },
});
export default CartScreen;
