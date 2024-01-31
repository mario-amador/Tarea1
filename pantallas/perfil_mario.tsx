import React from 'react';

import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
Image,
Button,
} from 'react-native';
import { ScreenContext } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';

const Perfil_MARIO = ({ navigation }) => {
  const handleBackToMenu = () => {
    navigation.navigate('Home');
    };

    return (
        <SafeAreaView>
          <ScrollView 
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior="automatic">
            <Image
              style={styles.fotoPerfil}
              source={require('../imagenes/IMG-20230901-WA0024.jpg')}
            />
            <Text style={styles.encabezado}>Mario Antonio Acosta Amador</Text>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
              <Text style={styles.seccionContent}>Tegucigalpa, Honduras</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
              <Text style={styles.seccionContent}>11 de julio de 2000</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Pasatiempos:</Text>
              <Text style={styles.seccionContent}>Jugar VideoJuegos,</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionContent}>Jugar Fútbol, Escuchar Música y Viajar</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Número de Celular:</Text>
              <Text style={styles.seccionContent}>3154-7156</Text>
              </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
          <Button
            title="Volver al Inicio" onPress={handleBackToMenu} color="#0000ff" />
        </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      encabezado: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0000ff',
        marginTop: 10,
        textAlign:'center'
      },
      svContenedor: {
        alignItems: 'center',
      },
      fotoPerfil: {
        width: 200,
        height: 220,
        marginTop: 20,
      },
      seccion: {
        flexDirection: 'row',
        marginTop: 15,
        color: '#FF0000',
      },
      seccionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF0000',
      },
      seccionContent: {
        fontSize: 16,
        marginStart: 5,
        color: '#000000',
      },
      buttonContainer: {
        margin: 20,
      },
    });

    

    

export default Perfil_MARIO;
  
