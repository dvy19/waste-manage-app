import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MetricCardProps {
  title: string;
  value: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#1616d3',
    alignItems: 'flex-start',
    width:"48%"
  },
  value: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
});

export default MetricCard;