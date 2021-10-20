import styled from "styled-components";

/*

Title, 
Idtext, 
Pwtext, 
PwConfirmtext, 
SignUpModalContainer
SignUpModalView,
EmailDiv,
EmailInput,
SignUpModalBtn,
JoinBtn,
pwNotMatch,
PwValidLenMatch



*/

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #ffad4f;
  font-family: 'mikado';
  margin-right: 10px;
  margin : 1px 0 0;
  flex: 3 3 auto;
  padding-bottom: 25px;
`

export const TitleDiv = styled.div`
  display: inline;
  border-bottom: solid 5px #ffad4f;
  margin: auto;
  margin-top: 20px;
  height: 30px;
  width: 350px;
  display: flex;
  align-items: center;
`

export const Idtext = styled.div`
  font-size: 17px;
  color: #ffad4f;
  margin: 10px 0;
  margin-top: 20px ;
  `;

export const Pwtext = styled.div`
  font-size: 18px;
  color: #ffad4f;
  margin: 10px 0 0 10px;
  margin-top: 22px ;
  `;

export const PwConfirmtext = styled.div`
  font-size: 16px;
  color: #ffad4f;
  margin: 0px 0;
  margin-top: 15px ;
  `;

export const PwNotMatch = styled.div`
font-size: 15px;
text-align: left;
text-decoration-color: red;
`;

export const PwValidLenMatch = styled.div`
font-size: 15px;
text-align: left;
text-decoration-color: red;
`;

export const SignUpModalBtn = styled.a`
  background-color: white;
  text-decoration: none;
  color: #ffad4f;
  cursor: pointer;
  transition: 300ms ease all;
  min-width: 20px;
  text-align-last: center;
  margin: 3px 10px 90px 115px;
  display: flex;
  `;

export const JoinBtn = styled.button`
  background-color: #ffad4f;
  text-decoration: none;
  border: solid 2px white;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  box-align: right auto;
  margin-top: 20px;
  `;

export const SignUpModalContainer = styled.a`
  height: 15rem;
  text-align: center;
  margin-bottom: 10px;
  `;

export const SignUpModalBackdrop = styled.div`
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

export const Id_Input = styled.input.attrs({ type: 'text' })`
  margin-left: 52px;
  margin-top: 10px;
  width: 150px;
  height:2em;
  flex: 1 1 auto;
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  margin-left: 60px;
  margin-top: 5px;
  width: 150px;
  height: 2em;
  flex: 1 1 auto;
`

  export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
  margin-left: 20px;
  margin-top: 5px;
  width: 150px;
  height: 2em;
  flex: 1 1 auto;
  `
  
  // export const AgreeDiv = styled.div`
  //   display: inline-block;
  //   vertical-align: middle;
  // `

  export const CloseBtn = styled.span`
  border-radius: 50px;
  border: solid 1px #ffad4999;
  margin-left: 382px;
  cursor: pointer;
  background-color: #ffad4f;
  padding-left: 1px;
  margin-top: 50px;
  &:hover {
  box-shadow: gray 6px 6px 6px;
  }
`

  // export const AgreeCheck = styled.div`
  // display: inline-block; 
  // width: 2rem; 
  // height: 2rem; 
  // border: ${props => props.checked ? 'none' : 'solid 0.1rem #dddddd'}; 
  // background: ${props => props.checked ? 'black' : 'white'}; 
  // border-radius: 0.4rem; 
  // transition: all 150ms; 
  // ${Icon} { 
  //   visibility: ${props=>props.checked? 'visible': 'hidden'}; 
  // }`;


export const SignUpModalView = styled.div.attrs((props) => ({
    role: "dialog"
  }))`
    border-radius: 10px;
    background-color: White;
    width: 400px;
    height: 420px;
    
    > div.clost.btn {
        margin-top: 10px;
        cursor: pointer;
    }
    
    > div.desc {
        margin-top: 25px;
        color: #4000c7;
    }
    `;

