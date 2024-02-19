import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const VehiclesBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
.title{
  font-weight: 600;
}
  padding: 1rem;
  p{
    font-size: 1rem;
  }
  h3{
    font-size: 1.3rem;
    font-weight: 400;
  }
  h4{
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const SearchContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 1rem;
p{
  font-size: 0.9rem ;
  font-weight: 400;
  color: #878787;
}
.searchBox{
  gap: 0.5rem;
  background-color: #F4F4F4;
  padding: 0.5rem;
  width: 250px;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input{
    border: none;
    background-color: transparent;
    outline: none;
  }
}
`