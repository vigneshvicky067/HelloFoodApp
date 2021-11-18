import React,{useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import foodData from "../../assets/data/foodData";
import Colors from "../../constants/Colors";

export function FoodScreen({ route, navigation }) {
  const { rId, rName } = route.params;
  const displayedFood = foodData.filter((meal) => meal.rid.indexOf(rId) >= 0);
  const renderFoodItem = (itemData) => {
    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("foodDetails", {
            foodId: itemData.item.menuId,
            foodName: itemData.item.name,
          });
        }}
      >
      <View style={styles.foodCard}>
       
          <View style={styles.foodImage}>
            <Image
              style={styles.foodPhoto}
              source={{ uri: itemData.item.photo }}
            />
            <Text style={styles.offer}>{itemData.item.calories}cal</Text>
          </View>
        
        <View style={styles.foodContent}>
          <Text style={styles.foodTitle} numberOfLines={1}>
            {itemData.item.name}
          </Text>
          <Text style={styles.foodSubtitle} numberOfLines={1}>
            {itemData.item.description}
          </Text>
          <View style={styles.ratingBottom}>
          <Text style={styles.foodDuration}>$ {itemData.item.price}</Text>
          </View>
        </View>
       
      </View>
     
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedFood}
        keyExtractor={(item, index) => item.name}
        renderItem={renderFoodItem}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
  },
  foodCard: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 20,
    height: 150,
    flexDirection: "row",
    overflow: "hidden",
  },
  foodImage: {
    margin: 5,
  },
  foodContent: {
    marginVertical: 5,
    marginRight: 80,
    color:'black'
  },
  foodTitle: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 18,
    marginRight: 30,
    flexWrap: "wrap",
    color:'black'
  },
  foodSubtitle: {
    marginRight: 40,
    marginVertical: 5,
    fontSize: 12,
    flexWrap: "wrap",
    color:'black'
  },
  foodDuration: {
    marginVertical: 5,
    marginHorizontal: 10,
    color:'white'
  },
  offer: {
    backgroundColor: Colors.info,
    marginBottom:10,
    opacity: 0.7,
    padding: 10,
    color: "white",
    borderTopRightRadius: 10,
    position: "absolute",
    top: 100,
    left: -16,
  },
  ratingBottom: {
    marginTop: 0,
    marginLeft:40,
    alignItems:'center',
    elevation: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 10,

  
  },
  foodPhoto: {
    width: 100,
    height: 100,
    margin: 0,
    borderRadius: 10,
  },
  addCartText1: {
    color: "white",
    marginLeft: 0,
  },
  addCartText: {
    color: "white",
  },
  addCartText2: {
    color: "white",
    marginRight:0,
  },
});

export default FoodScreen;
