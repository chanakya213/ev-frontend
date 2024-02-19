import styled from "styled-components";

export const NotFoundBox = styled.div`
margin: 0;
padding: 0;
  /* text-align: center;
  padding: 40px 0px; */
  * {
  font-family: Google sans, Arial;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  animation: colorSlide 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;

  .text-center {
    text-align: center;
    h1,
    h3 {
      margin: 10px;
      cursor: default;
      
      .fade-in {
        animation: fadeIn 2s ease infinite;
      }
    }

    h1 {
      font-size: 8em;
      transition: font-size 200ms ease-in-out;
      border-bottom: 1px dashed white;

      span#digit1 { animation-delay: 200ms; }
      span#digit2 { animation-delay: 300ms; }
      span#digit3 { animation-delay: 400ms; }
    }
    
    button {
      border: 1px solid white;
      background: transparent;
      outline: none;
      padding: 10px 20px;
      font-size: 1.1rem;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      transition: background-color 200ms ease-in;
      margin: 20px 0;
      
      &:hover {
        background-color: white;
        color: #555;
        cursor: pointer;
      }
    }
  }
}

@keyframes colorSlide {
  0% { background-color: #152a68; }
  25% { background-color: royalblue; }
  50% { background-color: seagreen; }
  75% { background-color: tomato; }
  100% { background-color: #152a68; }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
}
`;
