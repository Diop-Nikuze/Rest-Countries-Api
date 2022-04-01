import {
  Box,
  HStack,
  Text,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const CountryDetailsItems = ({ details }) => {
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    borders,
    languages,
  } = details;

  const bgColor = useColorModeValue('hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)');
  const colorCountryItems = useColorModeValue(
    'hsl(200, 15%, 8%)',
    'hsl(0, 0%, 100%)  '
  );

  return (
    <Box>
      <Link to="/" style={{ display: 'inline-block' }}>
        <HStack
          padding="5px 25px"
          boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          borderRadius="7px"
          bg={bgColor}
          fontSize={20}
        >
          <ArrowBackIcon />
          <Text>back</Text>
        </HStack>
      </Link>
      <Box
        mt={50}
        d={{ base: 'block', md: 'block', lg: 'flex' }}
        alignItems={{ base: 'normal', md: 'center' }}
        justifyContent="space-between"
      >
        <Box
          w={{ base: '100%', md: '100%', lg: 550 }}
          h={{ base: 200, md: 350 }}
        >
          <Image
            src={flags.svg}
            alt={name}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Box mt={35} mb={15}>
            <Heading fontFamily="Nunito Sans">{name}</Heading>
          </Box>
          <Box
            fontWeight="600"
            color={colorCountryItems}
            lineHeight="2"
            d={{ base: 'block', md: 'flex' }}
          >
            <Box>
              <Text>
                Native Name:{' '}
                <span className="countryDetails">{nativeName}</span>
              </Text>
              <Text>
                Population: <span className="countryDetails">{population}</span>
              </Text>
              <Text>
                Region: <span className="countryDetails">{region}</span>
              </Text>
              <Text>
                Sub Region: <span className="countryDetails">{subregion}</span>
              </Text>
              <Text>
                Capital: <span className="countryDetails">{capital}</span>
              </Text>
            </Box>

            <Box my={{ base: 25, md: 0 }} ml={{ base: 0, md: 90 }}>
              <Text>
                Top Level Domain:{' '}
                <span className="countryDetails">{topLevelDomain}</span>
              </Text>
              <Text>
                Currencies:{' '}
                <span className="countryDetails">{currencies?.[0].name}</span>
              </Text>
              <Text>
                Languages:
                {languages?.map((lang, id) => {
                  return (
                    <span
                      className="countryDetails"
                      key={id}
                      style={{
                        marginLeft: id < languages.length ? '5px' : '',
                      }}
                    >
                      {lang.name}
                      {id < languages.length - 1 ? ',' : ''}
                    </span>
                  );
                })}
              </Text>
            </Box>
          </Box>

          <Box fontWeight="600" mt={{ base: 0, md: 5 }}>
            <Box d="flex" flexWrap="wrap" alignItems="center">
              Border Countries:{' '}
              {borders?.map((border, id) => {
                return (
                  <UnorderedList
                    key={id}
                    bg={bgColor}
                    boxShadow="0px 0px 25px rgba(54, 91, 125, 0.1)"
                    padding="2px 15px"
                    borderRadius="5px"
                    margin="7px"
                  >
                    <ListItem listStyleType="none">{border}</ListItem>
                  </UnorderedList>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryDetailsItems;
