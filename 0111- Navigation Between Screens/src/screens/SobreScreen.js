import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SobreScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Sobre:</Text>
            <Text style={styles.text}>Desenvolvido por ISAAC JEFERSON CONCEIÇÃO SILVA</Text>
            <Text style={styles.textStyle}>Version:</Text>
            <Text style={styles.text}>FirstApp version 1.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        margin: 10
    },
    text: {
        margin: 10
    }
})

export default SobreScreen



