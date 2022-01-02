import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './src/components/DrawerContent';
import { AuthContext } from './src/components/Autentication';
import Home from './src/screens/Home';
import Account from './src/screens/Account';
import Support from './src/screens/Support';
import ShowResults from './src/screens/ShowResults';
import Login from './src/screens/Login';
import Translator from './src/screens/Translator';
import RegisterStepOne from './src/screens/registerUser/RegisterStepOne';
import RegisterStepTwo from './src/screens/registerUser/RegisterStepTwo';
import RegisterStepThree from './src/screens/registerUser/RegisterStepThree';
import RegisterStepFour from './src/screens/registerUser/RegisterStepFour';
import RegisterStepFive from './src/screens/registerUser/RegisterStepFive';
import RegisterStepSix from './src/screens/registerUser/RegisterStepSix';

import RegisterPStepTwo from './src/screens/registerProfessional/RegisterPStepTwo';
import RegisterPStepThree from './src/screens/registerProfessional/RegisterPStepThree';
import RegisterPStepFour from './src/screens/registerProfessional/RegisterPStepFour';
import RegisterPStepFive from './src/screens/registerProfessional/RegisterPStepFive';
import RegisterPStepSix from './src/screens/registerProfessional/RegisterPStepSix';
import RegisterPStepLanguage from './src/screens/registerProfessional/RegisterPStepLanguage';
import RegisterPStepSeven from './src/screens/registerProfessional/RegisterPStepSeven';
import RegisterPStepEight from './src/screens/registerProfessional/RegisterPStepEight';
import RegisterPStepNine from './src/screens/registerProfessional/RegisterPStepNine';

import UserToProfessionalOne from './src/screens/UserToProfessional/UserToProfessionalOne';
import UserToProfessionalLanguage from './src/screens/UserToProfessional/UserToProfessionalLanguage';
import UserToProfessionalTwo from './src/screens/UserToProfessional/UserToProfessionalTwo';
import UserToProfessionalThree from './src/screens/UserToProfessional/UserToProfessionalThree';
import UserToProfessionalFour from './src/screens/UserToProfessional/UserToProfessionalFour';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('Deus é fiel');
    },
    signOut: () => {
      setUserToken(null);
    }
  }), []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {userToken != null ? (
          <>
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}
              initialRouteName="Home"
            >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Account" component={Account} />
              <Drawer.Screen name="Support" component={Support} />
              <Drawer.Screen name="ShowResults" component={ShowResults} />
              <Drawer.Screen name="Translator" component={Translator} />

              <Drawer.Screen name="UserToProfessionalOne" component={UserToProfessionalOne} />
              <Drawer.Screen name="UserToProfessionalLanguage" component={UserToProfessionalLanguage} />
              <Drawer.Screen name="UserToProfessionalTwo" component={UserToProfessionalTwo} />
              <Drawer.Screen name="UserToProfessionalThree" component={UserToProfessionalThree} />
              <Drawer.Screen name="UserToProfessionalFour" component={UserToProfessionalFour} />
            </Drawer.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
              <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
              <Stack.Screen name="RegisterStepThree" component={RegisterStepThree} />
              <Stack.Screen name="RegisterStepFour" component={RegisterStepFour} />
              <Stack.Screen name="RegisterStepFive" component={RegisterStepFive} />
              <Stack.Screen name="RegisterStepSix" component={RegisterStepSix} />

              <Stack.Screen name="RegisterPStepTwo" component={RegisterPStepTwo} />
              <Stack.Screen name="RegisterPStepThree" component={RegisterPStepThree} />
              <Stack.Screen name="RegisterPStepFour" component={RegisterPStepFour} />
              <Stack.Screen name="RegisterPStepFive" component={RegisterPStepFive} />
              <Stack.Screen name="RegisterPStepSix" component={RegisterPStepSix} />
              <Stack.Screen name="RegisterPStepLanguage" component={RegisterPStepLanguage} />
              <Stack.Screen name="RegisterPStepSeven" component={RegisterPStepSeven} />
              <Stack.Screen name="RegisterPStepEight" component={RegisterPStepEight} />
              <Stack.Screen name="RegisterPStepNine" component={RegisterPStepNine} />
            </Stack.Navigator>
          </>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
