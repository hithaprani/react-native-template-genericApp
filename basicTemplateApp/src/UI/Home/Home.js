import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header } from '../common/Header';
import { Button } from '../common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { homeStyles } from './Home.styles';
import { useAppData } from '../../Providers/AppConfig';

export const Home = (props) => {
  const appData = useAppData();
  const styles = homeStyles(appData);
  return (
    <View>
      <Header title={'Login'} />
      <SafeAreaView>
        <Text style={styles.textStyle}>Home</Text>
        <Button
          title={'Logout'}
          onPress={() => {
            AsyncStorage.removeItem('login');
            props.navigation.reset({
              index: 1,
              routes: [{ name: 'landingScreen' }],
            });
          }}
        />
      </SafeAreaView>
    </View>
  );
};
