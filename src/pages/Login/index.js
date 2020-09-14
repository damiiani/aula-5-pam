import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Alert, TextInput,
} from 'react-native';

import styles from './styles';

function Login({ navigation: { replace } }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function logIn() {
    if (login === '' || password === '') {
      Alert.alert(
        'Preenchimento obrigatório!',
        'Informe o login e a senha',
        [{ text: 'OK' }],
      );
    } else {
      replace('Home', { login });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={(l) => setLogin(l)}
          value={login}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(p) => setPassword(p)}
          value={password}
        />

        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
