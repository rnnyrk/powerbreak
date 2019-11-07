import React from 'react';

import { Fieldset } from 'common/form';

import { TextInputField } from './styled';

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <Fieldset>
      <TextInputField {...props} />
    </Fieldset>
  );
};

type TextInputProps = {
  label?: string;
  type?: string;
  id?: string;
};

export default TextInput;
