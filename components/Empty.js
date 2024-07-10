import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.input}>할 일이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
