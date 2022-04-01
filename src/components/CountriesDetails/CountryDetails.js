import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import CountryDetailsItems from './CountryDetailsItems';

const CountryDetails = () => {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${name}`).then(res => {
      setCountries(res.data);
      console.log(res.data);
    });
  }, [name]);

  return (
    <Container maxW="container.xl" mt={50}>
      {countries.map((details, id) => {
        return <CountryDetailsItems key={id} details={details} />;
      })}
    </Container>
  );
};

export default CountryDetails;
