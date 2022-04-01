import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      'html, body': {
        fontFamily: "'Nunito Sans',  sans-serif",
        backgroundColor:
          props.colorMode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
      },

      '.option': {
        fontWeight: '600',
        borderColor: 'red',
      },
      '.countryDetails': {
        color:
          props.colorMode === 'dark'
            ? 'rgba(192,192,192,1.0)'
            : 'hsl(0, 0%, 52%)',
      },

      '.box-img img': {
        transition: '0.2s all ease-in-out',
      },

      '.box-img:hover img': {
        transform: 'scale(1.1)',
      },
    }),
  },
});

export default theme;
