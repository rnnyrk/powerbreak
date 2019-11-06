import React, { memo } from 'react';
import Animated from 'react-native-reanimated';
import { clamp, interpolateColor } from 'react-native-redash';

import { TextContent } from 'common/typography';

import { TriggerContainer, SearchContainer } from './styled';

const grey = {
  r: 186,
  g: 187,
  b: 199
};

const primary = {
  r: 56,
  g: 132,
  b: 255
};

const MARGIN_TOP = 32;
const CONTAINER_HEIGHT = 100;
export const THRESHOLD = CONTAINER_HEIGHT + MARGIN_TOP;

export default memo(({ translateY }: SearchProps) => {
  const chevronTranslateY = translateY;
  const searchTranslateY = clamp(chevronTranslateY, 0, THRESHOLD);

  const backgroundColor = interpolateColor(translateY, {
    inputRange: [CONTAINER_HEIGHT, THRESHOLD],
    outputRange: [grey, primary]
  }) as Animated.Node<number>;

  return (
    <TriggerContainer height={CONTAINER_HEIGHT}>
      <SearchContainer
        as={Animated.View}
        // @ts-ignore
        style={{
          backgroundColor,
          transform: [{ translateY: searchTranslateY }]
        }}
      >
        <TextContent>Add an item</TextContent>
      </SearchContainer>
    </TriggerContainer>
  );
});

type SearchProps = {
  translateY: Animated.Value<number>;
};
