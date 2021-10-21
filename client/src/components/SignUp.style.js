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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 18px;
  color: #ffad4f;
  margin-right: 200px;
  margin-top: 20px ;
  margin-bottom: 10px;
  margin-left: 30px;
  `;

export const Pwtext = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 18px;
  color: #ffad4f;
  margin-right: 200px;
  margin-top: 20px ;
  margin-bottom: 10px;
  margin-left: 30px;
  `;

export const PwConfirmtext = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 18px;
  color: #ffad4f;
  margin-right: 200px;
  margin-top: 20px ;
  margin-bottom: 10px;
  margin-left: 30px;
  
  `;

export const Id_Input_Span = styled.span`
  display: block;
  position: relative;
  width: 84%;
  height: 41px;
  border: solid 1px #dadada;
  box-sizing: border-box;
  padding: 1px 10px 10px 1.4px;
  margin-left: 30px;
`
export const Pw_All_Input_Span = styled.span`
  display: block;
  position: relative;
  width: 84%;
  height: 41px;
  border: solid 1px #dadada;
  box-sizing: border-box;
  padding: 1px 10px 10px 1.4px;
  margin-left: 30px;

  &:hover {
    outline: 1px solid #ffad4f;
  }
`

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
  display: block;
  color: #ffad4f;
  cursor: pointer;
  min-width: 20px;
  margin: 10px auto 15px auto;
  font-family: 'twayair';
  `;

export const JoinBtn = styled.button`
  background-color: #ffad4f;
  font-size: 18px;
  text-decoration: none;
  border: solid 2px white;
  padding:12px;
  width: 300px;
  color: white;
  cursor: pointer;
  box-align: auto;
  margin-top: 20px;
  flex: 1 1 auto;
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
  display: flex;
  font-size: 17px;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 288px;
  height: 2.2em;
  outline: none;
  border: none;
  padding: 0px 25px 0px 0px;
  cursor: pointer;
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  display: flex;
  font-size: 17px;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 288px;
  height: 2.2em;
  outline: none;
  border: none;
  padding: 0px 25px 0px 0px;
  cursor: pointer;
`

  export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
  display: flex;
  font-size: 17px;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 288px;
  height: 2.2em;
  outline: none;
  border: none;
  padding: 0px 25px 0px 0px;
  cursor: pointer;
  `
  
  // export const AgreeDiv = styled.div`
  //   display: inline-block;
  //   vertical-align: middle;
  // `

  export const CloseBtn = styled.span`
  display: flex;
  border-radius: 50px;
  border: solid 1px #ffad4999;
  cursor: pointer;
  background-color: #ffad4f;
  padding: 0px 0px 0px 1px;
  margin: 1px 0 1px 382px;
  width:18px;
  align-items: end;

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

