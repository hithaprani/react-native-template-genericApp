import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, createContext, useEffect, useState } from 'react';
import { darkColors, lightColors } from '../Resources/Colors';
import { darkImages, lightImages } from '../Resources/Images';
import EnglishStrings from '../Resources/Strings/Strings-en.json';

export const AppContext = createContext({
  strings: EnglishStrings,
  colors: lightColors,
  images: lightImages,
  setLanguage: () => {},
  setAppTheme: () => {},
});

export const AppProvider = (props) => {
  const [language, setLanguage] = useState('Eng');
  const [appTheme, setAppTheme] = useState('light');
  const initialize = async () => {
    setLanguage((await AsyncStorage.getItem('language')) || 'Eng');
    setAppTheme((await AsyncStorage.getItem('appTheme')) || 'light');
  };

  useEffect(() => {
    initialize();
  }, []);

  const strings = () => {
    switch (language) {
      case 'Eng':
        return EnglishStrings;
      default:
        return EnglishStrings;
    }
  };

  return (
    <AppContext.Provider
      value={{
        strings: strings(),
        colors: appTheme === 'light' ? lightColors : darkColors,
        images: appTheme === 'light' ? lightImages : darkImages,
        setLanguage: (value) => {
          AsyncStorage.setItem('language', value);
          setLanguage(value);
        },
        setAppTheme: (value) => {
          AsyncStorage.setItem('appTheme', value);
          setAppTheme(value);
        },
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppData = () => useContext(AppContext);
