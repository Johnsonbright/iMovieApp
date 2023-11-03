import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Indicator = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Indicator;
