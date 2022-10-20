import { useColorMode } from '@chakra-ui/react';
import { useCallback, useEffect, FC, PropsWithChildren } from 'react';

const ShortcutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey) {
        if (e.code === 'KeyD' && document?.activeElement?.tagName !== 'INPUT') {
          toggleColorMode();
        }
      }
    },
    [toggleColorMode]
  );

  useEffect(() => {
    if (window !== undefined) {
      document.addEventListener('keypress', handleKeyPress);
    }
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress]);

  return <div>{children}</div>;
};

export default ShortcutProvider;
