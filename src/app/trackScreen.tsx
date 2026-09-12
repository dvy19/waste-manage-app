import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ItemCard } from '../component/itemCard';
import { TrackItemRes } from '@/models/ItemModels';
import { itemService } from '@/service/itemService';



const TrackItem: React.FC = () => {
  const [searchId, setSearchId] = useState<string>('');
  const [trackedItem, setTrackedItem] = useState<TrackItemRes>();
  const [searched, setSearched] = useState<boolean>(false);

  const[trackItem,setTrackItem]=useState<TrackItemRes>();


  const track_item=async(trackingId:string)=>{

    try{

      const item=await itemService.trackItem(trackingId)
      console.log(item)
      console.log(item.item)
      setTrackItem(item)
    }
    catch(err){
      console.log(`${err}`)
    }
  }


    const handleTrack = async () => {
        if (!searchId) return;

        await track_item(searchId);
    };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Track Item Request</Text>

        {/* Search Input Section */}
        <View style={styles.searchContainer}>
          <Text style={styles.label}>Request ID</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="e.g. 101 or 102"
              placeholderTextColor="#999"
              value={searchId}
              onChangeText={setSearchId}
            />
            <TouchableOpacity style={styles.button} onPress={handleTrack}>
              <Text style={styles.buttonText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Display Result */}
        {trackItem ? (
          <ItemCard item={trackItem.item}  message={trackItem?.message ?? ""} />
        ) : (
          searched && (
            <View style={styles.notFoundContainer}>
              <Text style={styles.notFoundText}>
                No request found for ID "{searchId}". Try 101 or 102.
              </Text>
            </View>
          )
        )}
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
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3a3a3c',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#e5e5ea',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007aff',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  notFoundContainer: {
    padding: 20,
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    alignItems: 'center',
  },
  notFoundText: {
    color: '#666666',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default TrackItem;