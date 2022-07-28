import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Logo = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          resizeMode="center"
          source={require('../assets/logos/logo.jpeg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#427bd2',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
