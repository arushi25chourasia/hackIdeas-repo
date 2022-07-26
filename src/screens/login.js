import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {doc, setDoc, getDoc} from 'firebase/firestore';
import {db} from '../../config';

import {Input, Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = ({navigation}) => {
  const [indicate, setIndicate] = React.useState(false);
  const [empId, setEmpId] = React.useState(null);

  const CheckEmployee = async () => {
    if (empId.length > 0) {
      setIndicate(true);
      getDoc(doc(db, 'employees', empId))
        .then(snapshot => {
          if (snapshot.data() !== null && snapshot.data() !== undefined) {
            setIndicate(false);
            navigation.navigate('Home');
          } else {
            alert('kindly add valid id');
            setEmpId(null);
            setIndicate(false);
          }
        })
        .catch(er => {
          console.log('err submit', er);
        });
    } else {
      alert('kindly add valid id');
      setEmpId(null);
    }
  };
  return (
    <View
      style={{flexDirection: 'column', flex: 1, backgroundColor: '#427bd2'}}>
      <View
        style={{flex: 2, justifyContent: 'flex-end', paddingHorizontal: 20}}>
        <Text style={{fontSize: 50}}>Welcome,</Text>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: 'white',
          borderRadius: 50,
          justifyContent: 'flex-start',
          padding: 60,
        }}>
        <Input
          label="Employee ID"
          labelStyle={{color: 'black'}}
          placeholder="type your employee id"
          leftIcon={<Image source={require('../assets/id.png')} />}
          onChangeText={text => setEmpId(text.trim())}
        />
        <View>
          <Button
            title="Login"
            containerStyle={{
              margin: 5,
            }}
            buttonStyle={{
              width: '100%',
              borderRadius: 35,
              backgroundColor: '#427bd2',
            }}
            titleStyle={{color: 'white', fontWeight: '600'}}
            onPress={() => CheckEmployee()}
          />
        </View>
        {indicate ? (
          <View style={{padding: 40}}>
            <ActivityIndicator size="large" color="#427bd2" />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
});

export default Login;
