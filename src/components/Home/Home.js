import { Box } from '@chakra-ui/react';
import React from 'react';
import Countries from '../Countries/Countries';
import Forms from '../Forms/Forms';

const Home = ({
  onChangeInput,
  search,
  filterByRegion,
  onChangeRegion,
  loading,
}) => {
  return (
    <Box>
      <Forms
        onChangeInput={onChangeInput}
        filterByRegion={filterByRegion}
        onChangeRegion={onChangeRegion}
        search={search}
      />

      <Countries countries={filterByRegion} search={search} loading={loading} />
    </Box>
  );
};

export default Home;
