import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { TextContent } from 'common/typography';

import { SearchBoxContainer, BoxView, BoxInput, BoxButton } from './styled';

export default ({ visible, onRequestClose }: SearchBoxProps) => {
  return (
    <TouchableWithoutFeedback onPress={onRequestClose}>
      <SearchBoxContainer
        visible={visible}
        pointerEvents={visible ? 'auto' : 'none'}
      >
        {visible && (
          <BoxView>
            <BoxInput
              placeholder="Quick Find"
              underlineColorAndroid="transparent"
            />
            <BoxButton onPress={onRequestClose}>
              <TextContent>Add</TextContent>
            </BoxButton>
          </BoxView>
        )}
      </SearchBoxContainer>
    </TouchableWithoutFeedback>
  );
};

type SearchBoxProps = {
  visible: boolean;
  onRequestClose: () => void;
};
