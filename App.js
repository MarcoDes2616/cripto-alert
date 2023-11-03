import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoinListScreen from './src/screens/CoinListScreen';
import CoinDetailScreen from './src/screens/CoinDetailScreen';
import AlertForm from './src/components/AlertForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CoinList" component={CoinListScreen} />
        <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
        <Stack.Screen name="AlertForm" component={AlertForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
