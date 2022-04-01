import {
  Box,
  HStack,
  Text,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColorHeader = useColorModeValue(
    'hsl(0, 0%, 100%)',
    'hsl(209, 23%, 22%)'
  );
  return (
    <Box
      py={7}
      bg={bgColorHeader}
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.1)"
    >
      <Container maxW="container.xl">
        <HStack
          justifyContent="space-between"
          fontWeight="800"
          alignItems="center"
        >
          <Link to="/">
            <Text fontSize={{ base: 13, md: 25 }}>Where in the World?</Text>
          </Link>

          <Flex
            onClick={toggleColorMode}
            cursor="pointer"
            alignItems="center"
            fontSize={{ base: 11, md: 'initial' }}
          >
            <ColorModeSwitcher />
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
