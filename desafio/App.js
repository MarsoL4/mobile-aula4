import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  nomeCadastro = ''

  onPressed = (data) => {

  }

  mudaTexto = (data) => {
    nomeCadastro = data;
    console.log(nomeCadastro);
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput value='' onChangeText={mudaTexto(data)} />
      <Button title='Cadastrar' onPress={onPressed}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
