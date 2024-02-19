import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";
import { FONT_SIZES } from "./fontSizes";
import { FONT_WEIGHTS } from "./fontWeights";

export const GlobalStyles = createGlobalStyle`
  


  body,h1,h2,h3,h4,h5,h6,p{
    margin: 0px;
    padding: 0px;
  }
  body {
    background: ${({ theme }) => theme.body.backgroundColor};
    color: ${COLORS.black};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  h1{
    font-size:${FONT_SIZES.H1};
    font-weight:${FONT_WEIGHTS[600]};
   
  }
  h2{
    font-size:${FONT_SIZES.H2};
    font-weight:${FONT_WEIGHTS[600]};
  }
  h3{
    font-size:${FONT_SIZES.H3};
    font-weight:${FONT_WEIGHTS[500]};
  }
  h4{
    font-size:${FONT_SIZES.H4};
    font-weight:${FONT_WEIGHTS[500]};
  }
  h5{
    font-size:${FONT_SIZES.H5};
    font-weight:${FONT_WEIGHTS[500]};
  }
  h6{
    font-weight:${FONT_WEIGHTS[400]};
    font-size:${FONT_SIZES.H6};
  } 
  p{
    font-weight:${FONT_WEIGHTS[400]};
    font-size:${FONT_SIZES.BODY_LARGE};
  }
`;

export let lightTheme = {
  mode: "light",
  body: {
    // backgroundColor: COLORS.grey02,
  },
  button: {
    fontSize: FONT_SIZES.BUTTON_LARGE,
    fontWeight: FONT_WEIGHTS[600],
    borderRadius: "10px",
    padding: "11px 30px",
    width: "fit-content",
    cursor: "pointer",
    backgroundColor: COLORS.buttonPrimary,
    color: COLORS.white,
    hover: COLORS.primaryButtonHover,

    primary: {
      backgroundColor: COLORS.buttonPrimary,
      border: `2px solid ${COLORS.blue}`,
      color: COLORS.white,
      hover: COLORS.primaryButtonHover,
      outline: {
        backgroundColor: COLORS.white,
        border: `2px solid ${COLORS.buttonPrimary}`,
        color: COLORS.black,
      },

      buttonLg: {
        padding: "14px 30px",
      },
      buttonSm: {
        padding: "5px 16px",
      },

      hoverStyle: {
        backgroundColor: COLORS.darkBlue,
        color: COLORS.white,
      },
    },

    secondary: {
      backgroundColor: COLORS.darkPink,
      border: `2px solid ${COLORS.darkPink}`,
      color: COLORS.white,

      outline: {
        backgroundColor: COLORS.white,
        border: `2px solid ${COLORS.darkPink}`,
        color: COLORS.darkPink,
      },

      buttonLg: {
        padding: "14px 30px",
      },
      buttonSm: {
        padding: "5px 16px",
      },

      hoverStyle: {
        backgroundColor: COLORS.darkPink1,
        color: COLORS.white,
      },
    },

    disabled: {
      backgroundColor: COLORS.grey04,
      color: COLORS.grey02,
      border: `2px solid ${COLORS.grey04}`,
      cursor: "context-menu",
    },
  },

  input: {
    border: `1px solid ${COLORS.grey04}`,
    borderRadius: "8px",
    fontSize: FONT_SIZES.BODY_SMALL_1,
    minHeight: "50px",
    maxWidth: "350px",
    padding: "0px 1.5rem",
    outlineColor: COLORS.blue,

    error: {
      errorOutlineColor: COLORS.red,
      errorBorder: `1px solid ${COLORS.red}`,
      color: COLORS.red,
      fontSize: FONT_SIZES.BODY_SMALL_1,
      fontWeight: FONT_WEIGHTS[400],
    },

    disabled: {
      backgroundColor: ' #cfffc8',
      color: COLORS.grey01,
      border: `1px solid #cfffc8`,
      cursor: "context-menu",
    },
  },
};

export let darkTheme = {
  ...lightTheme,
  body: {
    backgroundColor: COLORS.grey02,
  },
  mode: "dark",
};
