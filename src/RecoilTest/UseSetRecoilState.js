import React, { useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
const namesState = atom({
    key: 'namesState',
    default: ['Ella', 'Chris', 'Paul'],
});
function FormContent({ setNamesState }) {
    const [name, setName] = useState('');
    const nameList = useRecoilValue(namesState);
    console.log(nameList);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "text", value: name, onChange: (e) => setName(e.target.value) }),
        React.createElement("button", { onClick: () => setNamesState(names => [...names, name]) }, "Add Name")));
}
const UseSetRecoilState = () => {
    const setNamesState = useSetRecoilState(namesState);
    console.log('상위');
    return React.createElement(FormContent, { setNamesState: setNamesState });
};
export default UseSetRecoilState;
