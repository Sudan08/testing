import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from '@chakra-ui/react';

const BreadcrumbNav: React.FC<{ orderedNavItems: IBreadcrumNav[] }> = ({
  orderedNavItems,
}) => {
  return (
    <Breadcrumb
      width={`100%`}
      fontWeight={`bold`}
      justifyContent={`center`}
      as={HStack}
      separator={'>'}
    >
      {orderedNavItems.map((item, index) => {
        const has_href = item.link !== '#';
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              href={item.link}
              textDecor={has_href ? 'underline' : 'none'}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
export default BreadcrumbNav;
