import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Type definitions for the identified response
interface IdentificationResult {
  identifiedName: string;
  ideas: string[];
}

import { WasteAnalysis } from '@/models/reuseIdeas';

import {aiService} from '../../service/aiService'

export const ImageUploadScreen: React.FC = () => {

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [analysis, setAnalysis] = useState<WasteAnalysis | null>(null);

  const[image,setImage]=useState<{
          uri: string;
          name: string;
          type: string;
        } | null>(null);

  const handlePickImage = async () => {

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        'Permission Denied',
        'Permission to access camera roll is required to select an image.'
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!pickerResult.canceled) {
      const asset = pickerResult.assets[0];

      setImage({
        uri: asset.uri,
        name: asset.fileName ?? "item_reuse.jpg",
        type: asset.mimeType ?? "image/jpeg",
      });
    }

    if (!pickerResult.canceled && pickerResult.assets.length > 0) {
      setImageUri(pickerResult.assets[0].uri);
    }
  };

  // Function to handle submitting image (Simulated backend processing)
  const handleSubmit = async() => {
    if (!imageUri) return;

    setLoading(true);

    try{

        const data=await aiService.reuseIdea({
          image
        })

        setAnalysis(data) 
    }
    catch(err){
      console.log(`${err}`)
    }

    
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Title Header */}
        <Text style={styles.title}>Identify & Reuse</Text>
        <Text style={styles.subtitle}>Upload an image to get creative ideas</Text>

        {/* Image Preview / Upload Area */}
        <TouchableOpacity style={styles.imageCard} onPress={handlePickImage} activeOpacity={0.8}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.previewImage} resizeMode="cover" />
          ) : (
            <View style={styles.placeholderContainer}>
              <Text style={styles.uploadIcon}>📷</Text>
              <Text style={styles.uploadText}>Tap to select an image</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Change Image Link (if image chosen) */}
        {imageUri && (
          <TouchableOpacity onPress={handlePickImage} style={styles.changeImageBtn}>
            <Text style={styles.changeImageText}>Choose a different image</Text>
          </TouchableOpacity>
        )}

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.submitButton, (!imageUri || loading) && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!imageUri || loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.submitButtonText}>Submit Image</Text>
          )}
        </TouchableOpacity>

        {/* Response Card 
        {result && (
          <View style={styles.responseCard}>
            <Text style={styles.badgeLabel}>IDENTIFIED ITEM</Text>
            <Text style={styles.identifiedName}>{result.identifiedName}</Text>

            <View style={styles.divider} />

            <Text style={styles.ideasHeader}>Creative Ideas:</Text>
            {result.ideas.map((idea, index) => (
              <View key={index} style={styles.ideaItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.ideaText}>{idea}</Text>
              </View>
            ))}
          </View>
        )}
          */}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    marginBottom: 24,
  },
  imageCard: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    alignItems: 'center',
  },
  uploadIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  changeImageBtn: {
    marginBottom: 16,
  },
  changeImageText: {
    color: '#007AFF',
    fontSize: 13,
    fontWeight: '500',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    marginTop: 8,
    marginBottom: 24,
  },
  disabledButton: {
    backgroundColor: '#CBD5E1',
    shadowOpacity: 0,
    elevation: 0,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  responseCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#007AFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  identifiedName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDF2F7',
    marginVertical: 14,
  },
  ideasHeader: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 10,
  },
  ideaItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 8,
    lineHeight: 20,
  },
  ideaText: {
    fontSize: 14,
    color: '#2D3748',
    flex: 1,
    lineHeight: 20,
  },
});

export default ImageUploadScreen;