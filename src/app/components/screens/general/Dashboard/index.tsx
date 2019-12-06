import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { useDarkMode } from 'react-native-dark-mode';

import { logoutFromGoogle } from 'services/socialLogin';
import { Container } from 'common/general';
import { TextContent } from 'common/typography';

import { DarkModeContainer, ExtendedButton } from './styled';

const Dashboard: React.FC<DashboardProps> = () => {
  const isDarkMode = useDarkMode();
  const navigation = useNavigation();

  return (
    <Container>
      <DarkModeContainer>
        <TextContent>
          isDarkMode: {isDarkMode ? 'Yes' : 'No'}
        </TextContent>
      </DarkModeContainer>

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
