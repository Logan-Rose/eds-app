import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { CheckBox } from 'react-native-elements'
//<Image style={styles.logo} source = {require("./assets/logo.png")}/>
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
    </View>
  </NativeRouter>
  );
}

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text>[Logo] {"\n"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput        
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
      />
      <View style={{width:150, backgroundColor:"green",  alignItems:'center'}}>
        <Button        
          style={styles.button}
          onPress={()=> Alert.alert('Email: '+ email +'\nPassword: ' + password)}
          title="Sign in"
          color="grey"
        />
        <View style={styles.space} />
        <Link to="/signup">
          <Text>Sign Up</Text>
        </Link>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, toggleAgree] = useState('');
  return (
    <View style={styles.container}>
      <Text>[Sign Up] {"\n"}</Text>
      <View style={styles.signUpInfo}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(firstName) => setEmail(firstName)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(lastName) => setEmail(lastName)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput        
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
        <Text>I confirm that I have not experienced COVID-19 symptoms in the past 14 days</Text>
        <CheckBox
          checked={agree}
          onPress={() => this.toggleAgree(!agree)}
          title='I agree'
        />
      </View>
      <View style={styles.space} />
      <View style={{width:150}}>
        <Button        
          style={styles.button}
          onPress={()=> Alert.alert('First Name:'+ firstName + ' Last Name:'+ lastName + '\nEmail: '+ email +'\nPassword: ' + password)}
          title="Sign Up"
          color="grey"
          width="200"
        />
      </View>
      <View style={styles.space} />
      <Link to="/">        
        <Text>Back</Text>
      </Link>
    </View>

  )
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
    borderColor: "black",
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
  },
  signUpInfo:{
    alignSelf:'center',
    margin: 100,
    backgroundColor:"white",
    padding:25
  }
});
