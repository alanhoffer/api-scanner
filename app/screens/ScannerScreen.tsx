import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useNavigation } from 'expo-router';

// Define los tipos de las props

const ScannerScreen: React.FC = () => {
  const navigation: any = useNavigation();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getPermissions();
  }, [scanned]);

  const handleBarCodeScanned = async ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setData(data);

    // Navegar al formulario y pasar los datos escaneados
    navigation.replace('screens/FormScreen', { code: data });
  };

  if (hasPermission === null) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    )
  }
  if (hasPermission === false) {
    return <Text>No tienes acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Escanear de nuevo'} onPress={() => { setScanned(false), setData('') }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ScannerScreen;
