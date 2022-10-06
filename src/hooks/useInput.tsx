import React, {useCallback, useState} from 'react';

const UseInput = (initValue : string) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])
  return [value, handler]
};

export default UseInput;
