import styled from "styled-components";

export const StyledMain = styled.main`
   display: flex;
   flex-direction: ${props => props.type === 'home' ? 'row' : 'column'};
   justify-content: space-between;
   align-items: ${props => props.type === 'home' ? 'auto' : 'center'};
   box-sizing: border-box;
`;

//VARIES ON HOME BECAUSE OF ORDERS TAB