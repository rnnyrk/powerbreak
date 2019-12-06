import React from 'react';
import { Share, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import * as i from 'types';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';
import { Share as ShareIcon } from 'common/svg';
import theme from 'styles/theme';

import { ShareWrapper } from './styled';

const Detail: React.FC<DetailProps> = () => {
  const route = useRoute<i.DetailScreenRouteProp>();
  const { id } = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share this Powerbreak Detail!',
        url: `powerbreak://page/${id}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Container>
      <TextContent>Detail for page with id; {id}</TextContent>
      <TouchableWithoutFeedback onPress={onShare}>
        <ShareWrapper>
          <ShareIcon width={25} height={25} fill={theme.colors.white.default} />
        </ShareWrapper>
      </TouchableWithoutFeedback>
    </Container>
  );
};

type DetailProps = {};

export default Detail;
