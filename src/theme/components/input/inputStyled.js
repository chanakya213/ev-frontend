import styled from "styled-components";
import { COLORS } from "../../colors";

export const InputBox = styled.input`
  min-height: ${(props) => props.theme.input.minHeight};
  max-width: ${(props) => props?.maxWidth || props.theme.input.maxWidth};
  font-size: ${(props) => props.theme.input.fontSize};
  border-radius: ${(props) => props.theme.input.borderRadius};
  border: ${(props) => props.theme.input.border};
  padding: ${(props) => props.theme.input.padding};
  outline:none;
  width: 100%;

  ${(props) =>
    props.disabled &&
    `background-color:${COLORS.grey03};
    border:${COLORS.grey03};
           color:${props.theme.input.disabled.color};
           cursor: ${props.theme.input.disabled.cursor};
           `};

  ${(props) =>
    props.isError &&
    `outline-color:${props.theme.input.error.errorOutlineColor};
    border:${props.theme.input.error.errorBorder};`};
`;

export const ErrorBox = styled.div`
text-align: start;
  ${(props) => `color:${props.theme.input.error.color};
  font-size:${props.theme.input.error.fontSize};
  font-weight:${props.theme.input.error.fontWeight};`};
`;

export const InputLabel = styled.div`
  margin-bottom: 5px;
  font-size:0.9rem;
`;
