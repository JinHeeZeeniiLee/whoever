import React, {useEffect,useState} from "react";
import axios from "axios";

import {useForm} from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import {Title, 
  TitleDiv,
  Idtext, 
  Pwtext, 
  PwConfirmtext, 
  SignUpModalContainer,
  SignUpModalView,
  SignUpModalBtn,
  JoinBtn,
  PwNotMatch,
  PwValidLenMatch,
  CloseBtn,
  Id_Input,
  Pw_Input,
  Pw_ReInput,
  Id_Input_Span,
  Pw_All_Input_Span,
  SignUp_div,
  SignUpModalBackdrop} from './SignUp.style';

  const SignUp = () => {

    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    
    const {
      register,
      handleSubmit,
      formState: {errors},
      watch
    } = useForm({mode: 'onChange'});

    const onSubmit = (data) => {
      axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, {
        userId: data.userId,
        password: data.password,
        email: data.email
      })
      .then((res) => {
        history.push('/');
      })
      .catch((err) => alert('중복된 ID 입니다.'));
    }

    useEffect(() =>{
      setIsVerified(watch('verifyPassword') === watch('password'));
    }, [watch('verifyPassword'), watch('password')]);
    
    const openModalHandler = () => {
      setIsOpen(!isOpen);
    };


    return (
      <SignUpModalContainer onSubmit={handleSubmit(onSubmit)}>
        
        <SignUpModalBtn onClick={openModalHandler}>
        {isOpen === false ? '아직 계정이 없다면?' : '아직 계정이 없다면?'}
        </SignUpModalBtn>
        
        {isOpen === true ? (
          <SignUpModalBackdrop onClick={openModalHandler}>
            <SignUpModalView onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={openModalHandler}>
                &times;
              </CloseBtn>
              <TitleDiv>
            <Title>WHOEVER Sign Up</Title>
            </TitleDiv>
            <Idtext>Whoever ID</Idtext>
            <Id_Input_Span>
            <Id_Input 
              name="userId"
              {...register('userId', {
                pattern: /^[a-z0-9_-]{4,20}$/
              })}
              />
            </Id_Input_Span>
            <Pwtext>Password</Pwtext>
              <Pw_All_Input_Span>
              <Pw_Input />
              </Pw_All_Input_Span>
            <PwConfirmtext>Password Confirm</PwConfirmtext>
              <Pw_All_Input_Span>
              <Pw_ReInput />
              </Pw_All_Input_Span>
            <JoinBtn>Sign Up</JoinBtn>
            </SignUpModalView>
          </SignUpModalBackdrop>
        ) : null}
      </SignUpModalContainer>
    )
  }

  export default SignUp