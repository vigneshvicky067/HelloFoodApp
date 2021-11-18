import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,SafeAreaView,FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import foodData from '../../assets/data/foodData';


export function SearchScreen({navigation}){
    const [input,setInput]=useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);

    const searchUser=(text)=>{
        if(text){
            const searchedData=foodData.filter(i=>i.name.toLowerCase().includes(text.toLowerCase()));
            setSearchData(searchedData);
        }
           if(text===''){
               setSearchData([]);
           } 
    }
    const renderCategoryItem =itemData => {
        return (
            <View style={{margin:10}}>
                <Text style={{color:'black'}}
                 onPress={()=>{navigation.navigate('foodDetails',{foodId:itemData.item.menuId,foodName:itemData.item.name})}}>{itemData.item.name}</Text>
            </View>
            
            );
        }

return(
    <SafeAreaView style={styles.screen}>
    <View style={styles.searchWrapper} >
        <View style={styles.searchContainer}>
            <Ionicons size={20} style={styles.search}name="search"/>
        <TextInput placeholder="Search your favorites"
         returnKeyType='search'
        onChangeText={(text) => {
            if (searchTimer) {
                clearTimeout(searchTimer);
            }
            setInput(text);
            setSearchTimer(
               
                    searchUser(text)
                
            );
        }}
        value={input}/>
        </View>
    </View>
    <View>
     <FlatList
                data={searchData}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => item.menuId}/>
             
    </View>
    <View style={styles.trending}>
        <Text  style={styles.trendingTitle}>Trending Searches</Text>
        <View style={{flexDirection:'row',marginTop:10}}>
        <View style={styles.trendingSearches}> 
        <Ionicons size={14} name="trending-up"/>
            <Text style={styles.searchText}>Biriyani</Text>
        </View>
        <View style={styles.trendingSearches}> 
        <Ionicons size={14} name="trending-up"/>
            <Text style={styles.searchText}>Pizza</Text>
        </View>
        <View style={styles.trendingSearches}> 
        <Ionicons size={14} name="trending-up"/>
            <Text style={styles.searchText}>Burger</Text>
        </View>
        </View>
        <View style={styles.trendingSearches}> 
        <Ionicons size={14} name="trending-up"/>
            <Text numberOfLines={1} style={styles.searchText}>Chicken Biriyani</Text>
        </View>
       
    </View>

   
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#e5e5e5',
        marginTop:-40
    },
    search:{
        marginRight:5,
        marginTop:14,
        color:'black'
      },
    searchWrapper:{
        marginTop:50,
        width:'100%',
    },
    searchContainer:{
        backgroundColor:'white',
        margin:10,
        height:50,
        paddingVertical:0,
        paddingHorizontal:30,
        borderRadius:10,
        flexDirection:'row'
    },
    trending:{
        marginLeft:10
    },
    trendingTitle:{
        fontSize:23,
        fontWeight:'bold',
        color:'black'
    },
    trendingSearches:{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor:'white',
            width:90,
            borderRadius:10,
            padding:10,
            margin:10,
            color:'black'
    },
    searchText:{
      marginLeft:10,
      color:'black'

    }
})

export default SearchScreen;