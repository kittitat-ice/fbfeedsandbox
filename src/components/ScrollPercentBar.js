import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScrollPercentBar = ({
  barHeight,
  scrollPercent,
  emptyColor,
  fillColor,
}) => (
  <View style={{backgroundColor: emptyColor || '#ccf', height: barHeight || 5}}>
    <View
      style={{
        width: scrollPercent || '0%',
        backgroundColor: fillColor || '#3b3af3',
        height: barHeight || 5,
      }}
    />
  </View>
);

export default ScrollPercentBar;

const styles = StyleSheet.create({});
