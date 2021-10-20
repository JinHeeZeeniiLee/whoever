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
  font-size: 1.5em;
  text-align: center;
  color: white;
`

export const Idtext = styled.div`
  font-size: 20px;
  text-align: left;
  color: white;
  `;

export const Pwtext = styled.div`
  font-size: 20px;
  text-align: left;
  color: white;
  `;

export const PwConfirmtext = styled.div`
  font-size: 20px;
  text-align: left;
  color: white;
  `;

export const PwNotMatch = styled.input.attrs({ type: 'password'})`
font-size: 20px;
text-align: left;
color: red;
`;

export const PwValidLenMatch = styled.input.attrs({type: 'password'})`
font-size: 20px;
text-align: left;
color: red;
`;

export const EmailInput = styled.input.attrs({ type: 'text'})`
     max-width: 90%;
     font-size: 35px;
     border-top: none;
     border-left: none;
     border-right: none;
     border-radius: 8px;
     box-shadow: gray 2px 2px 2px;
     transition: 600ms ease all;
     padding: 5px;
     padding-left: 10px;
     font-family: 'MikadoBold_DEMO';
     
     `

export const EmailDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  border: solid 3px gray;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 10px;
  padding-right: 25px;
  max-width: 120vw;
  border-top: none;
  `

export const SignUpModalBtn = styled.button`
  background-color: #ffad4f;
  text-decoration: none;
  border: solid 2px white;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
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
  `;

export const SignUpModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
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
  margin-left: 3px;
  width: 150px;
  height:2em;
  flex: 1 1 auto;
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  margin: 10px;
  width: 150px;
  height: 2em;
  flex: 1 1 auto;
`

  export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
  margin: 10px;
  width: 150px;
  height: 2em;
  flex: 1 1 auto;
  `
  export const AgreeDiv = styled.div`
    display: inline-block;
    vertical-align: middle;
  `
  export const Icon = styled.svg` 
  fill: none; 
  stroke: white; 
  stroke-width: 2px; 
  `;

  export const AgreeCheck = styled.div`
  display: inline-block; 
  width: 2rem; 
  height: 2rem; 
  border: ${props => props.checked ? 'none' : 'solid 0.1rem #dddddd'}; 
  background: ${props => props.checked ? 'black' : 'white'}; 
  border-radius: 0.4rem; 
  transition: all 150ms; 
  ${Icon} { 
    visibility: ${props=>props.checked? 'visible': 'hidden'}; 
  }`;


export const SignUpModalView = styled.div.attrs((props) => ({
    role: "dialog"
  }))`
    border-radius: 10px;
    background-color: #ffad4f;
    width: 300px;
    height: 300px;
    
    > div.clost.btn {
        margin-top: 10px;
        cursor: pointer;
    }
    
    > div.desc {
        margin-top: 25px;
        color: #4000c7;
    }
    `;

