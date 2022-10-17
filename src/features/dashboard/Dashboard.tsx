import {
  Box,
  Button,
  Divider,
  Grid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import CustomHeading from '../../components/CustomHeading';

const Dashboard = () => {
  const backgroundColor = useColorModeValue('#fff', 'gray.800');

  return (
    <Box height={`100%`} width={`100%`}>
      <CustomHeading>Dashboard</CustomHeading>
      <VStack width={`100%`} padding={[`1rem`, `1rem`, `2rem`, `3rem`]}>
        <Grid
          width={`100%`}
          gap={`1.4rem`}
          marginTop={`1rem`}
          height={`100%`}
          gridTemplateColumns={[
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
            `repeat(2,1fr)`,
            `repeat(2,1fr)`,
          ]}
        >
          <VStack
            boxShadow={[`none`, `none`, `0px 0px 15px rgba(0, 0, 0, 0.15)`]}
            backgroundColor={backgroundColor}
            padding={`1rem`}
            width={`100%`}
            height={`100%`}
            borderRadius={'8px'}
          >
            <CustomHeading fontSize={`1.4rem`} color={`#2F4858`}>
              Announcements
            </CustomHeading>
            <Divider />
            <VStack height={`100%`} gap={`1rem`} width={`100%`}>
              <VStack
                padding={`1rem`}
                width={`100%`}
                height={`350px`}
                overflowY={`scroll`}
              >
                <VStack
                  border={`2px solid #74C043`}
                  padding={`1rem 2rem`}
                  alignItems={`flex-start`}
                  boxShadow={`0px 0px 4px rgba(0,0,0,0.24)`}
                  borderRadius={`8px`}
                  width={`100%`}
                >
                  <chakra.h2
                    color={'brand.500'}
                    fontSize={`1.2rem`}
                    fontWeight={`700`}
                  >
                    Sun 21, April 2022
                  </chakra.h2>
                  <chakra.p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, inventore omnis eveniet esse
                  </chakra.p>
                </VStack>
                <VStack
                  border={`2px solid #74C043`}
                  padding={`1rem 2rem`}
                  alignItems={`flex-start`}
                  boxShadow={`0px 0px 4px rgba(0,0,0,0.24)`}
                  borderRadius={`8px`}
                  width={`100%`}
                >
                  <chakra.h2
                    color={`#74C043`}
                    fontSize={`1.2rem`}
                    fontWeight={`700`}
                  >
                    Sun 21, April 2022
                  </chakra.h2>
                  <chakra.p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, inventore omnis eveniet esse
                  </chakra.p>
                </VStack>
                <VStack
                  border={`2px solid #74C043`}
                  padding={`1rem 2rem`}
                  alignItems={`flex-start`}
                  boxShadow={`0px 0px 4px rgba(0,0,0,0.24)`}
                  borderRadius={`8px`}
                  width={`100%`}
                >
                  <chakra.h2
                    color={`#74C043`}
                    fontSize={`1.2rem`}
                    fontWeight={`700`}
                  >
                    Sun 21, April 2022
                  </chakra.h2>
                  <chakra.p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, inventore omnis eveniet esse
                  </chakra.p>
                </VStack>
              </VStack>
              <Button
                width={`100%`}
                padding={`1.5rem 0`}
                borderRadius={`6px`}
                color="white"
                type={`submit`}
                transition={`0.2s`}
                _hover={{
                  backgroundColor: `brand.700`,
                }}
                backgroundColor="brand.500"
              >
                View All
              </Button>
            </VStack>
          </VStack>
          <VStack
            width={`100%`}
            height={`100%`}
            minH={`400px`}
            borderRadius={'8px'}
            padding={`1rem`}
            boxShadow={[`none`, `none`, `0px 0px 15px rgba(0, 0, 0, 0.15)`]}
            backgroundColor={backgroundColor}
          >
            <CustomHeading fontSize={`1.4rem`} color={`#2F4858`}>
              On-Going Classes
            </CustomHeading>
            <Divider />
            <VStack gap={`1rem`} width={`100%`}>
              <VStack
                width={`100%`}
                padding={`1rem`}
                height={`350px`}
                overflowY={`scroll`}
              >
                <VStack
                  border={`2px solid #74C043`}
                  padding={`1rem 2rem`}
                  alignItems={`flex-start`}
                  boxShadow={`0px 0px 4px rgba(0,0,0,0.24)`}
                  borderRadius={`8px`}
                  width={`100%`}
                >
                  <chakra.h2 fontSize={`1rem`} fontWeight={`600`}>
                    4SC123 - Collaborative Development
                  </chakra.h2>
                  <chakra.h3
                    color={`#74C043`}
                    fontSize={`1rem`}
                    fontWeight={`800`}
                    textTransform={`uppercase`}
                  >
                    Lab-04 Patan
                  </chakra.h3>
                </VStack>
              </VStack>
              <Button
                width={`100%`}
                padding={`1.5rem 0`}
                borderRadius={`6px`}
                type={`submit`}
                color="white"
                transition={`0.2s`}
                _hover={{
                  backgroundColor: 'brand.700',
                }}
                backgroundColor="brand.500"
                marginTop={`auto`}
              >
                View All
              </Button>
            </VStack>
          </VStack>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Dashboard;
