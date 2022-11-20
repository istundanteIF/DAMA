import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>
            <View style={styles.buttonView}>
                <Button
                    onPress={() => { navigation.navigate('LoginScreen') }}
                    title="Go to Login Screen" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        padding: 10
    },
    buttonView: {
        marginVertical: 2
    }
})

export default HomeScreen