import React, { useState } from 'react';
import {View,Image,ScrollView,Text,Button,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebaseconfig'

export function RegistrationScreen({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('');



    const handleSignUp = () => {
        if(password===confirmPassword){

        auth.createUserWithEmailAndPassword(email.trim(), password).then(userCredentials => {
              const user = userCredentials.user;
              console.log('Registered with:', user.email);
            }).catch(error => alert(error.message));
        }
        else{
            alert('Try again with correct way');
        }
        
      }



return(
    <View style={styles.loginScreen}>
    <ScrollView style={{flex:2}}>

   
        <View style={styles.imageContainer}>
            <Image style={styles.headerImage} source={require('../../assets/images/register-man.png')}/> 
        </View>

        <View style={styles.screen}>
        <View style={styles.loginCard}>
            <Ionicons style={styles.icon} name="mail" color='grey'/>
            <TextInput 
            placeholder="E-mail" 
            style={styles.input} 
            placeholderTextColor='grey'
            value={email}
          onChangeText={text => setEmail(text)}/>
        </View>


        <View style={styles.loginCard}>
        <Ionicons style={styles.icon} name="lock-closed" color='grey'/>
            <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor='grey'
            value={password}
            onChangeText={text => setPassword(text)}/>
        </View>


        <View style={styles.loginCard}>
        <Ionicons style={styles.icon} name="lock-closed" color='grey'/>
            <TextInput 
             placeholder="Confirm Password" 
             secureTextEntry={true} 
             style={styles.input} 
             value={confirmPassword}
             onChangeText={text => setConfirmPassword(text)}
             placeholderTextColor='grey'/>
        </View>
        
        <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.registerBtn} activeOpacity={0.8} onPress={handleSignUp}>
          <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>
        </View> 

    


    <View style={styles.socialMediaLogin}>
        <View style={styles.textContainer}>
            <Text style={{color:'black'}}>Or Signup with</Text>
        </View>

            <View style={styles.socialMediaButtons}>
               
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.roundButton1}>
                <Ionicons name='logo-facebook' size={23} color='white'/>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.roundButton2}>
                <Ionicons name='logo-google' size={23} color='white'/>
                </TouchableOpacity>
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
        backgroundColor:Colors.primary
    },
    screen:{
        flex:2,
        backgroundColor:'white',
        paddingVertical:35,
        paddingHorizontal:20,
        margin:10,
        borderRadius:50
    },
    image:{
        width:250,
        height:250
    },
    imageContainer:{
        alignItems:'center',
        marginVertical:70,
    },
    headerImage:{
        height:250,
        width:250,
        position:'absolute',
        top:-120,
        left:10
    },
    logo:{
        width:200,
        height:50,
        top:-90,left:-30
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
        color:'black'
      },
      buttonContainer:{
        width:'100%',
      },
      textContainer:{
          alignItems:'center',
          marginBottom:20
      },
      registerBtn:{
        backgroundColor:Colors.info,
        borderRadius:30,
        marginHorizontal:30,
        marginVertical:10,
        height:50,
        alignItems:'center',
        elevation:10
      },
      btnText:{
        padding:13,
        color:'white',
        fontSize:20
      },

      socialMediaLogin:{
         
        margin:0,
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

export default RegistrationScreen;