import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

const LoginScreen = (props) => {
    console.log(props)
    const navigation = props.navigation
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [alerta, setAlerta] = useState('')

    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.textStyle}>Usuário:</Text>
                <TextInput
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    style={styles.input}
                />
                
                <Text style={styles.textStyle}>Senha:</Text>
                <TextInput 
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    style={styles.input}
                />

                <Button 
                    onPress={() => {
                        //if (nome == '1' && senha == '1') {
                            navigation.navigate('Home')
                       // } else {
                       //     setAlerta('Dados inválidos')
                       // }
                    }}
                    title="Login"
                />
                <Text style={styles.statusText}>{alerta}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 5,
        backgroundColor: 'rgb(250, 250, 210)',
        height: '100%'
    },
    textStyle: {
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    statusText: {
        padding: 10,
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default LoginScreen



