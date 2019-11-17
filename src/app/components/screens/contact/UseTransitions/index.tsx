import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import { Button } from 'common/interaction';

import { UseTransitionsContainer, UseTransitionsCard, UseTransitionsCardContainer } from './styled';

const { width } = Dimensions.get('window');
const transformOrigin = -1 * (width / 2 - 64);

const UseTransitions: React.FC<UseTransitionsProps> = () => {
  const [toggle, setToggle] = useState<0 | 1>(0);

  return (
    <UseTransitionsContainer>
      {Array.from({ length: 3 }).map((_, index) => {
        let direction = 0;
        if (index === 0) {
          direction = -1;
        } else if (index === 2) {
          direction = 1;
        }

        const rotate = direction * (toggle ? 30 : 0);

        return (
          <UseTransitionsCardContainer
            key={`card_${index}`}
            style={{
              transform: [
                { translateX: transformOrigin },
                { rotate: `${rotate}deg` },
                { translateX: -transformOrigin },
              ]
            }}
          >
            <UseTransitionsCard cardNumb={index} />
          </UseTransitionsCardContainer>
        );
      })}

      <Button
        title={toggle ? 'Reset' : 'Start'}
        onPress={() => setToggle(toggle ^ 1)}
      />
    </UseTransitionsContainer>
  );
}

type UseTransitionsProps = {};

export default UseTransitions;
