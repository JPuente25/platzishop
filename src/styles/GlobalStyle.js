import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      font-family: 'Quicksand', sans-serif;
      height: 100%;
  }

  html {   
      box-sizing: border-box;
      height: 100%;
   }

   *, *:before, *:after {
      box-sizing: inherit;
   }; 

   #root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
   }
`;

export const white = '#ffffff';
export const black = '#000000';
export const very_light_pink = '#c7c7c7';
export const text_input_field = '#f7f7f7';
export const hospital_green = '#acd9b2';
export const sm = '14px';
export const md = '16px';
export const lg = '18px';

export { GlobalStyle };
