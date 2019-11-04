import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { LoadingContainer } from './styled';

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, [navigation]);

  return (
    <LoadingContainer>
      <Text>Loading screen</Text>
    </LoadingContainer>
  );
};

type LoadingScreenProps = {};

export default LoadingScreen;
