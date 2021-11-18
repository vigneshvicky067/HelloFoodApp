import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryView = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onSelect}>
      <View style={styles.categoryItemWrapper}>
        <Image source={props.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{props.title}</Text>
        <View style={styles.categorySelectWrapper}>
          <Ionicons
            name="chevron-forward"
            size={10}
            style={styles.categorySelectIcon}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  categoryItemWrapper: {
    backgroundColor: "#e5e5e5",
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 6,
    marginTop: 20,
    marginBottom: 10,
    padding: 20,
    height: 100,
    width: 100,
  },
  categoryItemImage: {
    width: 90,
    height: 90,
    top: -30,
    alignSelf: "center",
    marginHorizontal: 20,
    position: "absolute",
  },
  categoryItemTitle: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 35,
    color: "black",
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 0,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
});
export default CategoryView;
