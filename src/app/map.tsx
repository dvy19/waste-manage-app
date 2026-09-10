import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MapView, {
  Marker,
  MapPressEvent,
} from 'react-native-maps';

export default function SelectLocation() {

  const [location, setLocation] = useState({
    latitude: 28.6692,
    longitude: 77.4538,
  });

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } =
      event.nativeEvent.coordinate;

      

    setLocation({
      latitude,
      longitude,
    });
  };

  return (
     <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.6692,
          longitude: 77.4538,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

   map: {
    flex: 1,
  },


  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'white',

    padding: 20,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    elevation: 10,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});