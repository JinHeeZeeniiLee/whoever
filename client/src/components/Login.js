import React, { useState } from "react";
import {
    Title,
    TitleDiv,
    LoginModalContainer,
    LoginModalBtn,
    LoginBtn,
    LoginModalBackdrop,
    LoginModalView,
    Id_Input,
    Pw_Input,
    Id_text,
    Pw_text,
    Validation_Check,
    Input_Span,
    ModalInsideContainer,
    CloseBtn
  } from "./Login.style";
  
import SignUp from './SignUp'
import axios from 'axios';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    if(e.target.className === 'password') {
      setPassword(e.target.value);
    }
    if(e.target.className === 'userId'){
      setUserId(e.target.value);
    }
  }

  const loginBtnHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/login`,
        { userId: userId, password: password },
      )
  }

  return (
      <LoginModalContainer>
        <LoginModalBtn onClick={openModalHandler}>
          {isOpen === false ? "Login" : "Login"}
        </LoginModalBtn>
        {isOpen === true ? (
          <LoginModalBackdrop onClick={openModalHandler}>
            <LoginModalView onClick={(e)=> e.stopPropagation()}>
            <CloseBtn onClick={openModalHandler}>
                &times;
              </CloseBtn>
              <ModalInsideContainer>
              <TitleDiv>
              WHOEVER Login
              </TitleDiv>
              <Id_text>Whoever ID</Id_text>
                <Id_Input className='userID' onChange ={handleChange}/> 
              <Pw_text>Password</Pw_text>
                <Pw_Input className='password' onChange ={handleChange}/>
                <Validation_Check> 일치하는 정보가 없습니다.</Validation_Check>
              <LoginBtn>Login</LoginBtn>
                <SignUp />
                </ModalInsideContainer>
            </LoginModalView>
          </LoginModalBackdrop>
        ) : null}
      </LoginModalContainer>
  );
};

export default Login;
