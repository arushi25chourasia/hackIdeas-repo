import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../../config';

const Home = () => {
  const [activeChallenges, setActiveChallenges] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const urlImage =
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  const DisplayCard = ({data}) => {
    let tech_st = '';
    data['tech-stack'].forEach(tech => (tech_st = tech_st + ` ${tech} |`));

    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Title h3 style={styles.cardTitle}>
          {data.name}
        </Card.Title>
        <Card.Divider />

        <Text style={styles.cardTitleText}>{data.description}</Text>

        <Card.Image source={{uri: urlImage}} />
        <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
        <Card.FeaturedSubtitle>{tech_st}</Card.FeaturedSubtitle>

        <Button
          title="More Info"
          containerStyle={styles.cardBtn}
          buttonStyle={styles.cardBtnStyle}
          titleStyle={styles.cardBtnTitle}
        />
      </Card>
    );
  };

  useEffect(() => {
    console.log('fetch cards from firebase');
    const rows = collection(db, 'challenges');
    getDocs(rows)
      .then(snapshot => {
        let challenges = [];
        snapshot.docs.forEach(item => {
          challenges.push({...item.data(), id: item.id});
        });
        setActiveChallenges(challenges);
        setLoading(false);
      })
      .catch(er => {
        console.log('err submit', er);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30}}>Active Hackathons</Text>
      </View>

      <View style={{flex: 6}}>
        {loading ? (
          <View style={{padding: 40}}>
            <ActivityIndicator size="large" color="#427bd2" />
          </View>
        ) : (
          <ScrollView>
            {activeChallenges.map(item => {
              return <DisplayCard data={item} />;
            })}
          </ScrollView>
        )}
      </View>
      <View style={styles.containerLower}>
        <Text style={{fontSize: 30}}>Past Hackathons</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D6EAF8',
  },
  heading: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerLower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 15,
    backgroundColor: '#427bd2',
    borderRadius: 50,
    padding: 10,
  },
  cardTitle: {
    color: 'black',
    fontWeight: '600',
  },
  cardTitleText: {
    marginBottom: 10,
    color: 'white',
  },
  cardBtn: {
    margin: 5,
  },
  cardBtnStyle: {
    width: '100%',
    borderRadius: 35,
    backgroundColor: 'black',
  },
  cardBtnTitle: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Home;
