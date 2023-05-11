import styled from 'styled-components';

export const GridContainer = styled.div`
   width: 100%;
   margin: 24px 0;
   display: grid;
   grid-template-columns: repeat(auto-fill, 240px);
   gap: 26px;
   place-content: center;
`;
