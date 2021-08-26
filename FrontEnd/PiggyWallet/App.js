import React, { Component } from 'react';
// import { View,  } from 'react-native';
// import { Container, Header, Content, Button, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screensEnabled } from 'react-native-screens';
import Login from './Screens/Login';
import Signin from './Screens/Signin';
import Home from './Screens/Home';
import LoadData from './Screens/LoadData';
import DashBoard from './Screens/DashBoard';
import Expenses from './Screens/Expenses';
import Income from './Screens/Income';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LoadData" component={LoadData} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="DashBoard" component={DashBoard}/>
          <Stack.Screen name="Expenses" component={Expenses}/>
          <Stack.Screen name="Income" component={Income}/>



        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}