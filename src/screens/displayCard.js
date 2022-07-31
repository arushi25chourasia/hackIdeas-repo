import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, Card} from 'react-native-elements';

import {doc, setDoc} from 'firebase/firestore';
import {db} from '../../config';

const DisplayCard = ({data, load}) => {
  let tech_st = '';
  data['tech-stack'].forEach(tech => (tech_st = tech_st + ` ${tech} |`));

  const updateLike = id => {
    const myDoc = doc(db, 'challenges', id);
    setDoc(myDoc, {like: data.like + 1}, {merge: true})
      .then(res => {
        load();
      })
      .catch(er => {
        console.log('err occ');
      });
  };
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title h4 style={styles.cardTitle}>
        {`${data.name}`}
      </Card.Title>
      <Card.Divider />

      <View style={styles.direction}>
        <View style={styles.basic}>
          <View style={styles.basic}>
            <Text style={styles.cardTitleText}>{`${data.description}`}</Text>
          </View>

          <View style={styles.basic}>
            <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>{tech_st}</Card.FeaturedSubtitle>
          </View>
        </View>
        <View style={styles.basic}>
          <Card.Image
            source={require('../assets/hackathon.png')}
            style={styles.cardImage}
          />
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.voteBox}>
          <TouchableOpacity onPress={() => updateLike(data.id)}>
            <Image source={require('../assets/like.png')} />
          </TouchableOpacity>
          <Text style={styles.likeCnt}>{data.like}</Text>
        </View>
        <Text>{`${data.CREATED_ON.substr(0, 15)}`}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#427bd2',
    borderRadius: 30,
    shadowColor: '#626567',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  cardTitle: {
    paddingTop: 5,
    color: 'black',
    fontWeight: '600',
  },
  cardTitleText: {
    color: 'white',
    paddingBottom: 5,
  },
  cardBtn: {
    margin: 5,
  },
  direction: {
    flexDirection: 'row',
  },
  cardBtnStyle: {
    width: '100%',
    borderRadius: 35,
    backgroundColor: 'white',
  },
  cardBtnTitle: {
    color: 'black',
    fontWeight: '600',
  },
  basic: {
    flex: 2,
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  cardImage: {
    borderRadius: 10,
    height: 150,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  voteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeCnt: {
    marginHorizontal: 5,
  },
});

export default DisplayCard;
