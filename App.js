import React from 'react';
import HomeScreen from './screens/stack/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './screens/stack/DetailScreen';
import TodoScreen from './screens/stack/TodoScreen';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderlessScreen from './screens/stack/HeaderlessScreen';
import BottomTabApp from './screens/bottomTab/BottomTabApp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoScreen}
          options={{
            headerStyle: {
              backgroundColor: '#26a69a',
            },
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabApp}
          options={{
            headerTitle: '바텀탭 네비게이터',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
