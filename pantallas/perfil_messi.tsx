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

const Perfil_MESSI = ({ navigation }) => {
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
              source={require('../imagenes/messi-trofeo-ponton-08.jpg')}
            />
            <Text style={styles.encabezado}>Lionel Andrés Messi Cuccittini</Text>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
              <Text style={styles.seccionContent}>Rosario, Argentina</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
              <Text style={styles.seccionContent}>24 de junio de 1987</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Apodo(s):</Text>
              <Text style={styles.seccionContent}>La Pulga y GOAT</Text>
            </View>
            <View style={styles.seccion}>
            <Text style={styles.seccionHeader}>Deporte:</Text>
              <Text style={styles.seccionContent}>Fútbol</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Equipo Actual:</Text>
              <Text style={styles.seccionContent}>Inter Miami CF</Text>
            </View>
            <View style={styles.seccion}>
              <Text style={styles.seccionHeader}>Cónyuge:</Text>
              <Text style={styles.seccionContent}>Antonela Roccuzzo</Text>
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
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0000ff',
        marginTop: 10,
        textAlign:'center',
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

    

    

export default Perfil_MESSI;
  
