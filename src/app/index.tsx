import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { tokenStorage } from '@/service/tokenStorage';
export default function GetStarted() {

    


      
        
    


  return (
      <View style={styles.container}>
         <TouchableOpacity
         
          activeOpacity={0.4}
          onPress={() => router.push('/(auth)/register')}
        >
          <Text>Register here</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles=StyleSheet.create(
    {

        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }


}
)