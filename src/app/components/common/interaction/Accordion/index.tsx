import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { useTransition, bInterpolate, bInterpolateColor } from 'react-native-redash';

import theme from 'styles/theme';
import { TextContent } from 'common/typography';
import { ChevronDown } from 'common/svg';

import {
  AccordionContent, AccordionHeader, AccordionContainer,
  AccordionItem, IconWrapper,
} from './styled';

const LIST_ITEM_HEIGHT = 50;
const list = [
  { title: 'Test1' },
  { title: 'Test2' },
  { title: 'Test3' },
  { title: 'Test4' },
];

const Accordion: React.FC<AccordionProps> = ({ title }) => {
  const [open, setOpen] = useState(false);

  const transition = useTransition(
    open,
    open ? 1 : 0,
    open ? 0 : 1,
    400,
    Easing.inOut(Easing.ease),
  );

  const height = bInterpolate(transition, 0, list.length * LIST_ITEM_HEIGHT);

  const rotateZ = bInterpolate(transition, Math.PI, 0);
  const backgroundColor = bInterpolateColor(transition, theme.colors.blue.rgb, {r: 255, g:255, b:255});

  return (
    <TouchableWithoutFeedback onPress={() => setOpen((open) => !open)}>
      <AccordionContainer>
        <AccordionHeader>
          <TextContent>{title}</TextContent>
          <IconWrapper
            as={Animated.View}
            style={{
              backgroundColor,
              transform: [{ rotateZ }],
            }}
          >
            <ChevronDown width={14} height={10} fill={theme.colors.purple.default} />
          </IconWrapper>
        </AccordionHeader>
        <AccordionContent as={Animated.View} style={{ height }}>
          {list.map((item, index) => (
            <AccordionItem key={`${title}_${index}`}>{item.title}</AccordionItem>
          ))}
        </AccordionContent>
      </AccordionContainer>
    </TouchableWithoutFeedback>
  );
}

type AccordionProps = {
  title: string;
};

export default Accordion;
