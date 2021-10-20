import styled from "styled-components";

export const Title = styled.div`
  font-size: 27px;
  text-align: center;
  color: #ffad4f;
  font-family: 'mikado';
  margin-right: 10px;
  margin : 1px 0 0;
  flex: 3 3 auto;
`;

export const TitleDiv = styled.div`
  display: inline;
  border-bottom: solid 5px #ffad4f;
  margin: auto;
  margin-top: 20px;
  height: 30px;
  width: 300px;
  display: flex;
  align-items: center;
  padding-bottom: 25px;
`

export const IdText = styled.div`
  font-size: 18px;
  color: #ffad4f;
  margin-right: 200px;
  margin-top: 20px ;
  margin-bottom: 10px;
`;

export const PwText = styled.div`
  font-size: 18px;
  color: #ffad4f;
  margin-right: 220px;
  margin-top: 10px ;
`;

export const LoginModalContainer = styled.div`
  height: 15rem;
  text-align: center;
`;

export const LoginModalBtn = styled.button.attrs({type: 'button'})`
margin-top: 95px;
background: #fffffc;
border: solid 5px #ffad4999;
border-radius: 15px;
height: 55px;
cursor: pointer;
transition: 300ms ease all;
box-shadow: gray 2px 2px 2px;
padding: 10px;
min-width: 100px;
text-align-last: center;
font-family: 'Mikado';
margin-right: 40px;

&:hover {
  box-shadow: gray 6px 6px 6px;
}

&:before,
&:after {
  content: '';
  position: absolute;
  width: 0;
  transition: ease all;
}

&:hover:before,
&:hover:after {
  width: 100%;
  transition: ease all;
}

&:active {
  box-shadow: none;
}
`;

export const LoginBtn = styled.button`
  background-color: #ffad4f;
  font-size: 18px;
  text-decoration: none;
  border: solid 2px white;
  padding:12px;
  width: 300px;
  color: white;
  cursor: pointer;
  box-align: right auto;
  margin-bottom: 10px;
  flex: 1 1 auto;
`;

export const SignUp = styled.button`
  background-color: #ffad4f;
  text-decoration: none;
  border: solid 2px white;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  box-align: left auto;
  flex: 1 1 auto;
`;

export const LoginModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const Id_Validation_Check = styled.div`
  width: 300px;
  margin-left: -40px;
  padding: 5px;
  color:red;
`
export const Pw_Validation_Check = styled.div`
  width: 300px;
  margin-left: -28px;
  padding: 5px;
  color:red;
`

export const Id_Input = styled.input.attrs({ type: 'text' })`
  margin-left: 3px;
  width: 300px;
  height:2em;
  flex: 1 1 auto;
  padding-left: 1px;
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  margin-left: 30px;
  width: 300px;
  height: 2em;
  padding-left: 1px;
  margin-right: 20px;
  margin: 10px 10px 10px 10px;
  flex: 1 1 auto;
`

export const CloseBtn = styled.span`
  border-radius: 50px;
  border: solid 1px #ffad4999;
  margin-left: 328px;
  cursor: pointer;
  background-color: #ffad4f;
  padding-bottom: 1px;
  padding-left: 1px;
  &:hover {
  box-shadow: gray 2px 2px 2px;
  }
`

export const LoginModalView = styled.div.attrs((props) => ({
  role: "dialog"
}))`
  border-radius: 10px;
  background-color: white;
  width: 350px;
  height: 380px;

  > div.clost.btn {
    margin-top: 15px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;