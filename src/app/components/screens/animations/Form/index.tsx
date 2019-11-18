import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';

import { Button } from 'common/interaction';
import { TextInput, FormWrapper } from 'common/form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const required = (value: string) => value ? undefined : 'Required';

const Form: React.FC<FormProps> = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const onHandleSubmit = (values: FormValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <FinalForm
      onSubmit={onHandleSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <FormWrapper>
          <Field<string>
            name="firstName"
            validate={required}
          >
            {(props) => <TextInput {...props} placeholder="First name" />}
          </Field>
          <Field<string>
            name="lastName"
            validate={required}
          >
            {(props) => <TextInput {...props} placeholder="Last name" />}
          </Field>
          <Field<string>
            name="email"
            validate={required}
          >
            {(props) => <TextInput {...props} placeholder="Email address" />}
          </Field>

          <Button title="Submit" onPress={handleSubmit} />
        </FormWrapper>
      )}
    />
  );
}

type FormProps = {};

export default Form;
