import React from 'react';
import { Form, Field } from 'react-final-form'

import { Container } from 'common/general';
import { Button } from 'common/interaction';
import { TextInput, FormWrapper } from 'common/form';
import { TextContent } from 'common/typography';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const required = (value: string) => (value ? undefined : 'Required')

const Step1: React.FC<Step1Props> = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
   };

   const onHandleSubmit = (values: FormValues) => {
    console.log(JSON.stringify(values, null, 2));
   };

  return (
    <Container>
      <TextContent>Step1</TextContent>

      <Form
        onSubmit={onHandleSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, values }) => (
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
    </Container>
  );
}

type Step1Props = {};

export default Step1;
