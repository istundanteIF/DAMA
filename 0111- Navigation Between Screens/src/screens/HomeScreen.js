import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation
    const nome = 'Isaac'

    return (
        <View style={styles.mainView}>
            <View style={styles.container}>
                <Text style={styles.text}>Bem-vindo, {nome}, ao nosso primeiro projeto!</Text><b/>
                <Text style={styles.text}>Agora nós podemos navegar entre telas!</Text><b/>
                <Text style={styles.text}>Como você está se sentindo?</Text><b/>
                <View style={styles.space}></View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Informações')
                    }}
                    title="Informações do Usuário"/>
                <View style={styles.space}></View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Sobre')
                    }}
                    title="Sobre"/>
                <View style={styles.space}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        width: '70%'
      },
    text: {
        fontSize: 15,
        margin: 10
    },
    space: {
        width: 20,
        height: 20
    }
})

export default HomeScreen