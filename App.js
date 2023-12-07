import 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SplashScreen from './screens/SplashScreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Automations from './screens/Automations';
import { Image } from 'react-native';
import ContinueAutomation from './screens/ContinueAutomation';
import ConfirmAutomation from './screens/ConfirmAutomation';




const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="ContinueAutomation" component={ContinueAutomation} />
      <Stack.Screen name="ConfirmAutomation" component={ConfirmAutomation} />
    </Stack.Navigator>
  )
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      // StatusBarColor: "red",
      headerStyle: {
        backgroundColor: "#dfeef7"
      },
      headerTintColor: "black",
    }}>
      <Drawer.Screen name="AUTOcedi" component={Home} />
      <Drawer.Screen name="Automation" component={Automations} />

    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer screenOptions={{
      headerShown: false
    }}>
      <StackNav />
      {/* <DrawerNav/> */}

    </NavigationContainer>
  );
}


