import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import ActionCard from '../../../component/profileActionCard';

import{ router} from 'expo-router'


const ProfileScreen: React.FC = () => {
  // Dummy user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'San Francisco, CA',
    profilePic: 'https://via.placeholder.com/150', // Replace with user image URL or local asset
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: user.profilePic }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userLocation}>📍 {user.location}</Text>
        </View>

        {/* Action Items List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Overview</Text>

          <ActionCard
            title="Track Item Requests"
            subtitle="View status of your active and past items"
            onPress={() => router.push('/trackScreen')}
          />

          <ActionCard
            title="Edit Profile"
            subtitle="Update name, location, and photo"
            onPress={() => console.log('Navigate to Edit Profile')}
          />

          <ActionCard
            title="Settings & Privacy"
            subtitle="Notifications, security, and account preferences"
            onPress={() => console.log('Navigate to Settings')}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.logoutText}>Log Out</Text>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#e5e5ea',
    marginBottom: 12,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  userLocation: {
    fontSize: 13,
    color: '#8e8e93',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e93',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666666',
  },
  chevron: {
    fontSize: 22,
    color: '#c7c7cc',
    fontWeight: '300',
  },
  logoutButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#fff0f0',
    borderWidth: 1,
    borderColor: '#ffe0e0',
  },
  logoutText: {
    color: '#ff3b30',
    fontSize: 16,
    fontWeight: '600',
  },
});


export default ProfileScreen;