import { Container, SimpleGrid } from '@chakra-ui/react';
import CountriesItems from './CountriesItems';
import Fuse from 'fuse.js';

const Countries = ({ countries, search }) => {
  const countriesByAlphabOrder = countries.sort((a, b) =>
    a.name < b.name ? -1 : 1
  );

  const fuse = new Fuse(countriesByAlphabOrder, {
    keys: ['name', 'capital'],
    includeScore: true,
  });

  const query = fuse.search(search);
  const countriesResults = search
    ? query.map(result => result.item)
    : countriesByAlphabOrder;

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={[1, 2, 2, 4]} spacing="50px">
        {countriesResults.map((country, id) => {
          return <CountriesItems key={id} country={country} l />;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Countries;
