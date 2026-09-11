import { View, Text } from 'react-native'
import React from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';


interface ActionCardProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
}
// Reusable Action Item Card Component
const ActionCard: React.FC<ActionCardProps> = ({ title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
    </View>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);


const styles=StyleSheet.create({

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
})

export default ActionCard