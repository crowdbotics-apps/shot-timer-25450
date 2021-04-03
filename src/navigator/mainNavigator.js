import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import CalendarView221777Navigator from '../features/CalendarView221777/navigator';
import Maps221776Navigator from '../features/Maps221776/navigator';
import Tutorial221775Navigator from '../features/Tutorial221775/navigator';
import Messaging221774Navigator from '../features/Messaging221774/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
CalendarView221777: { screen: CalendarView221777Navigator },
Maps221776: { screen: Maps221776Navigator },
Tutorial221775: { screen: Tutorial221775Navigator },
Messaging221774: { screen: Messaging221774Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
