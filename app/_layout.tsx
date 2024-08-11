import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/SplashScreen',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.hideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="screens/InstructionsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/ListScreen" options={{ title: 'Lista de Codigos' }} />
      <Stack.Screen name="screens/ScannerScreen" options={{ title: 'Scaneando codigo' }} />
      <Stack.Screen name="screens/FormScreen" options={{ title: 'Completa los datos' }} />
    </Stack>
);
}

