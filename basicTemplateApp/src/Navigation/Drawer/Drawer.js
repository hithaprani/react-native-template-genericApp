import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export const CustomDrawer = (data) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          data.navigation.toggleDrawer();
        }}>
        <Text>close drawer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
