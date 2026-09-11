import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export type RequestStatus = 'submitted' | 'processing' | 'finished';

export interface ItemData {
  id: string;
  name: string;
  quantity: number;
  dateSubmitted: string;
  imageUrl: string;
  processingMethod: string;
  status: RequestStatus;
}

interface ItemCardProps {
  item: ItemData;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  // Helpers to determine timeline active state
  const isProcessingReached = item.status === 'processing' || item.status === 'finished';
  const isFinishedReached = item.status === 'finished';

  return (
    <View style={styles.card}>
      {/* Item Info Summary */}
      <View style={styles.headerRow}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>Quantity: {item.quantity}</Text>
          <Text style={styles.meta}>Submitted: {item.dateSubmitted}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Processing Timeline */}
      <Text style={styles.timelineTitle}>Tracking Status</Text>

      <View style={styles.timeline}>
        {/* Step 1: Submitted */}
        <View style={styles.timelineStep}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.line, isProcessingReached && styles.lineActive]} />
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Submitted</Text>
            <Text style={styles.stepSubtext}>On {item.dateSubmitted}</Text>
          </View>
        </View>

        {/* Step 2: Processing Status */}
        <View style={styles.timelineStep}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, isProcessingReached && styles.dotActive]} />
            <View style={[styles.line, isFinishedReached && styles.lineActive]} />
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Processing Status</Text>
            <Text style={styles.stepSubtext}>
              Method: <Text style={styles.highlightText}>{item.processingMethod}</Text>
            </Text>
          </View>
        </View>

        {/* Step 3: Finished */}
        <View style={styles.timelineStep}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, isFinishedReached && styles.dotActive]} />
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Finished</Text>
            <Text style={styles.stepSubtext}>
              {isFinishedReached ? 'Request completed' : 'Pending completion'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#f2f2f7',
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5ea',
    marginVertical: 16,
  },
  timelineTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e93',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  timeline: {
    paddingLeft: 4,
  },
  timelineStep: {
    flexDirection: 'row',
    minHeight: 48,
  },
  indicatorContainer: {
    alignItems: 'center',
    width: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e5e5ea',
  },
  dotActive: {
    backgroundColor: '#007aff',
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#e5e5ea',
    marginVertical: 2,
  },
  lineActive: {
    backgroundColor: '#007aff',
  },
  stepContent: {
    marginLeft: 12,
    paddingBottom: 12,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  stepSubtext: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },
  highlightText: {
    fontWeight: '600',
    color: '#007aff',
  },
});