import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header } from '../common/Header';

export const Home = (props) => {
  return (
    <View>
      <Header title={'Login'} />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  );
};
