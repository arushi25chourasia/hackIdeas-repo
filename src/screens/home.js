import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import DisplayCard from './displayCard';

import {getDocs, collection} from 'firebase/firestore';
import {db} from '../../config';

const Home = ({navigation}) => {
  const [activeChallenges, setActiveChallenges] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filterData, setfilterData] = React.useState([]);

  const SortByVote = () => {
    const dummArr = activeChallenges;

    for (let i = 0; i < dummArr.length; i++) {
      for (let j = i + 1; j < dummArr.length; j++) {
        let temp = {};
        if (dummArr[i].like > dummArr[j].like) {
          temp = dummArr[i];
          dummArr[i] = dummArr[j];
          dummArr[j] = temp;
        }
      }
    }
    setfilterData(dummArr);
  };

  const SortByCreationDate = () => {
    setfilterData([]);

    const dummArr = activeChallenges;

    for (let i = 0; i < dummArr.length; i++) {
      for (let j = i + 1; j < dummArr.length; j++) {
        let temp = {};
        if (dummArr[i].CREATED_ON > dummArr[j].CREATED_ON) {
          temp = dummArr[i];
          dummArr[i] = dummArr[j];
          dummArr[j] = temp;
        }
      }
    }
    setfilterData(dummArr);
  };

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setfilterData([]);
  }, []);

  const onUpdation = React.useCallback(() => {
    setLoading(true);
    setfilterData([]);
  }, []);

  useEffect(() => {
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
        setLoading(false);
        console.log('err submit', er);
      });
  }, [loading]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTxt}>HackIdeas</Text>
      </View>
      <View style={styles.rightBtnView}>
        <TouchableOpacity style={styles.button} onPress={() => SortByVote()}>
          <Text>Sort By vote</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => SortByCreationDate()}>
          <Text>Sort By Creation Date</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loadingView}>
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#427bd2" />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }>
            {filterData.length > 0
              ? filterData.map(item => {
                  return (
                    <DisplayCard data={item} key={item.id} load={onUpdation} />
                  );
                })
              : activeChallenges.map(item => {
                  return (
                    <DisplayCard data={item} key={item.id} load={onUpdation} />
                  );
                })}
          </ScrollView>
        )}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottomImgContainer}
          onPress={() => navigation.navigate('AddChallenge')}>
          <Image
            style={styles.bottomIcon}
            source={require('../assets/add.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EAF2F8',
  },
  heading: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    borderRadius: 10,
  },
  headingTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  indicator: {
    padding: 40,
  },
  loadingView: {
    flex: 8,
  },
  bottomImgContainer: {
    position: 'absolute',
    width: 80,
    height: 100,
  },
  bottomIcon: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#EAF2F8',
  },
  rightBtnView: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  button: {
    padding: 7,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A9CCE3',
    borderRadius: 40,
    borderColor: '#1B4F72',
  },
});

export default Home;
