import React from 'react'
import { View,Text,StyleSheet,FlatList,TouchableOpacity,Image,ScrollView} from 'react-native'
import restaurantData from '../../assets/data/resturantData'
import Colors from '../../constants/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import categoriesData from '../../assets/data/categoriesData'

export function RestaurantScreen({route,navigation}){
    const {categoryId,categoryName,categoryImage } = route.params
    const displayedMeals = restaurantData.filter(meal=>meal.cid.indexOf(categoryId)>=0)
   

    const renderMealItem=itemData=>{
        
        return(
            <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('food',{rId: itemData.item.rid,rName:itemData.item.name})}}>
                <View style={styles.foodCard}>

                    <View style={styles.foodImage}>
                    <Image style={styles.foodPhoto} source={{uri:itemData.item.photo}}/>
                    <Text style={styles.offer}>{itemData.item.offer}</Text>
                    </View>

                    <View style={styles.foodContent}>
                    <Text style={styles.foodTitle}>{itemData.item.name}</Text>
                    <Text style={styles.foodSubtitle}>{itemData.item.description}</Text>
                    <Text style={styles.foodDuration}>{itemData.item.duration}</Text>
                   
                    
                    <View style={styles.ratingBottom}>
                    <Ionicons name="star" size={10} color={Colors.textDark} color='white' />
                    <Text style={styles.itemRating}>{itemData.item.rating}</Text>
                  
                    </View>

                    </View>
                </View>
            </TouchableOpacity>
             )
    }  
return(

    <View style={styles.screen}>
        <View style={styles.header}>
            
                <Image style={styles.categoryImage} source={categoryImage}/>
                <Text style={styles.headerText}>Restaurants near you</Text>
          
            
        </View>
        <ScrollView>
        <View style={styles.details}>
            <FlatList data={displayedMeals} 
            keyExtractor={(item,index)=>item.name} 
            renderItem={renderMealItem}
            style={{width:'100%'}}
            />
        </View>
        </ScrollView>
    <View>    
    </View>

    </View>
    
)
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    header:{
        backgroundColor:Colors.info,
        flexDirection:'row',
        padding:10
    },
    headerText:{
        fontSize:20,
        marginVertical:10,
        marginHorizontal:20,
        color:'white'

    },
    details:{
        margin:20,
        alignItems:'center',
        overflow: 'hidden',
        
    },
    foodPhoto:{
        width:100,height:100,borderRadius:30
    },
    foodCard:{
        backgroundColor:'white',
        padding:10,
        marginHorizontal:0,
        marginVertical:10,
        borderRadius:20,
        height:150, 
        flexDirection:'row',
        overflow:'hidden'
    },
    foodImage:{
        margin:5
    },
    foodContent:{
        marginVertical:5,
        marginHorizontal:10,
    },
    foodTitle:{
        marginVertical:5,
        marginHorizontal:10,
        fontSize:17,
        fontWeight:'bold'
    },
    itemRating:{paddingHorizontal:3,color:'white'},
    categoryImage:{height:50,width:50},
    foodSubtitle:{
        marginVertical:5,
        marginHorizontal:10,
        fontSize:12
    },
    foodDuration:{
        marginVertical:5,
        marginHorizontal:10,
    },
    offer:{
        backgroundColor:Colors.info,
        opacity:0.7,
        padding:10,
        color:'white',
        borderTopRightRadius:10,
        position:'absolute',
        top:100,
        left:-16
    },
    ratingBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        marginLeft:75,
        elevation:10,
        backgroundColor: Colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        },
})
export default RestaurantScreen;