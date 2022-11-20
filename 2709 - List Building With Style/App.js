import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ListScreenKeyManually from './src/screens/ListScreenKeyManually';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Lista de Amigos:</Text><b/>
      <ListScreenKeyManually />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5,
  }
})