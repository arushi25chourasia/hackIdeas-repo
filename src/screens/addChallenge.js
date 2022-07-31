import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Input} from 'react-native-elements';

import {doc, setDoc, collection, getDocs} from 'firebase/firestore';
import {db} from '../../config';

const AddChallenge = ({navigation}) => {
  const [formData, setFormData] = React.useState({});
  const [indicate, setIndicate] = React.useState(false);

  const submitValues = async () => {
    setIndicate(true);

    const res = await getDocs(collection(db, 'challenges'));
    let cnt = res.docs.length;

    const myDoc = doc(db, 'challenges', `CHA-${++cnt}`);

    const docData = {
      CREATED_BY: formData.CREATED_BY.split(' '),
      CREATED_ON: new Date().toString(),
      TAGS: formData.TAGS.split(' '),
      description: formData.description,
      like: 0,
      name: formData.name,
      ['tech-stack']: formData['tech-stack'].split(' '),
    };

    setDoc(myDoc, docData)
      .then(res => {
        alert('data saved');
        setIndicate(false);
        navigation.goBack();
      })
      .catch(er => {
        console.log('err occ');
        setIndicate(false);
      });

    console.log(formData);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back.png')}
            style={styles.backBtn}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Add Challenge</Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          label="Challenge Title"
          labelStyle={styles.inputLabel}
          leftIcon={<Image source={require('../assets/pen.png')} />}
          onChangeText={text => setFormData({...formData, name: text})}
        />
        <Input
          multiline
          numberOfLines={6}
          inputContainerStyle={styles.description}
          label="Description"
          labelStyle={styles.inputLabel}
          onChangeText={text => setFormData({...formData, description: text})}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>Separate by space</Text>
        </View>
        <Input
          label="Tech Stack"
          labelStyle={styles.inputLabel}
          leftIcon={<Image source={require('../assets/pen.png')} />}
          onChangeText={text =>
            setFormData({...formData, ['tech-stack']: text})
          }
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>
            Separate by space and must include #
          </Text>
        </View>
        <Input
          label="Tags"
          labelStyle={styles.inputLabel}
          leftIcon={<Image source={require('../assets/pen.png')} />}
          onChangeText={text => setFormData({...formData, TAGS: text})}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>
            Add Employee id Separated by space
          </Text>
        </View>
        <Input
          label="Created By"
          labelStyle={styles.inputLabel}
          leftIcon={<Image source={require('../assets/pen.png')} />}
          onChangeText={text => setFormData({...formData, CREATED_BY: text})}
        />
      </View>
      <View style={styles.rightBtnView}>
        <TouchableOpacity style={styles.button} onPress={submitValues}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      {indicate ? (
        <View style={{padding: 40}}>
          <ActivityIndicator size="large" color="#427bd2" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    right: 60,
  },
  formContainer: {
    width: '80%',
  },
  inputLabel: {
    color: 'black',
  },
  description: {
    borderWidth: 1,
    borderColor: 'black',
    height: 90,
  },
  infoBox: {
    padding: 3,
    height: 20,
    backgroundColor: '#FAD7A0',
    borderRadius: 5,
  },
  infoBoxText: {
    alignSelf: 'center',
  },
  rightBtnView: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A9CCE3',
    borderRadius: 10,
    borderColor: '#1B4F72',
  },
});

export default AddChallenge;
