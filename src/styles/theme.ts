import { DefaultTheme } from 'styled-components';

const flex = (direction = 'row', justify = 'center', align = 'center') => {
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `;
};

const colors = {
  primary: 'rgb(252 178 43)',
  secondary: 'rgb(96, 88, 76)',
  black: '#000000',
  white: '#ffffff',
  error: '#ff8782',
  success: '#22b14c',
};

const theme: DefaultTheme = {
  flex,
  colors,
  radius: '0.25rem',
};

export { theme };
