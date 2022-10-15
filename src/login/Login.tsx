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
      showModal(
        <AlertModal
          content="아이디 또는 비밀번호를 입력해야합니다"
          onClose={() => {
          }}
        />
      );
      return console.log("빈값", id, password);
    }
    // TODO 로딩걸기
    try {
      // TODO 서버에 자료 보내기
      // 성공하면 어디로 가야하나요?
      // 1. 나의 담벼락으로 이동
      // 거기서 담벼락이 없으면 담벼락 만들기로 이동

      if (id === "asdf" && password === "asdf") {
        showModal(<>로그인 합니다!</>);
      } else {
        throw new Error("서버에러!");
      }
    } catch (e: any) {
      showModal(<>{e.message}</>);
    } finally {
      // TODO 로딩 close
    }

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
            // minLength={4}
            // maxLength={10}
            type="text"
            onChange={onChangeId}
            placeholder="아이디를 입력해주세요."/>
        </LabelInput>
        <LabelInput>
          <label htmlFor="password">비밀번호</label>
          <Input
            name="password"
            // minLength={4}
            type="password"
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."/>
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
