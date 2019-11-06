import { useState, useCallback } from 'react';

type ComponentSizeProps = {
  width: number;
  height: number;
};

const useComponentSize = () => {
  const [size, setSize] = useState<ComponentSizeProps>();

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

export default useComponentSize;
