import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const SignInTextBox = styled.div`
p{
  font-weight: 300;
  font-size: 2rem;
}
h1{
  font-size: 2.8rem;
}
h1::first-letter {
  color: ${COLORS.primaryGreen};
}
span{
  color: ${COLORS.primaryGreen};
}
`;

export const SignInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 5rem;
  padding-top: 2.6rem;
`;

export const SignInStyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInMainComp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.loginBackground};
  width: 100%;
  color: ${COLORS.white};
`;

export const SignInLeftSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 62%;
  flex-direction: column;
`;
export const SignInRightSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38%;
  min-height: 100vh;
  margin-top: -5rem;
  /* background-color: ${COLORS.grey01}; */
  flex-direction: column;
  .recoverPassword{
     width: 385px; 
     display:flex ; 
     justify-content:end ;
     align-items: end;
     p{
      font-size: 0.8rem;
      color: ${COLORS.forgotPassword};
      cursor: pointer;
      &:hover{
        color: ${COLORS.white};
      }
     }
  }
`;
