import { Input } from '@chakra-ui/react';

const SearchInput = ({ onChangeInput, search, bg, color }) => {
  return (
    <Input
      w={{ base: 'full', md: 'md', lg: 'sm' }}
      bgColor={bg}
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.1)"
      _focus={{ outline: 'none' }}
      transition="ease-in-out .2s"
      placeholder="Search for a country or capital"
      border="none"
      fontWeight="600"
      h="50px"
      _placeholder={{
        color: `${color}`,
        opacity: '.7',
      }}
      onChange={onChangeInput}
      mb={{ base: 25, md: 'initial' }}
      value={search}
    />
  );
};

export default SearchInput;
