import React from 'react';
import {useLocation} from "react-router-dom";

const Test = () => {
  const {pathname} = useLocation();
  return (
    <div>
      This is {pathname}
    </div>
  );
};

export default Test;
