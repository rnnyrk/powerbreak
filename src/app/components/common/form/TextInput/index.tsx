import React from 'react';
import { FieldRenderProps } from "react-final-form";

import theme from 'styles/theme';
import { Error, Fieldset } from 'common/form';

import { TextInputField } from './styled';

const TextInput: React.FC<TextInputProps> = ({ input, meta, ...props }) => {
  return (
    <Fieldset>
      <TextInputField
        {...props}
        {...input}
        placeholderTextColor={theme.colors.purple.light}
      />
      <Error name={input.name} />
    </Fieldset>
  );
};

type TextInputProps = FieldRenderProps<string, any> & {
  label?: string;
  id?: string;
  placeholder?: string;
};

export default TextInput;
