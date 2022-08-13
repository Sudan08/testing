import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './styles/index.css';

const themeConfig = {
  config: {
    initialColorMode: localStorage.getItem('rms_theme') || 'light',
    useSystemColorMode: !localStorage.getItem('rms_theme'),
  },
  colors: {
    brand: {
      50: '#F3FCE9',
      100: '#DCF5C1',
      200: '#C6EF9A',
      300: '#B0E972',
      400: '#9AE34A',
      500: '#74C043',
      600: '#69B01C',
      700: '#4bbd00',
      800: '#35580E',
      900: '#74C043',
    },
    styles: {
      global: {
        h2: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
    text: {
      default: '#2F4858',
      thin: '#747474',
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
};
const theme = extendTheme(themeConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
