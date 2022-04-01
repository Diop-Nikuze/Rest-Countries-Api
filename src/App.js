import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CountryDetails from './components/CountriesDetails/CountryDetails';
import Home from './components/Home/Home';

import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/800.css';

import theme from './theme/theme';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filterByRegion, setFilterByRegion] = useState(countries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(res => {
      setCountries(res.data);
      setFilterByRegion(res.data);
      setLoading(false);
    });
  }, []);

  const onChangeInput = e => {
    setSearch(e.target.value);
    setFilterByRegion(countries);
  };

  const onFilterByRegion = region => {
    if (region === 'All') setFilterByRegion(countries);
    else {
      const filteredRegion = countries.filter(country => {
        return country.region.toLowerCase().includes(region.toLowerCase());
      });
      setFilterByRegion(filteredRegion);
      setSearch('');
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              onChangeInput={onChangeInput}
              search={search}
              filterByRegion={filterByRegion}
              onChangeRegion={onFilterByRegion}
              countries={filterByRegion}
              loading={loading}
            />
          }
        />

        <Route path="/details/:name" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
