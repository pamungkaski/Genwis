/**
 * Created by iampamungkas on 2/13/18.
 */


import React from 'react'
// Replace Dashboard with the component name
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Text, StyleSheet } from 'react-native'
// Screens
import HomepageScreen from './views/Homepage/HomepageScreen'
import HistoryScreen from './views/History/HistoryScreen'
import ProfileScreen from './views/Profile/ProfileScreen'

const style = StyleSheet.create({
  tabText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily:'Poppins-Medium',
    color: '#27ae60'
  }
})


const routeConfiguration = {
  Homepage: {
    screen: HomepageScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name={`ios-home`} size={20} color={tintColor} />,
      tabBarLabel: ({ focused }) => (focused ? <Text style={style.tabText}>Home</Text>  : ''),
    },
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name={`ios-time`} size={20} color={tintColor} />,
      tabBarLabel: ({ focused }) => (focused ? <Text style={style.tabText}>History</Text> : ''),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name={`ios-person`} size={20} color={tintColor} />,
      tabBarLabel: ({ focused }) => (focused ? <Text style={style.tabText}>Profile</Text>  : ''),
    },
  },
}

// going to disable the header for now
const TabNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Homepage',
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  tabBarOptions: {
    activeTintColor: '#27ae60',
    inactiveTintColor: '#d2d0ce',
    style: {
      backgroundColor: '#fefefe',
      borderTopWidth: 1,
      borderTopColor: 'white',
      elevation: 1
    },
  },
}

export const NavigatorDashboard = TabNavigator(routeConfiguration, TabNavigatorConfiguration)
