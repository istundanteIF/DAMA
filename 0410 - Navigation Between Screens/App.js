import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen'
import InfoUserScreen from './src/screens/InfoUserScreen'
import SobreScreen from './src/screens/SobreScreen'

const Stack = createNativeStackNavigator( )

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Informações" component={InfoUserScreen}/>
        <Stack.Screen name="Sobre" component={SobreScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}