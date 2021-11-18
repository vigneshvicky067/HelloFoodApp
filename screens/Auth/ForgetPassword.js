import React from 'react';
import {View,Image,ScrollView,Text,Button,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ForgetPasswordScreen({route,navigation}){
return(
    <View style={styles.loginScreen}>
    <ScrollView style={{flex:1}}>

    <View style={styles.screen} >

        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/barbecue.png')}/>
            <Image style={styles.logo} source={require('../../assets/food.png')}/>
        </View>

        <View style={styles.loginCard}>
            <Ionicons style={styles.icon} name="mail"/>
            <TextInput placeholder="E-mail" style={styles.input} placeholderTextColor='black'/>
        </View>
        <View style={styles.textContainer}>
        <Text>Enter your registered Email..We will sent you link</Text>
        </View>
        
        <View style={styles.buttonContainer}> 
        <View>
        <Button title="Send Confirmation Link" color={Colors.primary} onPress={()=>{navigation.navigate('profile')}}/>
        </View>
       
        </View> 

    </View>

    </ScrollView>
    </View>
);
}

const styles=StyleSheet.create({
    loginScreen:{
        flex:1,
        width:"100%",
        backgroundColor:'white'
    },
    screen:{
        margin:20,
    },
    image:{
        width:200,
        height:200
    },
    imageContainer:{
        marginVertical:30,
        alignItems:'center',
    },
    logo:{
        width:150,
        height:50,
    },
   icon:{
       top:18,
       left:10,
       margin:0,
       position:'absolute',
       fontSize:15
   },
   button:{
    paddingBottom:30
   },
    loginCard:{
        backgroundColor:Colors.secondary,
        borderRadius: 10,
        width: "100%",
        marginBottom: 20,
        elevation:20
    },
    input: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      buttonContainer:{
        width:'100%',
      },
      textContainer:{
          alignItems:'center',
          marginBottom:20
      },


      socialMediaLogin:{
         
        margin:20,
      textAlign:'center',
      },
      socialMediaButtons:{
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      roundButton2: {
        width: 50,
        height:50,
        padding:9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: Colors.tertiary,
        
      },
      roundButton1: {
        width: 50,
        height:50,
        padding:9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: Colors.info,
      },
});

export default ForgetPasswordScreen;