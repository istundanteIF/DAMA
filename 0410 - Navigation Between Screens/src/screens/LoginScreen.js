import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

const LoginScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View>
            <Text style={styles.textStyle}>Usuário:</Text>
            <TextInput style={styles.input} placeholder="Usuário"/>
            <Text style={styles.textStyle}>Senha:</Text>
            <TextInput style={styles.input} placeholder="Senha"/><br/>

            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Home')
                }}
                title="Login" />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default LoginScreen



