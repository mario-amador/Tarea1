import React from 'react';
import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Inicio  = ({navigation}) => {
    const handlesPressMAAA = () => {
        navigation.navigate('MAAA');
    };

    const handlesPressLAMC = () => {
        navigation.navigate('LAMC');
    };

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.Contenedor}>
                <Text style={styles.Encabezado}>Biografías</Text>
                <Button title= "Mario Acosta" onPress={handlesPressMAAA} />
                <Button title= "Leo Messi" onPress={handlesPressLAMC} />
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    Contenedor:{
        alignItems: 'center',
    },
    Encabezado: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red',
        marginVertical:15,
    },

});

export default Inicio;