import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      textAlign="center"
      fontSize={{ base: 10, sm: 10, md: 13, lg: 13 }}
      my={20}
    >
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/Nikuze/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'underline',
          fontWeight: '600',
          letterSpacing: 1.3,
        }}
      >
        Diop Nikuze
      </a>
    </Box>
  );
};

export default Footer;
