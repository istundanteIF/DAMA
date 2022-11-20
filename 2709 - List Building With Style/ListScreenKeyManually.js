import React from 'react'
// IMPORT FlatList
import { Text, StyleSheet, FlatList, View } from 'react-native'

const ListScreenKeyManually = () => {
    const friends = [
        { name: 'João -', idade: '13', key: '1' },
        { name: 'Denecley -', idade: '13', key: '2' },
        { name: 'Zé -', idade: '13', key: '3' },
        { name: 'Eric -', idade: '13', key: '4' },
        { name: 'Acsa -', idade: '13', key: '5' },
        { name: 'Keverton -', idade: '13', key: '6' },
        { name: 'Laura -', idade: '13', key: '7' },
        { name: 'Cauan -', idade: '13', key: '8' },
        { name: 'Jeferson -', idade: '13', key: '9' }
    ]

    return (
        <View>
            <FlatList
                data={friends}
                renderItem={
                    (element) => {
                        return <Text style={styles.textStyle}>{element.item.name} {element.item.idade}</Text>
                    }
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor: "beige",
        borderWidth: 1
    }
})

export default ListScreenKeyManually