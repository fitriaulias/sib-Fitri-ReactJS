import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import ColumnScreen from './screens/Column';
import TextScreen from './screens/TextScreen';
import ScrollViewScreen from './screens/ScrollView';
import FlatListScreen from './screens/FlatList';

const Stack = createNativeStackNavigator()

export default function App() {
  return ( 
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Pages Home"}} />

        <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Pages Profile"}} />

        <Stack.Screen
        name="Column"
        component={ColumnScreen}
        options={{ title: "Pages Column"}} />
        
        <Stack.Screen
        name="Text"
        component={TextScreen}
        options={{ title: "Pages Text"}} />

        <Stack.Screen
        name="ScrollView"
        component={ScrollViewScreen}
        options={{ title: "Pages ScrollView"}} />

        <Stack.Screen
        name="FlatList"
        component={FlatListScreen}
        options={{ title: "Pages FlatList"}} />
    </Stack.Navigator>
  </NavigationContainer> 
  )
}

