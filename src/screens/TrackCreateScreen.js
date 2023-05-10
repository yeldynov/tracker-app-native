import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Create a Track</Text>
      <Map />
      {err && <Text>Please, enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
