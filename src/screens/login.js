import React from 'react';
import {Input, Button} from 'react-native-elements';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../config';

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
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{fontSize: 50}}>Welcome,</Text>
      </View>
      <View style={styles.subContainer}>
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
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            titleStyle={styles.btnTitle}
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
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#427bd2',
  },
  headingContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  subContainer: {
    flex: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'flex-start',
    padding: 60,
  },
  btnContainer: {
    margin: 5,
  },
  btn: {
    width: '100%',
    borderRadius: 35,
    backgroundColor: '#427bd2',
  },
  btnTitle: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Login;
