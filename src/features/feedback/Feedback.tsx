import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import FeedbackComponent from '../../components/FeedbackComponent';
import { fakeData } from '../../fakeDatas/fakeData';

const FeedbackPage = () => {
  const backgroundColor = useColorModeValue('#F9F9F9', 'gray.800');
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedNavItems = [
    {
      label: 'Dashboard',
      link: '#/',
    },
    { label: 'Feedback', link: '#/feedback' },
  ];

  return (
    <Box width={'100%'} height={`100%`}>
      <BreadcrumbNav orderedNavItems={orderedNavItems} />
      <br />
      <VStack width={'100%'} height={`100%`} justifyContent={'center'}>
        <Tabs
          width={'100%'}
          isLazy={true}
          overflow={'hidden'}
          height={'auto'}
          isManual
          backgroundColor={backgroundColor}
          maxW={'1284px'}
          variant='unstyled'
          colorScheme={'brand'}
          borderRadius={'11px'}
          boxShadow={{ sm: 'none', md: '0px 0px 12px rgba(0,0,0,0.25)' }}
          onChange={(index) => {
            setActiveIndex(index);
          }}
        >
          <TabList
            padding={'1rem'}
            display={'flex'}
            gridTemplateColumns={'repeat(1,1fr)'}
          >
            {Object.keys(fakeData).map((key, index) => (
              <Tab
                fontSize={{ sm: '1rem', md: '1.5rem' }}
                fontWeight={'bold'}
                color={activeIndex === index ? '#74C043' : 'gray'}
                width={'100%'}
                key={index}
              >
                {key}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            minH={'300px'}
            padding={0}
            backgroundColor={backgroundColor}
          >
            {Object.keys(fakeData).map((key, index) => (
              <TabPanel
                padding={0}
                key={index}
                display={'flex'}
                flexDir={'column'}
                alignItems={'flex-start'}
                gap={'1rem'}
              >
                {(key === 'All' || key === 'Compliment' || key === 'Bug') &&
                  fakeData[key].map((data, index) => (
                    <FeedbackComponent
                      done={data.done}
                      key={index}
                      index={index}
                      title={data.title}
                      timestamp={data.timestamp}
                    />
                  ))}
              </TabPanel>
            ))}
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default FeedbackPage;
