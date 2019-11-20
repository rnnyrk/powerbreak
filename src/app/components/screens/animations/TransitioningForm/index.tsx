import React, { useRef, useState } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { TransitioningView, Transition } from 'react-native-reanimated';

import { Button } from 'common/interaction';
import { TextInput, FormWrapper } from 'common/form';
import { TextContent } from 'common/typography';

import { TransitioningFormContainer, OverlayCard, OverlayContent } from './styled';
import { TouchableWithoutFeedback } from 'react-native';

const required = (value: string) => value ? undefined : 'Required';

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={400} interpolation="easeInOut" />
    <Transition.Out type="fade" durationMs={400} interpolation="easeInOut" />
  </Transition.Together>
);

const TransitioningForm: React.FC<TransitioningFormProps> = () => {
  const ref = useRef<TransitioningView>(null);
  const [submitted, setSubmitted] = useState(false);

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const toggleSuccessView = () => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }

    setSubmitted((prevSubmitted) => !prevSubmitted);
  };

  const onHandleSubmit = (values: FormValues) => {
    console.log(JSON.stringify(values, null, 2));
    toggleSuccessView();
  };

  return (
    <TransitioningFormContainer {...{ ref, transition }}>
      {submitted && (
        <TouchableWithoutFeedback onPress={toggleSuccessView}>
          <OverlayCard>
            <OverlayContent>
              <TextContent>Thank you for submitting the message!</TextContent>
            </OverlayContent>
          </OverlayCard>
        </TouchableWithoutFeedback>
      )}

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
    </TransitioningFormContainer>
  );
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

type TransitioningFormProps = {};

export default TransitioningForm;
