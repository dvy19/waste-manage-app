import { authService } from '@/service/authService';
import React, { useState , useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {router} from 'expo-router'
import { useLocalSearchParams } from 'expo-router';

import { LocationDetails } from '../models/UserModels';

const locationDetails = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  

  const location=async()=>{

    try{

        const data:LocationDetails={
            city:city,
            address:address,
            pinCode:pincode,
            coordinates:coordinates,
            profile:profileImage


        }

        const res=await authService.createProfile(data)


    }
    catch(err){
        console.log(`${err}`)
    }
  }

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Location Details</Text>

        {/* Profile Image Section */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imagePickerButton}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>Upload Photo</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter street address"
            placeholderTextColor="#999"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#999"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Pincode</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter area pincode"
            placeholderTextColor="#999"
            value={pincode}
            onChangeText={setPincode}
            keyboardType="numeric"
          />
        </View>


        

       

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={()=>{router.push('./(main)/(tabs)/home')}}>
          <Text style={styles.buttonText}>Save Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePickerButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e5ea',
    borderRadius: 50,
  },
  imagePlaceholderText: {
    fontSize: 12,
    color: '#007aff',
    fontWeight: '500',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3a3a3c',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default locationDetails ;