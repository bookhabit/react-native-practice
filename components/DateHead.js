import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={{height: top}} />
      <StatusBar backgroundColor="#26a69a" />
      <View styles={{flex: 1}}>
        <View style={{padding: 16, backgroundColor: '#26a69a'}}>
          <Text style={{fontSize: 24, color: '#FFFFFF'}}>{formatted}</Text>
        </View>
      </View>
    </>
  );
};

export default DateHead;
