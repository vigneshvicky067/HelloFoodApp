import React,{useState,useEffect} from 'react';
import {View,Image,ScrollView,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
// import {Ionicons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebaseconfig'
import LinearGradient from 'react-native-linear-gradient';


export function LoginScreen({navigation}){

  //Initialization

  const [rightIcon, setRightIcon] = useState('eye');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);


  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("home"); }})
        return unsubscribe;}, []);

//Login function with firebase

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email.trim(), password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

//Password toggle function

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };


return(
    <View style={styles.loginScreen}>
      <LinearGradient colors={['#f88d46','#f4ad68']} style={styles.linearGradient}/>
        <ScrollView style={{flex:2}}>

          <View style={styles.imageContainer}>
            <Text style={styles.headerText1}>What diet..?</Text>
              <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
                  <Image style={styles.headerImage} source={require('../../assets/images/header-man.png')}/> 
          </View>


            <View style={styles.loginContent}>
              <View style={styles.loginHeader}>
              <Text style={styles.headerText}>Are u Ready to eat..?</Text>
              </View>
                  <View style={styles.loginInput}>
                      <Ionicons style={styles.icon} name="mail"/>
                          <TextInput  returnKeytype='next'
                            placeholder="E-mail"
                            style={styles.input} 
                            placeholderTextColor='black'
                            autoCompleteType="email"
                            value={email}
                            onChangeText={text => setEmail(text)}/>
                    </View>

                    <View style={styles.loginInput}>
                      <Ionicons style={styles.icon} name="lock-closed"/>
                          <TextInput  
                            returnKeytype='next' 
                            placeholder="Password"  
                            secureTextEntry={passwordVisibility}
                            style={styles.input} 
                            placeholderTextColor='black'
                            value={password}
                            onChangeText={text => setPassword(text)}/>
                      <Ionicons style={styles.icon2} name={rightIcon} 
                        size={26} onPress={handlePasswordVisibility}/>

                    </View>


                    <View style={styles.textContainer}>
                      <Text onPress={()=>{navigation.navigate('forget')}}>Forget password?</Text>
                    </View>
        
                    <View style={styles.buttonContainer}> 
                      <TouchableOpacity style={styles.loginBtn}  
                        activeOpacity={0.8} onPress={handleLogin}>
                        <Text style={styles.btnText}>Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.registerBtn} 
                        activeOpacity={0.8} onPress={()=>{navigation.navigate('register')}}>
                        <Text style={styles.btnText}>Signup</Text>
                      </TouchableOpacity>
                    </View> 

                  <View style={styles.socialMediaLogin}>
                        <View style={styles.textContainer}>
                          <Text>Or SignUp with</Text>
                        </View>

                    <View style={styles.socialMediaButtons}>
               
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{}}
                        style={styles.roundButton1}>
                        <Ionicons name='logo-facebook' size={23} color='white'/>
                      </TouchableOpacity>
                
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{}}
                        style={styles.roundButton2}>
                        <Ionicons name='logo-google' size={23} color='white'/>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>

)}

const styles=StyleSheet.create({

  loginScreen:{
    flex:1,
    width:"100%",
},
  linearGradient: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: 400
}, 
  headerImage:{
    height:250,
    width:250,
    position:'absolute',
    top:-90,
    left:40
},
  headerText:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
},
  headerText1:{
    fontSize:15,
    color:'white',
    fontWeight:'bold',
    marginLeft:270,
    top:29,
},
 loginHeader:{
   alignItems:'center',
   paddingBottom:30
 },
 
  loginContent:{
      flex:1,
      backgroundColor:'white',
      padding:35,
      marginTop:0,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
    },
  
    imageContainer:{
        marginVertical:110,
        
    },
    logo:{
        width:130,
        height:30,
        top:-80,left:10
    },
   icon:{
    top:18,
    left:10,
    margin:0,
    position:'absolute',
    fontSize:15
},
icon2:{
    top:14,
    left:250,
    margin:0,
    position:'absolute',
    fontSize:23
},
 loginInput:{
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
      loginBtn:{
        backgroundColor:Colors.primary,
        borderRadius:30,
        marginHorizontal:20,
        marginVertical:10,
        height:50,
        alignItems:'center',
        elevation:10,
        
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
        elevation:10
        
      },
      roundButton1: {
        width: 50,
        height:50,
        padding:9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: Colors.info,
        elevation:10
      },
});

export default LoginScreen;