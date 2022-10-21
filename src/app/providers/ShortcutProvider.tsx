import { useColorMode } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';

const ShortcutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const keysRef = useRef<string[]>([]);
  const keys = keysRef.current;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const index = keys?.indexOf(e.code);
      // only push if element doesnot exist
      if (index === -1) {
        keys?.push(e.code);
        if (keys[0] === 'AltLeft' && keys[1] === 'KeyQ') {
          toggleColorMode();
        }
      }
    },
    [toggleColorMode]
  );

  const handleKeyUp = useCallback(() => {
    // clear all key presses
    keys?.splice(0, keys.length);
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
