import React, { useCallback, useState } from "react";
import { usePromiseModal } from "../dialog/usePromiseModal";
import Button from "../component/Button";
import { ButtonWrapper, LabelInput, Layout, TitleBox } from "../styles/commonStyle";
import Input from "../component/Input";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  const { showModal } = usePromiseModal();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      id,
      password
    });
    if (id === "" || password === "") {
      console.log(id, password);
    }

    // TODO 서버에 자료 보내기

    // 성공하면 모달창 띄우기
    showModal(<>로그인 합니다!</>);

    // 이후 담벼락 생성 페이지로 이동
  };

  return (
    <Layout>
      <TitleBox>
        <h1 className="title">함박눈</h1>
        <h2 className="subTitle">눈이 오는 날에, 우리 만날까요?</h2>
      </TitleBox>
      <LoginForm onSubmit={onSubmit}>
        <LabelInput>
          <label htmlFor="id">아이디(영어 10자 이하)</label>
          <Input
            name="id"
            minLength={4}
            maxLength={10}
            type="text"
            onChange={onChangeId}
            placeHolder="아이디를 입력해주세요."/>
        </LabelInput>
        <LabelInput>
          <label htmlFor="password">비밀번호</label>
          <Input
            name="password"
            minLength={4}
            type="password"
            onChange={onChangePassword}
            placeHolder="비밀번호를 입력해주세요."/>
        </LabelInput>
        <ButtonWrapper>
          <Button
            type="submit"
          >로그인</Button>
        </ButtonWrapper>
      </LoginForm>
      <LinkWrapper>
        <Link to={"/signup"}>함박눈 담벼락 만들기</Link>
      </LinkWrapper>
    </Layout>
  );
};

export default Login;

const LoginForm = styled.form`
  display: grid;
  grid-template-columns: repeat(1);
  gap: 1rem;
  padding: 0 var(--layout-padding-side);
`;

const LinkWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    font-size: var(--anchor-font-size);
    color: var(--anchor-font-size);
  }
`;
