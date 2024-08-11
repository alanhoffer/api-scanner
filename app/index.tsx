import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';


export default function index() {
  const navigation: any = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    // Simula un tiempo de carga para la pantalla de splash
    const timeout = setTimeout(() => {
      navigation.navigate('screens/InstructionsScreen'); // Reemplaza 'Instructions' con la pantalla que desees mostrar después de la splash
    }, 2000); // Duración de la pantalla de splash en milisegundos (aquí 2 segundos)

    return () => clearTimeout(timeout);
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

