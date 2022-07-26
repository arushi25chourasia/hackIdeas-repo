import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Input, Button, Card, Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = () => {
  const urlImage =
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#D6EAF8',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>Active Hackathons</Text>
      </View>

      <View style={{flex: 6}}>
        <ScrollView>
          <Card
            containerStyle={{
              marginTop: 15,
              backgroundColor: '#427bd2',
              borderRadius: 50,
              padding: 10,
            }}>
            <Card.Title
              h3
              style={{
                color: 'black',
                fontWeight: '600',
              }}>
              SPIN THE WHEEL
            </Card.Title>
            <Card.Divider />

            <Text style={{marginBottom: 10, color: 'white'}}>
              But it is a lovely room, worthy of a short description... in the
              description space! 😎
            </Text>

            <Card.Image source={{uri: urlImage}} />
            <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>
              Java | Python | Node.js
            </Card.FeaturedSubtitle>

            <Button
              title="More Info"
              containerStyle={{
                margin: 5,
              }}
              buttonStyle={{
                width: '100%',
                borderRadius: 35,
                backgroundColor: 'black',
              }}
              titleStyle={{color: 'white', fontWeight: '600'}}
            />
          </Card>
          <Card containerStyle={{marginTop: 15, backgroundColor: '#427bd2'}}>
            <Card.Title
              h3
              style={{
                color: 'black',
                fontWeight: '600',
              }}>
              SPIN THE WHEEL
            </Card.Title>
            <Card.Divider />

            <Text style={{marginBottom: 10, color: 'white'}}>
              But it is a lovely room, worthy of a short description... in the
              description space! 😎
            </Text>

            <Card.Image source={{uri: urlImage}} />
            <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>
              Java | Python | Node.js
            </Card.FeaturedSubtitle>

            <Button
              title="More Info"
              containerStyle={{
                margin: 5,
              }}
              buttonStyle={{
                width: '100%',
                borderRadius: 35,
                backgroundColor: 'black',
              }}
              titleStyle={{color: 'white', fontWeight: '600'}}
            />
          </Card>
          <Card containerStyle={{marginTop: 15, backgroundColor: '#427bd2'}}>
            <Card.Title
              h3
              style={{
                color: 'black',
                fontWeight: '600',
              }}>
              SPIN THE WHEEL
            </Card.Title>
            <Card.Divider />

            <Text style={{marginBottom: 10, color: 'white'}}>
              But it is a lovely room, worthy of a short description... in the
              description space! 😎
            </Text>

            <Card.Image source={{uri: urlImage}} />
            <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>
              Java | Python | Node.js
            </Card.FeaturedSubtitle>

            <Button
              title="More Info"
              containerStyle={{
                margin: 5,
              }}
              buttonStyle={{
                width: '100%',
                borderRadius: 35,
                backgroundColor: 'black',
              }}
              titleStyle={{color: 'white', fontWeight: '600'}}
            />
          </Card>
          <Card containerStyle={{marginTop: 15, backgroundColor: '#427bd2'}}>
            <Card.Title
              h3
              style={{
                color: 'black',
                fontWeight: '600',
              }}>
              SPIN THE WHEEL
            </Card.Title>
            <Card.Divider />

            <Text style={{marginBottom: 10, color: 'white'}}>
              But it is a lovely room, worthy of a short description... in the
              description space! 😎
            </Text>

            <Card.Image source={{uri: urlImage}} />
            <Card.FeaturedTitle>Tech Stack: </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>
              Java | Python | Node.js
            </Card.FeaturedSubtitle>

            <Button
              title="More Info"
              containerStyle={{
                margin: 5,
              }}
              buttonStyle={{
                width: '100%',
                borderRadius: 35,
                backgroundColor: 'black',
              }}
              titleStyle={{color: 'white', fontWeight: '600'}}
            />
          </Card>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>Active Hackathons</Text>
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

export default Home;
