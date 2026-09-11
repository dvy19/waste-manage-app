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
import { ItemCard, ItemData } from '../component/itemCard';

// Dummy database map for demonstration
const MOCK_ITEMS: Record<string, ItemData> = {
  '101': {
    id: '101',
    name: 'Plastic Bottles',
    quantity: 15,
    dateSubmitted: '10 Sep 2026',
    imageUrl: 'https://via.placeholder.com/150',
    processingMethod: 'Recycling',
    status: 'processing',
  },
  '102': {
    id: '102',
    name: 'Old Garden Shears',
    quantity: 2,
    dateSubmitted: '02 Sep 2026',
    imageUrl: 'https://via.placeholder.com/150',
    processingMethod: 'Metal Refurbishing',
    status: 'finished',
  },
};

const TrackItem: React.FC = () => {
  const [searchId, setSearchId] = useState<string>('');
  const [trackedItem, setTrackedItem] = useState<ItemData | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const handleTrack = () => {
    if (!searchId.trim()) return;
    const found = MOCK_ITEMS[searchId.trim()];
    setTrackedItem(found || null);
    setSearched(true);
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
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleTrack}>
              <Text style={styles.buttonText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Display Result */}
        {trackedItem ? (
          <ItemCard item={trackedItem} />
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