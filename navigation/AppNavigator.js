import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../Screens/Homescreen";
// Import other screens like SendScreen, ReceiveScreen, SettingsScreen

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen} />
      {/* Add other screens here */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
