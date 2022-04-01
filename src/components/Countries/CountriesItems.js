import { Box, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Countries = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  const bgColor = useColorModeValue('hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)');
  const colorCountryItems = useColorModeValue(
    'hsl(200, 15%, 8%)',
    'hsl(0, 0%, 100%)  '
  );

  return (
    <Box
      className="latestposts box-img"
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      borderRadius="7px"
      bg={bgColor}
      overflow="hidden"
    >
      <Link to={`/details/${name}`}>
        <Box
          h="160px"
          sx={{
            '.latestposts:hover &': {
              filter: 'brightness(70%)',
            },
          }}
          transition="ease-in-out .2s"
        >
          <Image
            src={flags.svg}
            alt={name}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        <Box p="20px">
          <Text
            mb={3}
            color={colorCountryItems}
            fontWeight="800"
            fontSize="20px"
          >
            {name}
          </Text>
          <HStack lineHeight="1.7">
            <Box color={colorCountryItems} fontWeight="600">
              <Text>
                Population: <span className="countryDetails">{population}</span>
              </Text>
              <Text>
                Region: <span className="countryDetails">{region}</span>
              </Text>
              <Text>
                Capital:{' '}
                <span className="countryDetails">
                  {capital ? capital : '-'}
                </span>
              </Text>
            </Box>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default Countries;
