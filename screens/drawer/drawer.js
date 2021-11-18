import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ImageBackground,Image } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Colors from '../../constants/Colors';
import { auth } from '../../firebaseconfig';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DrawerScreen=props=>{
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace("login")
      })
      .catch(error => alert(error.message))
  }
    return(
        <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor:Colors.info}}>
          <ImageBackground
            source={require('../../assets/images/header-man.png')}
            style={{paddingVertical: 50, paddingHorizontal:10,marginTop:-40,height:250,width:500}}  resizeMode="cover">
            <Image
              source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
              style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
            />
            
            <Ionicons name='chevron-back-circle' color='white'
            style={{backgroundColor:Colors.primary,borderRadius:60,padding:2,position:'absolute',top:200,left:240}} size={25} 
            onPress={()=>{props.navigation.closeDrawer();}}/>
          
            
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
               
                marginBottom: 5,
              }}>
              {auth.currentUser?.email.replace('@gmail.com','')}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight:'bold',
                  marginRight: 5,
                }}>
                Status:Hungry
              </Text>
            </View>
          </ImageBackground>
          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="share-social" size={22} color="black"/>
              <Text
                style={{
                  fontSize: 15,
                  color:'black',
                  marginLeft: 5,
                }}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignOut} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="exit" size={22} color="black" />
              <Text
                style={{
                  fontSize: 15,
                  color:'black',
                  marginLeft: 5,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        
    }
});
export default DrawerScreen;