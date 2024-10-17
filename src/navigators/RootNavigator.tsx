import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {

  const CustomTabBarButton  = ({children}) => {
    
    return(
  <TouchableOpacity style={{
  width:60, 
  height:60, 
  borderRadius:50, 
  backgroundColor:"#5C3EBC", 
  alignItems:"center",
  justifyContent:"center",
  marginTop:-8,
  borderWidth:3,
  borderColor:"white",
  
  }}>
    <Entypo name='list' size={32} color={"#FFD00C"}/>
  </TouchableOpacity>
    )
  }
  return (
   
    <Tab.Navigator
    initialRouteName = "Ana Sayfa"
    screenOptions={{
        tabBarHideOnKeyboard: true, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown:false,
        tabBarStyle: {
            height:80,
        },   
    }} >
       <Tab.Screen
          name="AnaSayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bildirimler"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sat"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
          
        />
        <Tab.Screen
          name="Sohbet"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
          
        />
        <Tab.Screen
          name="İlanlarım"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} /> 
          ),
          }}
        />
      </Tab.Navigator>
    );
  }
  


export default RootNavigator;
