import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import categoriesData from "../../assets/data/categoriesData";
import foodData from "../../assets/data/foodData";
import Colors from "../../constants/Colors";
import { auth } from "../../firebaseconfig";
import CategoryView from "../../components/CategoryView";

export function HomeScreen({ navigation }) {
  const popularData = foodData.filter((meal) => meal.isPopular === true);

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryView
        image={itemData.item.image}
        title={itemData.item.title}
        onSelect={() => {
          navigation.navigate("details", {
            categoryId: itemData.item.cid,
            categoryName: itemData.item.title,
            categoryImage: itemData.item.image,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Ionicons
            name="apps"
            color="black"
            size={23}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
          <Image
            style={styles.foodLogo}
            source={require("../../assets/food.png")}
          />
        </View>
        <Text style={styles.titlesSubtitle}>
          Hello {auth.currentUser?.email.replace("@gmail.com", "")}
        </Text>
        <Text style={styles.titlesTitle}>Find your taste..!</Text>

        {/* Search */}
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <View style={styles.searchWrapper}>
            <Ionicons
              style={styles.search}
              name="search"
              size={16}
              color={Colors.textDark}
            />
            <View>
              <Text style={styles.searchText}>Search your favorite food</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <Image
            style={{ width: "100%", height: 100 }}
            source={require("../../assets/images/ad-image.png")}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item, index) => item.cid}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              activeOpacity={1}
              key={item.menuId}
              onPress={() =>
                navigation.navigate("foodDetails", {
                  foodId: item.menuId,
                  foodName: item.name,
                })
              }
            >
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}
              >
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <Ionicons
                        name="megaphone"
                        size={12}
                        color={Colors.primary}
                      />
                      <Text style={styles.popularTopText}>Top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>{item.name}</Text>
                      <Text style={styles.popularTitlesWeight}>
                        Calories: {item.calories}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Ionicons name="fast-food" size={16} color="white" />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <Ionicons
                        name="pricetag"
                        size={10}
                        color={Colors.textDark}
                      />
                      <Text style={styles.rating}>$ {item.price}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image
                    source={{ uri: item.photo }}
                    style={styles.popularCardImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  foodLogo: { width: 160, height: 40, marginLeft: 70 },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  titlesSubtitle: {
    fontSize: 13,
    color: Colors.textDark,
    marginLeft: 30,
    marginTop: 20,
  },
  titlesTitle: {
    fontSize: 24,
    color: Colors.textDark,
    marginTop: 1,
    marginLeft: 30,
  },
  searchWrapper: {
    backgroundColor: "#e5e5e5",
    margin: 20,
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    fontSize: 14,
    marginLeft: 10,
    color: Colors.textLight,
  },
  search: {
    marginLeft: 10,
  },
  categoriesWrapper: {
    marginTop: 5,
  },
  categoriesTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTopText: {
    marginLeft: 10,

    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    color: Colors.textDark,
  },
  popularTitlesWeight: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontSize: 12,
    color: Colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 10,
  },
  popularCardImage: {
    width: 300,
    height: 125,
    borderRadius: 20,
  },
});
export default HomeScreen;
