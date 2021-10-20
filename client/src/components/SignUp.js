import React, {useState} from "react";

import {Title, 
  Idtext, 
  Pwtext, 
  PwConfirmtext, 
  SignUpModalContainer,
  SignUpModalView,
  EmailDiv,
  EmailInput,
  SignUpModalBtn,
  JoinBtn,
  PwNotMatch,
  PwValidLenMatch,
  Id_Input,
  Pw_Input,
  Pw_ReInput,
  AgreeCheck,
  AgreeDiv,
  SignUpModalBackdrop} from './SignUp.style';

  const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    
    const openModalHandler = () => {
      setIsOpen(!isOpen);
    };

    const obSubmit = (e) => {
      e.preventDefault();

      if(password !== passwordCheck) return setPasswordError(true);
      if(!term) return setTermError(true);

        console.log({
          id,
          password,
          passwordCheck,
          term
        });

        const onChangeId = (e) => {
          setId(e.target.value)
        }

        const onChangePassword = (e) =>{
          setPassword(e.target.value);
        }

        const onChangePasswordChk = (e) => {
          setPasswordError(e.target.value !== password);
          setPasswordCheck(e.target.value)
        }

        const onChangeTerm = (e) => {
          setTermError(false);
          setTerm(e.target.checked);
        }
    }

    return (
      <SignUpModalContainer>
        <SignUpModalBtn onClick={openModalHandler}>
        {isOpen === false ? 'Sign Up' : ''}
        </SignUpModalBtn>
        {isOpen === true ? (
          <SignUpModalBackdrop onClick={openModalHandler}>
            <SignUpModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className="close-btn">
                &times;
              </span>
            <Title>WHOEVER Sign Up</Title>
            <Idtext>Id
              <Id_Input onChange={(e)=>e.onChangeId()}/>
              </Idtext>
            <Pwtext>Password
              <Pw_Input onChange={(e)=>e.onChangePassword}/>
              {password.length < 8 ? <PwValidLenMatch>비밀번호는 8자 이상이여야 합니다.</PwValidLenMatch> : ''}
            </Pwtext>
            <PwConfirmtext>Password Confirm
              <Pw_ReInput onChange={(e)=>e.ChangePasswordChk}/>
              {passwordError && <PwNotMatch> 비밀번호가 일치하지 않습니다.</PwNotMatch>}
            </PwConfirmtext>
            <EmailDiv>E-mail
              <EmailInput/>
            </EmailDiv>
            <AgreeDiv>
              <AgreeCheck name='user-term' value={term} onChange={(e)=>e.onChangeTerm}>WHOEVER 가입에 동의합니까?</AgreeCheck>
              {termError && <div style={{color: 'red'}}>약관에 동의하셔야 합니다.</div>}
            </AgreeDiv>
            <JoinBtn>Sign Up</JoinBtn>
            </SignUpModalView>
          </SignUpModalBackdrop>
        ) : null}
      </SignUpModalContainer>
    )
  }

  export default SignUp