import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';
//<Image style={styles.logo} source = {require("./assets/logo.png")}/>
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text>[Logo] {"\n"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput        
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
      />
      <View style={{width:150}}>
        <Button        
          style={styles.button}
          onPress={()=> Alert.alert('Email: '+ email +'\nPassword: ' + password)}
          title="Sign in"
          color="grey"
          width="200"
        />
        <View style={styles.space} />
        <Button        
          style={styles.button}
          onPress={()=> Alert.alert('Sign Up')}
          title="Sign up"
          color="grey"
          padding="10"
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f001a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor:"white",
    lineHeight: 30,
    marginBottom: 20,
    padding: 10,
    width: 200
  },
  button: {
    marginTop:20,
    backgroundColor:"green"
  },
  logo:{
    width: 0.25,
    height: 0.25
  },
  space:{
    height: 10
  }
});
