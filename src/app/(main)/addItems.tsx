import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  FlatList,
} from 'react-native';


import {router} from 'expo-router'

type CategoryOption =
  | 'dry'
  | 'wet'
  | 'food'
  | 'garden'
  | 'electrical'
  | 'plastic'
  | 'paper'
  | 'metal'
  | 'other';

const CATEGORIES: CategoryOption[] = [
  'dry',
  'wet',
  'food',
  'garden',
  'electrical',
  'plastic',
  'paper',
  'metal',
  'other',
];

const AddItem: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [category, setCategory] = useState<CategoryOption | ''>('');
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);

  const handleSelectCategory = (selected: CategoryOption) => {
    setCategory(selected);
    setIsPickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Add New Item</Text>

        {/* Item Name */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Category Dropdown Selector */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setIsPickerVisible(true)}
          >
            <Text style={category ? styles.dropdownText : styles.placeholderText}>
              {category ? category.toUpperCase() : 'Select a category'}
            </Text>
            <Text style={styles.arrowIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Quantity */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter quantity"
            placeholderTextColor="#999"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>

        {/* Weight in kg */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Weight (in kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter weight in kg"
            placeholderTextColor="#999"
            value={weight}
            onChangeText={setWeight}
            keyboardType="decimal-pad"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.button} onPress={()=>router.back()}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Category Selection Modal */}
      <Modal visible={isPickerVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsPickerVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    category === item && styles.selectedOption,
                  ]}
                  onPress={() => handleSelectCategory(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      category === item && styles.selectedOptionText,
                    ]}
                  >
                    {item.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    paddingVertical: 12,
    fontSize: 16,
    color: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  dropdownButton: {
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  arrowIcon: {
    fontSize: 12,
    color: '#666',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#e5f0ff',
    borderRadius: 6,
  },
  optionText: {
    fontSize: 16,
    color: '#3a3a3c',
  },
  selectedOptionText: {
    color: '#007aff',
    fontWeight: '600',
  },
});

export default AddItem;