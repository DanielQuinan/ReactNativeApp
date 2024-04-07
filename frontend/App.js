import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Aquele Login de Cria</Text>
      <TextInput style={styles.formInput} 
      placeholder="informe o E-mail"
      keyboardYpe="email-address"
      autoCapitalize="none"
      autoComplete="email"
      />
      <TextInput style={styles.formInput}
      placeholder="Informe a senha"
      autoCapitalize="none"
      secureTextEntry
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.formButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a Senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo Usuário</Text>
        </Pressable>
      </View>
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
  formTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'pink',
      margin: 10,
  },
  formInput: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
      backgroundColor: 'pink',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
  },
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: 'pink',
  }
});
