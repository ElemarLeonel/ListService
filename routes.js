import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './src/pages/Home';
import SettingsScreen from './src/pages/Settings';
import SearchScreen from './src/pages/Search';
import SearchButton from './src/components/SearchButton';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#033d60',
          tabBarStyle: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }
        }}>
        <Tab.Screen name="Início" component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ focused, size }) => (
              <MaterialIcons name="home" size={size}
                color={focused ? '#033d60' : '#d4d9e2'} />
            )
          }} />
        <Tab.Screen name="Pesquisar" component={SearchScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, size }) => (
              <SearchButton size={size} focused={focused} />
            )
          }} />
        <Tab.Screen name="Configurações" component={SettingsScreen}
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ focused, size }) => (
              <MaterialIcons name="settings" size={size}
                color={focused ? '#033d60' : '#d4d9e2'} />
            )
          }} />
      </Tab.Navigator>
  );
}