import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen'; // Importar SplashScreen de Expo



export default function index() {
  const navigation: any = useNavigation();


  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync(); // Previene que el splash se oculte automáticamente
      navigation.setOptions({
        headerShown: false,
      });
  
      const timeout = setTimeout(() => {
        navigation.replace('screens/InstructionsScreen');
        SplashScreen.hideAsync(); // Oculta el splash una vez que navegas a la siguiente pantalla
      }, 2000);
  
      return () => clearTimeout(timeout);
    };
  
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-apitool.png')}
        style={styles.splashImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Cambia el color de fondo si es necesario
  },
  splashImage: {
    resizeMode: 'contain',
    width: 150,
    height: 200,
  },
});

