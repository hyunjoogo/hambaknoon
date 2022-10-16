import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
const ShareModal = ({ onClose }) => {
    const [userUrl] = useState("dambyurak/erewwe");
    const [isCopy, setIsCopy] = useState(false);
    const copyUrl = () => {
        navigator.clipboard.writeText(userUrl)
            .then(() => {
            setIsCopy(true);
        })
            .catch(error => console.log(error.message));
        console.log(onClose, isCopy);
    };
    return (React.createElement(ShareWrapper, null,
        React.createElement("h1", { className: "title" }, "\uD3B8\uC9C0\uB97C \uC4F8 \uC218 \uC788\uB3C4\uB85D \uB2F4\uBCBC\uB77D\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694."),
        React.createElement(URLWrapper, null,
            React.createElement("p", { className: "url" }, "\uB0B4 \uC8FC\uC18C"),
            React.createElement("div", { className: "url-bg" },
                React.createElement("p", null, userUrl))),
        React.createElement(Copy, null,
            React.createElement("p", { className: "copy" }, "\uBCF5\uC0AC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.")),
        React.createElement(Button, { onClick: copyUrl }, "\uBCF5\uC0AC")));
};
export default ShareModal;
const ShareWrapper = styled.section `
  min-height: 50vh;
  padding-top: 2.5rem;

  .title {
    font-size: var(--main-title-font-size);
    font-weight: bold;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 2.25rem;
  }
`;
const URLWrapper = styled.div `
  .url {
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .url-bg {
    height: 3.5rem;
    background-color: var(--main-color-whitesmoke);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }
`;
const Copy = styled.div `
  height: 3.5rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  //@keyframes fadeout {
  //  from {
  //    opacity: 0;
  //  }
  //  to {
  //    opacity: 1;
  //  }
  //}
  //
  //.fadeOut {
  //  animation: fadeout 2s;
  //}
`;
