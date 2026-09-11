import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface CentreData {
  id: string;
  name: string;
  ngoName: string;
  address: string;
  imageUrl: string;
  distance?: string; // Optional (e.g., "1.2 km away")
}

interface CentreCardProps {
  centre: CentreData;
  //onViewDetails: (centre: CentreData, event: GestureResponderEvent) => void;
}

export const CentreCard: React.FC<CentreCardProps> = ({ centre }) => {
  return (
    <View style={styles.card}>
      {/* Centre Banner Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: centre.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        {centre.distance && (
          <View style={styles.distanceBadge}>
            <Ionicons name="location-sharp" size={12} color="#FFFFFF" />
            <Text style={styles.distanceText}>{centre.distance}</Text>
          </View>
        )}
      </View>

      {/* Card Content */}
      <View style={styles.content}>
        {/* NGO Tag */}
        <Text style={styles.ngoTag}>BY {centre.ngoName.toUpperCase()}</Text>

        {/* Centre Name */}
        <Text style={styles.centreName} numberOfLines={1}>
          {centre.name}
        </Text>

        {/* Location Address */}
        <View style={styles.addressRow}>
          <Ionicons name="map-outline" size={14} color="#64748B" style={styles.addressIcon} />
          <Text style={styles.addressText} numberOfLines={2}>
            {centre.address}
          </Text>
        </View>

        {/* Footer / View Details Action */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.detailsButton}
            //onPress={(e) => onViewDetails(centre, e)}
            activeOpacity={0.7}
          >
            <Text style={styles.detailsButtonText}>View Details</Text>
            <Ionicons name="chevron-forward" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    position: 'relative',
    backgroundColor: '#F1F5F9',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  distanceBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  ngoTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#059669', // Eco green tag
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  centreName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  addressIcon: {
    marginTop: 2,
    marginRight: 6,
  },
  addressText: {
    fontSize: 13,
    color: '#64748B',
    flex: 1,
    lineHeight: 18,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 12,
    alignItems: 'flex-end',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailsButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CentreCard;