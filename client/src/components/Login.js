import { useState } from "react";
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

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

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
                <Id_Input/> 
              <Pw_text>Password</Pw_text>
                <Pw_Input/>
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
