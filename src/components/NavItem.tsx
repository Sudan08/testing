import { VStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { chakra, useColorModeValue } from '@chakra-ui/system';
import { ReactNode } from 'react';

type navItemPropType = {
  label: string;
  link: string;
  icon?: ReactNode;
  subItems?: {
    label: string;
    link: string;
  }[];
};
const NavItem: React.FC<navItemPropType> = ({
  label,
  link,
  icon,
  subItems,
}) => {
  const location = useLocation();
  const colorActive = useColorModeValue('brand.700', 'brand.300');
  const color = useColorModeValue('gray.800', 'white');
  const is_active =
    location.pathname === link ||
    location.pathname.includes(label.toLowerCase());
  return (
    <VStack fontSize={`inherit`} width={`100%`} alignItems={`flex-start`}>
      <chakra.div
        display={`flex`}
        alignItems={`center`}
        fontSize={'inherit'}
        fontWeight={is_active ? '600' : '500'}
        color={is_active ? colorActive : color}
        transition={`0.2s ease-in-out`}
        _hover={{
          color: `#74C040`,
        }}
      >
        <Link className="nav_link" to={link}>
          {icon}
          {label}
        </Link>
      </chakra.div>
      <VStack
        alignItems={'flex-start'}
        gap={`0.5rem`}
        paddingLeft={`2rem`}
        width={`100%`}
        height={`100%`}
      >
        {subItems
          ? subItems.map((item, index) => {
              const is_active = location.pathname === item.link;
              return (
                <chakra.div
                  fontSize={'inherit'}
                  color={is_active ? colorActive : color}
                  fontWeight={is_active ? '600' : '500'}
                  key={index}
                >
                  <Link to={item.link}>{item.label}</Link>
                </chakra.div>
              );
            })
          : ''}
      </VStack>
    </VStack>
  );
};
export default NavItem;
