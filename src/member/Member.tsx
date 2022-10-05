import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Button from "../component/Button";

const Member = () => {
  const [index, setIndex] = useState(false);
  const changeIndex = () => {
    setIndex(prev => !prev);
  }
  return (
    <div>
      <header>Member Header</header>
      <span> member/3 하게되면 3번에 해당되는 outlet이 나오는군요</span>
      <Button onClick={changeIndex}>
        현재 : {index ? 'TRUE' : 'FALSE'}
      </Button>
      {index ? <Screen1/> : <Screen2/>}
      <Outlet/> {/* MemberInfo의 component가 Outlet의 위치에 위치하게 된다. */}
    </div>
  );
};

export default Member;
