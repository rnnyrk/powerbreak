import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDarkMode } from 'react-native-dark-mode';

import { logoutFromGoogle } from 'services/socialLogin';
import { Container } from 'common/general';
import { TextContent } from 'common/typography';


import { ExtendedButton } from './styled';

const Dashboard: React.FC<DashboardProps> = () => {
  const isDarkMode = useDarkMode();
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ marginBottom: 16 }}>
        <TextContent>
          isDarkMode: {isDarkMode}
        </TextContent>
      </View>

      <ExtendedButton
        onPress={logoutFromGoogle}
        title="Logout"
        variant="secondary"
      />
      <ExtendedButton
        onPress={() => navigation.navigate('FaqModal')}
        title="View FAQ"
        testID="faqButton"
      />
    </Container>
  );
};

type DashboardProps = {};

export default Dashboard;
