import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-web';

const InfoUserScreen = () => {

    return (
        <View>
            <Text style={styles.textStyle}>Nome:</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textStyle}>Idade:</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.textStyle}>E-mail:</Text>
            <TextInput style={styles.input} placeholder="example@email.com" />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        margin: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default InfoUserScreen