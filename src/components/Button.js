import styled from "styled-components";

export const ButtonContainer = styled.button`
   font-size: 1.4rem;
   text-transform: capitalize;
   color: var(--mainWhite);
   background: #343a40;
   border-radius:0.5rem;
   padding:0.2rem 0.5rem;
   cursor: pointer;
   margin: 0.2rem 0.5rem;
   transition: all 0.3s ease-in-out;
  &:hover{
    background: #23272b;
    color: #fff;
    border-color: #1d2124;
  }
  &:focus{
    outline: none;
  }
`
