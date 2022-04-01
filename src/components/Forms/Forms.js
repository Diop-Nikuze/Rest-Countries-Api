import { Container, HStack, useColorModeValue } from '@chakra-ui/react';
import Filter from './Filter';
import SearchInput from './SearchInput';

const Forms = ({ onChangeInput, search, filterByRegion, onChangeRegion }) => {
  const bgColorInput = useColorModeValue(
    'hsl(0, 0%, 100%)',
    'hsl(209, 23%, 22%)'
  );

  const placeholderColor = useColorModeValue(
    'hsl(0, 0%, 52%)',
    'hsl(0, 0%, 100%)'
  );
  return (
    <Container maxW="container.xl" my={10}>
      <HStack
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'initial' }}
      >
        <SearchInput
          onChangeInput={onChangeInput}
          search={search}
          bg={bgColorInput}
          color={placeholderColor}
        />
        <Filter
          onChangeRegion={onChangeRegion}
          filterByRegion={filterByRegion}
          bg={bgColorInput}
          color={placeholderColor}
        />
      </HStack>
    </Container>
  );
};

export default Forms;
