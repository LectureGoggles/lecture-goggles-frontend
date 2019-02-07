/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NavBar from '../navBar/navBar';
import LectureGogglesLogo from '../logo/logo';
import GenericButton from '../button/button';
import GridBody from '../gridBody';
import useWindowWidth from '../__hooks__/useWindowWidth';

const LogoStyle = styled.div`
  grid-column: 2;
  grid-row: 2;
  justify-self: center;
  align-self: center;
  text-align: center;
`;

const WelcomeStyle = styled.div`
  grid-row: 3;
  grid-column: 2;
  background-color: #ffffff;
  color: #0d47a1;
  width: 100%;
`;

const ContinueButtonStyle = styled.div`
  grid-row: 5;
  grid-column: 2;
  background-color: #ffffff;
  justify-self: center;
  font-size: 32px;
  margin: 30px;
`;

const InputStyle = styled.input`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 4px;
  border: ${props => (props.emailError ? '1px solid #ff4136' : '1px solid #0074d9')};
  text-align: center;
  height: 56px;
`;

const ErrorDiv = styled.div`
  text-align: center;
  color: #ff4136;
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required')
});

const SignIn = () => {
  const width = useWindowWidth();
  return (
    <GridBody data-testid="sign-in">
      <NavBar renderButton={width < 768} />
      <LogoStyle>
        <LectureGogglesLogo width={200} height={200} />
      </LogoStyle>
      <WelcomeStyle>
        <h3> Sign In </h3>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          render={props => {
            // eslint-disable-next-line
            const { handleBlur, handleChange, values, errors } = props;
            return (
              <form>
                <InputStyle
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  name="email"
                  emailError={errors.email}
                />
                <ErrorDiv>{errors.email}</ErrorDiv>
                <br />
                <InputStyle placeholder="password" type="password" name="password" />
                <a href="/">Forgot your password?</a>
                <br />
                <GenericButton width="100%" height="56px" type="submit" text="Continue" />
              </form>
            );
          }}
        />
      </WelcomeStyle>
      <ContinueButtonStyle>
        <a href="/">
          <GenericButton backgroundColor="#90A4AE" color="#0D47A1" text="Cancel" />
        </a>
        <a href="/newAccount">
          <GenericButton backgroundColor="#90A4AE" color="#0D47A1" text="Create An Account" />
        </a>
      </ContinueButtonStyle>
    </GridBody>
  );
};

export default SignIn;
