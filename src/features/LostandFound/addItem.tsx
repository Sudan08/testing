import {
Box,
HStack,
VStack,
Icon}
from '@chakra-ui/react';

import React from 'react'
import BreadcrumbNav from '../../components/BreadcrumbNav';
import {LostandFoundPageBreadcrumbNav} from '../../data/breadcrumbDatas';
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'


const AddItem = () => {
  return (
    <Box width = {`100%`} height = {`100%`}>
         <BreadcrumbNav orderedNavItems={LostandFoundPageBreadcrumbNav}/>
         <VStack>
            <Box
            margin={`1rem`}
            borderRadius={`12px`}
            width={`100%`}
            maxW={`1200`}
            boxShadow={[`none`,`none`,`0px 0px 4px rgba(0,0,0,0.25)`]}>
            <HStack alignItems={'center'} justifyContent={'space-around'} margin={`1rem`}>
              <Box>
                <Icon as={RiNumber1} backgroundColor={`#74C043`} padding={`3px`} color={`#fff`} borderRadius={`100%`} mx={`1rem`}/>
                Item Details
              </Box>
              <Box>
                <Icon as={RiNumber2} backgroundColor={`#74C043`} padding={`3px`} color={`#fff`} borderRadius={`100%`} mx={`1rem`}/>
                Found Details
              </Box>
              <Box>
                <Icon as={RiNumber3} backgroundColor={`#74C043`} padding={`3px`} color={`#fff`} borderRadius={`100%`} mx={`1rem`}/>
                Item Status
              </Box>
            </HStack>
            </Box>
         </VStack>
    </Box>
  )
}

export default AddItem