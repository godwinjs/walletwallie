import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';

import Tabs from "./navigation/tabs";
import { SignUp } from "./screens";
import useFonts from './hooks/useFonts';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
        background: "#eee"
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [IsReady, SetIsReady] = React.useState(false);

    const LoadFonts = async () => {
        await useFonts();
      };
    
      if (!IsReady) {
        return (
          <AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={() => {console.log('omo eh no load o...')}}
          />
        );
      }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />
                {/* Tabs: arrangements matters not*/}
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;