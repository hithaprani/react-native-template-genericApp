/**
 * For Language add Strings-lan.json file in
 * ../Resources/Strings/ folder and do import as done for Engliosh language
 * and make sure to use the keywords same see included json files version key is same
 *
 * For app theme you can use same or different colors and images as
 * required by following instuctions in respective resouce files
 *
 * To make it as change as the app opens you need to set value to
 * AsyncStorage('lanuage/appTheme') when user changes language/theme
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, createContext, useEffect, useState } from 'react';
import { AppConfigData } from '../Configurations/Configuration';
import { darkColors, lightColors } from '../Resources/Colors';
import { darkImages, lightImages } from '../Resources/Images';
import EnglishStrings from '../Resources/Strings/Strings-en.json';
import SpanishStrings from '../Resources/Strings/Strings-es.json';

export const AppContext = createContext({
  strings: EnglishStrings,
  colors: lightColors,
  images: lightImages,
  setLanguage: () => {},
  setAppTheme: () => {},
});

export const AppProvider = (props) => {
  const [language, setLanguage] = useState(AppConfigData.defaultLanguage);
  const [appTheme, setAppTheme] = useState(AppConfigData.defaultTheme);

  const initialize = async () => {
    setLanguage(
      (await AsyncStorage.getItem('language')) || AppConfigData.defaultLanguage,
    );
    setAppTheme(
      (await AsyncStorage.getItem('appTheme')) || AppConfigData.defaultTheme,
    );
  };

  useEffect(() => {
    initialize();
  }, []);

  const strings = () => {
    //To-do: if new language is added, add a new case similar to Eng/Spa
    switch (language) {
      case 'Eng':
        return EnglishStrings;
      case 'Spa':
        return SpanishStrings;
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
