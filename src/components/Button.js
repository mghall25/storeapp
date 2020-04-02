import styled from "styled-components";

export const ButtonContainer = styled.button`
   font-size: 1.4rem;
   text-transform: capitalize;
   color: var(--mainWhite);
   border-radius:0.5rem;
   background:${props => 
    props.cart ? "var(--mainYellow)" : "#343a40"};
   padding:0.2rem 0.5rem;
   cursor: pointer;
   margin: 0.2rem 0.5rem;
   transition: all 0.3s ease-in-out;
  &:hover{
    background: ${props => 
        props.cart ? "var(--mainYellow)" : "#23272b"};
    color: #fff;
    border-color: ${props => 
        props.cart ? "var(--mainYellow)" : "#1d2124"};
  }
  &:focus{
    outline: none;
  }
`
