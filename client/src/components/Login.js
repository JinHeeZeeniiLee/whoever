import { useState } from "react";
import {
    Title,
    IdText,
    PwText,
    TitleDiv,
    LoginModalContainer,
    LoginModalBtn,
    LoginBtn,
    LoginModalBackdrop,
    LoginModalView,
    Id_Input,
    Pw_Input,
    CloseBtn,
    Id_Validation_Check,
    Pw_Validation_Check
  } from "./Login.style";
  
import SignUp from './SignUp'

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
              <TitleDiv>
              <Title>WHOEVER Login</Title>
              </TitleDiv>
              <IdText>Whoever ID</IdText>
                <Id_Input/> 
                <Id_Validation_Check> 아이디가 잘못 되었습니다.</Id_Validation_Check>
              <PwText>Password</PwText>
                <Pw_Input/>
                <Pw_Validation_Check> 비밀번호가 일치하지 않습니다.</Pw_Validation_Check>
              <LoginBtn>Login</LoginBtn>
                <SignUp / >
            </LoginModalView>
          </LoginModalBackdrop>
        ) : null}
      </LoginModalContainer>
    </div>
  );
};

export default Login;
