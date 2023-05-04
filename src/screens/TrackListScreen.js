import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title='Got to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
