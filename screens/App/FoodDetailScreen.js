import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import foodData from "../../assets/data/foodData";
import Colors from "../../constants/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function FoodDetailScreen({ route }) {
  const { foodId } = route.params;
  const foodDetails = foodData.find((meal) => meal.menuId === foodId);
  const [cartCount, setCartCount] = useState(0);
  return (
    <View style={styles.screen}>
      <Image style={styles.foodImage} source={{ uri: foodDetails.photo }} />
      <View style={styles.food}>
        <Text style={styles.foodTitle}>{foodDetails.name}</Text>
        <Text style={styles.foodSubTitle}>{foodDetails.description}</Text>
        <Text style={styles.foodDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
        <View style={styles.foodPrice}>
          <Text style={styles.priceText}>$ {foodDetails.price}</Text>
        </View>
        <View style={styles.addCart}>
          <Ionicons
            style={styles.addCartText2}
            name="remove-circle"
            onPress={() => {
              if (cartCount > 0) {
                setCartCount(cartCount - 1);
              }
            }}
            size={20}
          />
          <Text style={styles.addCartText}>{cartCount}</Text>
          <Ionicons
            style={styles.addCartText1}
            name="add-circle"
            onPress={() => {
              setCartCount(cartCount + 1);
            }}
            size={20}
          />
        </View>
        <View style={styles.calories}> 
            <Ionicons style={styles.caloriesIcon} name='bicycle' color='white' size={20}/>
            <Text style={styles.caloriesText}>Calories:{foodDetails.calories}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  foodImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  food: {
    marginTop: 20,
    alignItems: "center",
  },
  foodTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  foodSubTitle: {
    marginTop: 20,
    fontSize: 14,
  },
  foodDescription: {
    marginTop: 20,
    fontSize: 13,
    textAlign: "center",
  },
  foodPrice: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  priceText: {
    color: "white",
  },
  addCart: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
  },
  addCartText1: {
    color: "white",
    marginLeft: 40,
  },
  addCartText: {
    color: "white",
  },
  addCartText2: {
    color: "white",
    marginRight: 40,
  },
  calories:{
      backgroundColor:'#42BB41',
      padding:20,
      flexDirection:'row',
      margin:20,
      borderRadius:10
  },
  caloriesText:{
      color:'white',
      fontSize:16,
      alignSelf:'center'
  },
  caloriesIcon:{
      marginRight:10
  }
});
