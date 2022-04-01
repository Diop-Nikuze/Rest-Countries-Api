import { ChevronDownIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';

const Filter = ({ onChangeRegion, filterByRegion, bg, color }) => {
  return (
    <Select
      icon={<ChevronDownIcon />}
      w={{ base: 'fit-content', md: 'md', lg: 'xs' }}
      bgColor={bg}
      boxShadow="0px 0px 25px rgba(54, 91, 125, 0.1)"
      _focus={{ outline: 'none' }}
      transition="ease-in-out .2s"
      placeholder="Filter by Region"
      border="none"
      fontWeight="600"
      opacity=".7"
      h="50px"
      color={color}
      alignSelf="self-start"
      onChange={e => onChangeRegion(e.target.value)}
      value={filterByRegion}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
};

export default Filter;
