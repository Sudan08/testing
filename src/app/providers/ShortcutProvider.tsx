import { useColorMode } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';

const ShortcutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { toggleColorMode } = useColorMode();

  // to prevent toggle when holding key
  const keyPressedRef = useRef<boolean>(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.altKey && e.code === 'KeyQ' && keyPressedRef.current === false) {
        keyPressedRef.current = true;
        toggleColorMode();
      }
    },
    [toggleColorMode]
  );

  const handleKeyUp = useCallback(() => {
    // reset keyPress on release
    keyPressedRef.current = false;
  }, []);

  useEffect(() => {
    if (window !== undefined) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown]);

  return <div>{children}</div>;
};

export default ShortcutProvider;
