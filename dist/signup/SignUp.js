import React, { useCallback, useState } from 'react';
import Input from "../component/Input";
import styled from "styled-components";
import Button from "../component/Button";
import { usePromiseModal } from "../dialog/usePromiseModal";
import { ButtonWrapper, LabelInput, Layout, TitleBox } from '../styles/commonStyle';
const SignUp = () => {
    const { showModal } = usePromiseModal();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [isId, setIsId] = useState(null);
    const [isPassword, setIsPassword] = useState(null);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(null);
    const onChangeId = useCallback((e) => {
        const idRegex = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
        const idCurrent = e.target.value;
        setId(e.target.value);
        if (!idRegex.test(idCurrent)) {
            setIdMessage('4글자 이상 10글자 이하로 입력해주세요.');
            setIsId(false);
        }
        else {
            setIdMessage('올바른 아이디 형식입니다 :)');
            setIsId(true);
        }
    }, []);
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
            setIsPassword(false);
        }
        else {
            setPasswordMessage('안전한 비밀번호에요 : )');
            setIsPassword(true);
        }
    }, []);
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value;
        setPasswordConfirm(passwordConfirmCurrent);
        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )');
            setIsPasswordConfirm(true);
        }
        else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ');
            setIsPasswordConfirm(false);
        }
    }, [password]);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ id, password, passwordConfirm });
        showModal(React.createElement(React.Fragment, null, "\uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4~"));
    };
    return (React.createElement(Layout, null,
        React.createElement(TitleBox, null,
            React.createElement("h1", { className: "title" }, "\uD68C\uC6D0\uAC00\uC785"),
            React.createElement("h2", { className: "subTitle" }, "\uB2F4\uBCBC\uB77D \uB9CC\uB4E4\uAE30")),
        React.createElement(SignUpForm, { onSubmit: onSubmit },
            React.createElement(LabelInput, null,
                React.createElement("label", { htmlFor: "id" }, "\uC544\uC774\uB514(\uC601\uC5B4 10\uC790 \uC774\uD558)"),
                React.createElement(Input, { name: "id", minLength: 4, maxLength: 10, type: "text", isCorrect: isId, onChange: onChangeId, placeHolder: '\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.' }),
                id.length > 0 && React.createElement(Message, { className: `${isId ? 'success' : 'error'}` }, idMessage)),
            React.createElement(LabelInput, null,
                React.createElement("label", { htmlFor: "password" }, "\uBE44\uBC00\uBC88\uD638"),
                React.createElement(Input, { name: "password", minLength: 4, type: "password", isCorrect: isPassword, onChange: onChangePassword, placeHolder: '\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.' }),
                password.length > 0 && React.createElement(Message, { className: `${isPassword ? 'success' : 'error'}` }, passwordMessage)),
            React.createElement(LabelInput, null,
                React.createElement("label", { htmlFor: "passwordConfirm" }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"),
                React.createElement(Input, { name: "passwordConfirm", minLength: 4, type: "password", isCorrect: isPasswordConfirm, onChange: onChangePasswordConfirm, placeHolder: '\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.' })),
            passwordConfirm.length > 0 &&
                React.createElement(Message, { className: `${isPasswordConfirm ? 'success' : 'error'}` }, passwordConfirmMessage),
            React.createElement(ButtonWrapper, null,
                React.createElement(Button, { type: "submit", disabled: !(isId && isPassword && isPasswordConfirm) }, "\uD68C\uC6D0\uAC00\uC785")))));
};
export default SignUp;
const SignUpForm = styled.form `
  display: grid;
  grid-template-columns: repeat(1, 3fr);
  gap: 1rem;
  padding: 0 var(--layout-padding-side);
`;
const Message = styled.span `
  &.success {
    color: #8f8c8b;
  }

  &.error {
    color: var(--input-error-color);
    font-size: var(--input-alert-font-size);
  }
`;
