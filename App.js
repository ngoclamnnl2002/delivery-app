import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { SCREEN_NAME } from "./src/constants/screens";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_NAME.HOME}
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAME.RESTAURANT}
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAME.BASKET}
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAME.PREPARING_ORDER}
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAME.DELIVERY}
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
