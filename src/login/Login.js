import React, { useCallback, useState } from "react";
import { usePromiseModal } from "../dialog/usePromiseModal";
import Button from "../component/Button";
import { ButtonWrapper, LabelInput, Layout, TitleBox } from "../styles/commonStyle";
import Input from "../component/Input";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AlertModal from "../component/AlertModal";
const Login = () => {
    const { showModal } = usePromiseModal();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            id,
            password
        });
        if (id === "" || password === "") {
            showModal(React.createElement(AlertModal, { content: "\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C\uD569\uB2C8\uB2E4", onClose: () => {
                } }));
            return console.log("빈값", id, password);
        }
        try {
            if (id === "asdf" && password === "asdf") {
                showModal(React.createElement(React.Fragment, null, "\uB85C\uADF8\uC778 \uD569\uB2C8\uB2E4!"));
            }
            else {
                throw new Error("서버에러!");
            }
        }
        catch (e) {
            showModal(React.createElement(React.Fragment, null, e.message));
        }
        finally {
        }
    };
    return (React.createElement(Layout, null,
        React.createElement(LoginTitleBox, null,
            React.createElement("h1", { className: "title" }, "\uD568\uBC15\uB208"),
            React.createElement("h2", { className: "subTitle" }, "\uB208\uC774 \uC624\uB294 \uB0A0\uC5D0, \uC6B0\uB9AC \uB9CC\uB0A0\uAE4C\uC694?")),
        React.createElement(LoginForm, { onSubmit: onSubmit },
            React.createElement(LabelInput, null,
                React.createElement("label", { htmlFor: "id" }, "\uC544\uC774\uB514(\uC601\uC5B4 10\uC790 \uC774\uD558)"),
                React.createElement(Input, { name: "id", type: "text", onChange: onChangeId, placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." })),
            React.createElement(LabelInput, null,
                React.createElement("label", { htmlFor: "password" }, "\uBE44\uBC00\uBC88\uD638"),
                React.createElement(Input, { name: "password", type: "password", onChange: onChangePassword, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." })),
            React.createElement(ButtonWrapper, null,
                React.createElement(Button, { type: "submit" }, "\uB85C\uADF8\uC778"))),
        React.createElement(LinkWrapper, null,
            React.createElement(Link, { to: "/signup" }, "\uD568\uBC15\uB208 \uB2F4\uBCBC\uB77D \uB9CC\uB4E4\uAE30"))));
};
export default Login;
const LoginTitleBox = styled(TitleBox) `
  flex-direction: column;

  & > :nth-child(1) {
    order: 1
  }

`;
const LoginForm = styled.form `
  display: grid;
  grid-template-columns: repeat(1);
  gap: 1rem;
  padding: 0 var(--layout-padding-side);
`;
const LinkWrapper = styled.div `
  margin-top: 2rem;
  text-align: center;

  a {
    font-size: var(--anchor-font-size);
    color: var(--anchor-font-size);
  }
`;
