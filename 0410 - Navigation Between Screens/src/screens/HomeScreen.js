import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo, Isaac, ao nosso primeiro projeto!</Text><b/>
            <Text style={styles.text}>Agora nós podemos navegar entre telas!</Text><b/>
            <Text style={styles.text}>Como você está se sentindo?</Text><b/>

            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Informações')
                }}
                title="Informações do Usuário"/>
            <Text>-</Text>
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Sobre')
                }}
                title="Sobre"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        margin: 10,
        alignItems: 'center'
      },
    text: {
        fontSize: 15,
        margin: 15
    }
})

export default HomeScreen