import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from "../../firebaseconfig";
import * as ImagePicker from "expo-image-picker";

export default ProfileScreen = ({ navigation }) => {
  const [address, setAddress] = useState("Coimbatore");
  const [phone, setPhone] = useState("123456789");
  const [zipCode, setZipCode] = useState("641078");
  const [image, setImage] = useState('https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
  const [profileImage, setProfileImage] = useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickProfileImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.profileScreen}>
        <View style={styles.header}>
          {image && (
            <ImageBackground
              source={{ uri: image }}
              style={styles.coverImage}
            />
          )}
          <Ionicons
            name="menu"
            color="white"
            style={styles.menuIcon}
            size={23}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
          <Ionicons
            name="camera"
            color="white"
            style={styles.imageIcon}
            size={23}
            onPress={pickImage}
          />
        </View>
        <View style={styles.content}>
          {profileImage && (
            <TouchableOpacity onPress={pickProfileImage}>
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          )}
          <View style={styles.user}>
            <Text style={styles.userText}>
              {auth.currentUser?.email.replace("@gmail.com", "")}
            </Text>
            <Text style={styles.userTextSubtitle}>Always hungry</Text>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.profileText}>Email</Text>
            <TextInput
              value={auth.currentUser?.email}
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="black"
            />
            <Text style={styles.profileText}>Username</Text>
            <TextInput
              value={auth.currentUser?.email.replace("@gmail.com", "")}
              style={styles.input}
              placeholderTextColor="black"
            />
            <Text style={styles.profileText}>Address</Text>
            <TextInput
              value={address}
              style={styles.input}
              placeholderTextColor="black"
            />
            <Text style={styles.profileText}>Phone</Text>
            <TextInput
              value={phone}
              keyboardType="phone-pad"
              style={styles.input}
              placeholderTextColor="black"
            />

            <Text style={styles.profileText}>ZipCode</Text>
            <TextInput
              value={zipCode}
              keyboardType="phone-pad"
              style={styles.input}
              placeholderTextColor="black"
            />
            <TouchableOpacity />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.info,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 0,
    height: 250,
    width: 500,
  },
  content: {
    flex: 2,
    backgroundColor: Colors.background,
    alignItems: "center",
    height: 600,
  },
  user: {
    marginTop: -70,
  },
  profileText: {
    marginTop: 10,
    marginLeft: 10,
    color:'black'
  },
  userText: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
    color:'black'
  },
  userTextSubtitle: {
    fontSize: 11,
    textAlign: "center",
    color: Colors.info,
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  userDetails: {
    margin: 30,
    borderRadius: 20,
    backgroundColor: "white",
    width: "90%",
    elevation: 5,
  },
  icon: {
    top: 18,
    left: 10,
    margin: 0,
    position: "absolute",
    fontSize: 15,
  },

  input: {
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 12,
    backgroundColor: "white",
    color: "black",
    elevation: 4,
  },
  coverImage: {
    width: "100%",
    height: 300,
    opacity: 0.2,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Colors.primary,
    top: -80,
    left: 0,
  },
  menuIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  imageIcon: {
    position: "absolute",
    top: 200,
    left: 320,
  },
});
