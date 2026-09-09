import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
export default function GetStarted() {



    /*
    const checkLogin = async () => {
        try {
          const token = await tokenStorage.getAccessToken();
          const role = await tokenStorage.getRole();

          console.log(token)
          console.log(role)


          if (!token) { 
            return 
          } else if ( token !=null && role === "ngo") {
            router.replace("/ngo/(tabs)/ngoHome")
          } else if  ( token !=null && role === "user"){
            router.replace("/(main)/(tabs)/home");
          }
        } catch (error) {
          console.log("Login check error:", error);
          router.replace("/login");
        }
};


        useEffect(()=>{
          checkLogin()
        },[])
        */
    


  return (
      <View>
         <TouchableOpacity
         style={styles.button}
          activeOpacity={0.4}
          onPress={() => router.push('/(auth)/register')}
        >
          <Text>Register here</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles=StyleSheet.create({

  button:{
    margin:20
  }

})