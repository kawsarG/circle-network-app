import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from './Navigations/MainNavigation';

import {DrawerContent} from './Navigations/DrawerContent';
import {AboutStackScreen,SupportStackScreen,PackagesStackScreen,LiveTvStackScreen,FtvStackScreen,MoviesStackScreen,WebsiteStackScreen,BkshStackScreen,NagadStackScreen} from './Navigations/MainNavigation';
const Drawer = createDrawerNavigator();

 const App = () => {
  return (
   <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
       <Drawer.Screen name='Home' children={MainNavigator}/>
       <Drawer.Screen name='About' component={AboutStackScreen}/>
       <Drawer.Screen name='Support' component={SupportStackScreen}/>
       <Drawer.Screen name='Packages' component={PackagesStackScreen}/>
       <Drawer.Screen name='LiveTv' component={LiveTvStackScreen}/>
       <Drawer.Screen name='Ftv' component={FtvStackScreen}/>
       <Drawer.Screen name='Movies' component={MoviesStackScreen}/>
       <Drawer.Screen name='Website' component={WebsiteStackScreen}/>
       <Drawer.Screen name='Bksh' component={BkshStackScreen}/>
       <Drawer.Screen name='Nagad' component={NagadStackScreen}/>
     </Drawer.Navigator>
   </NavigationContainer>
  );
};
export default App;