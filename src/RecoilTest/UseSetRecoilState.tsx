import React, {useState} from 'react';
import {atom, SetterOrUpdater, useRecoilValue, useSetRecoilState} from "recoil";

const namesState = atom<string[]>({
  key: 'namesState',
  default: ['Ella', 'Chris', 'Paul'],
});

function FormContent({setNamesState}: { setNamesState: SetterOrUpdater<string[]> }) {
  const [name, setName] = useState('');
  const nameList = useRecoilValue(namesState);
  console.log(nameList)
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setNamesState(names => [...names, name])}>Add Name</button>
    </>
  )
}

const UseSetRecoilState = () => {
  const setNamesState: SetterOrUpdater<string[]> = useSetRecoilState(namesState);
  console.log('상위')

  return <FormContent setNamesState={setNamesState}/>;
};

export default UseSetRecoilState;
