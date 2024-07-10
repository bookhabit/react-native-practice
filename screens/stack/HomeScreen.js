import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
        // onPress={() => navigation.push('Detail')}
      />
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
      <Button
        title="HeaderLess페이지 열기"
        onPress={() => navigation.navigate('Headerless')}
      />
      <Button
        title="TodoList 열기"
        onPress={() => navigation.navigate('TodoList')}
      />
    </View>
  );
};

export default HomeScreen;
