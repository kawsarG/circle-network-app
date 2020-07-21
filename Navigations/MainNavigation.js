import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const PackagesStack = createStackNavigator();
const SupportStack = createStackNavigator();
const ContactStack = createStackNavigator();
const LiveTvStack = createStackNavigator();
const FtvStack = createStackNavigator();
const WebsiteStack = createStackNavigator();
const MoviesStack = createStackNavigator();
const BkshStack = createStackNavigator();
const NagadStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import Home from '../Screens/Home';
import About from '../Screens/About';
import Movies from '../Screens/Movies';
import Ftp from '../Screens/Ftp';
import Support from '../Screens/Support';
import Contact from '../Screens/Contact';
import Website from '../Screens/Website';
import LiveTv from '../Screens/LiveTv';
import Packages from '../Screens/Packages';
import Bksh from '../Screens/Bksh';
import Nagad from '../Screens/Nagad';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HomeStackScreen = ({navigation}) =>{
  return <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387',
    },
    headerTintColor:'white',
  }}>
    <HomeStack.Screen name='Home' component={Home} options={{
        title:'Circle Network',
        headerTitleAlign:'center',
      headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#009387' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
    }}/>
</HomeStack.Navigator>
}
 export const AboutStackScreen = ({navigation}) =>{
  return <AboutStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#d02860',
    },
    headerTintColor:'white',
  }}>
    <AboutStack.Screen name='About' component={About} options={{
        headerTitleAlign:'center',
      headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
    }}/>
</AboutStack.Navigator>
}
 export const SupportStackScreen = ({navigation}) =>{
  return <SupportStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#1f65ff',
    },
    headerTintColor:'white',
  }}>
    <SupportStack.Screen name='Support' component={Support} options={{
        headerTitleAlign:'center',
      headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#1f65ff' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
    }}/>
</SupportStack.Navigator>
}
 export const PackagesStackScreen = ({navigation}) =>{
  return <PackagesStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#694fad',
    },
    headerTintColor:'white',
  }}>
    <PackagesStack.Screen name='Packages' component={Packages} options={{
        headerTitleAlign:'center',
      headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#694fad' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
    }}/>
</PackagesStack.Navigator>
}


export const ContactStackScreen = ({navigation}) =>{
    return <ContactStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <ContactStack.Screen name='Contact' component={Contact} options={{
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </ContactStack.Navigator>
  }
  export const LiveTvStackScreen = ({navigation}) =>{
    return <LiveTvStack.Navigator screenOptions={{
      headerStyle:{
        title:'Live TV',
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <LiveTvStack.Screen name='LiveTv' component={LiveTv} options={{
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </LiveTvStack.Navigator>
  }
  export const FtvStackScreen = ({navigation}) =>{
    return <FtvStack.Navigator screenOptions={{
      title:'FTP Server',
      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <FtvStack.Screen name='Ftv' component={Ftp} options={{
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </FtvStack.Navigator>
  }
  export const MoviesStackScreen = ({navigation}) =>{
    return <MoviesStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <MoviesStack.Screen name='Movies' component={Movies} options={{
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </MoviesStack.Navigator>
  }
  export const WebsiteStackScreen = ({navigation}) =>{
    return <WebsiteStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <WebsiteStack.Screen name='Website' component={Website} options={{
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </WebsiteStack.Navigator>
  }
  export const BkshStackScreen = ({navigation}) =>{
    return <BkshStack.Navigator screenOptions={{

      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <BkshStack.Screen name='Bksh' component={Bksh} options={{
          title:'Bkash Payment',
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </BkshStack.Navigator>
  }

  export const NagadStackScreen = ({navigation}) =>{
    return <NagadStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860',
      },
      headerTintColor:'white',
    }}>
      <NagadStack.Screen name='Nagad' component={Nagad} options={{
          title:'Nagad Payment',
          headerTitleAlign:'center',
        headerLeft:()=>(<Icon.Button name='ios-menu' siz={25} backgroundColor='#d02860' onPress={()=>{navigation.toggleDrawer()}}></Icon.Button>)
      }}/>
  </NagadStack.Navigator>
  }
const MainNavigator = () =>{
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor:'#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={SupportStackScreen}
            options={{
              tabBarLabel: 'Support',
              tabBarColor:'#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Packages"
            component={PackagesStackScreen}
            options={{
              tabBarLabel: 'Packages',
              tabBarColor:'#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={ContactStackScreen}
            options={{
              tabBarLabel: 'Contact',
              tabBarColor:'#d02860',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-people" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
}

export default MainNavigator;
