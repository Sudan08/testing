import { chakra } from "@chakra-ui/react";
import { Person } from "akar-icons";
import { VStack, Divider, Button, HStack, Box } from "@chakra-ui/react";
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';

const orderedNavItems = [
  {
    label: "Dashboard",
    link: "#/",
  },
  { label: "Lecturer", link: "#/lecturer" },
];

const LecturersPage = () => {
  return (
    <VStack padding={`1rem`} width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={orderedNavItems} />
      <VStack justifyContent={"center"} width={"100%"} height={"100%"}>
        <Box
          width={"100%"}
          boxShadow={`0px 0px 4px rgba(0,0,0,0.25)`}
          borderRadius={`12px`}
        >
          <HStack padding={"1rem"} justifyContent={"center"}>
            <chakra.span color={"brand"}>
              <Person strokeWidth={2} size={24} color={"green"} />
            </chakra.span>
            <CustomHeading
              fontSize={`1.4rem`}
              color={`#2F4858`}
            >
              Lecturer
            </CustomHeading>
          </HStack>

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
                  color={"brand.500"}
                  fontSize={`1.2rem`}
                  fontWeight={`700`}
                >
                  Bishal Khadka
                </chakra.h2>
                <chakra.p>Lecturer- L5CG1,L5CG2,L5CG3,L5CG4</chakra.p>
                <chakra.p>Collaborative Development</chakra.p>
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
                  Bishal Khadka
                </chakra.h2>
                <chakra.p>Lecturer- L5CG1,L5CG2,L5CG3,L5CG4</chakra.p>
                <chakra.p>Collaborative Development</chakra.p>
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
                  Bishal Khadka
                </chakra.h2>
                <chakra.p>Lecturer- L5CG1,L5CG2,L5CG3,L5CG4</chakra.p>
                <chakra.p>Collaborative Development</chakra.p>
              </VStack>
            </VStack>
            <Button
              width={`100%`}
              padding={`1.5rem 0`}
              borderRadius={`6px`}
              type={`submit`}
              transition={`0.2s`}
              color="white"
              _hover={{
                backgroundColor: `brand.700`,
              }}
              backgroundColor="brand.500"
            >
              View All
            </Button>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default LecturersPage;
