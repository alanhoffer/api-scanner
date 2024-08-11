// src/screens/FormScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';



const FormScreen = () => {
  const route = useRouteInfo();
  const navigation:any = useNavigation();
  const { code } = route.params;
  const [tare, setTare] = useState<string>('0');
  const [weight, setWeight] = useState<string>('0');

  const handleSave = async () => {
    const newEntry = { id: Date.now().toString(), code, tare: parseFloat(tare), weight: parseFloat(weight) };
    const storedData = await AsyncStorage.getItem('scannedData');
    const scannedData = storedData ? JSON.parse(storedData) : [];
    scannedData.push(newEntry);
    await AsyncStorage.setItem('scannedData', JSON.stringify(scannedData));
    navigation.navigate('screens/ListScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        <Text style={styles.title}>Código Escaneado</Text>
        <Text style={styles.code}>{code}</Text>
      </View>
      <Text style={styles.title}>Tara en kg</Text>
      <TextInput
        style={styles.input}
        placeholder="Tara"
        keyboardType="numeric"
        value={tare}
        onChangeText={setTare}
      />
      <Text style={styles.title}>Peso en kg</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <View >
          <Text style={styles.buttonText}>Guardar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  codeContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
  code: {
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#53bce9',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default FormScreen;
