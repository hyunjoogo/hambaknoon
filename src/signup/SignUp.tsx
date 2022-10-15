import React, {useCallback, useState} from 'react';
import Input from "../component/Input";
import styled from "styled-components";
import Button from "../component/Button";
import { usePromiseModal } from "../dialog/usePromiseModal";
import { ButtonWrapper, LabelInput, Layout, TitleBox } from '../styles/commonStyle';

const SignUp = () => {
  const {showModal} = usePromiseModal();

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [idMessage, setIdMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  const [isId, setIsId] = useState<boolean | null>(null);
  const [isPassword, setIsPassword] = useState<boolean | null>(null)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean | null>(null)


  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const idRegex = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
    const idCurrent = e.target.value
    setId(e.target.value);

    if (!idRegex.test(idCurrent)) {
      setIdMessage('4글자 이상 10글자 이하로 입력해주세요.')
      setIsId(false)
    } else {
      setIdMessage('올바른 아이디 형식입니다 :)')
      setIsId(true)
    }
  }, [])

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 : )')
      setIsPassword(true)
    }
  }, [])

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({id, password, passwordConfirm})
    // TODO 서버에 자료 보내기

    // 성공하면 모달창 띄우기
    showModal(<>성공했습니다~</>)

    // 이후 담벼락 생성 페이지로 이동
  }

  return (
    <Layout>
      <TitleBox>
        <h1 className="title">회원가입</h1>
        <h2 className="subTitle">담벼락 만들기</h2>
      </TitleBox>
      <SignUpForm onSubmit={onSubmit}>
        <LabelInput>
          <label htmlFor="id">아이디(영어 10자 이하)</label>
          <Input
            name="id"
            minLength={4}
            maxLength={10}
            type="text"
            isCorrect={isId}
            onChange={onChangeId}
            placeholder='아이디를 입력해주세요.'/>
          {id.length > 0 && <Message className={`${isId ? 'success' : 'error'}`}>{idMessage}</Message>}
        </LabelInput>
        <LabelInput>
          <label htmlFor="password">비밀번호</label>
          <Input
            name="password"
            minLength={4}
            type="password"
            isCorrect={isPassword}
            onChange={onChangePassword}
            placeholder='비밀번호를 입력해주세요.'/>
          {password.length > 0 && <Message className={`${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Message>}
        </LabelInput>
        <LabelInput>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <Input
            name="passwordConfirm"
            minLength={4}
            type="password"
            isCorrect={isPasswordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder='비밀번호를 다시 입력해주세요.'/>
        </LabelInput>
        {passwordConfirm.length > 0 &&
          <Message className={`${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</Message>}
        <ButtonWrapper>
          <Button
            type="submit"
            disabled={!(isId && isPassword && isPasswordConfirm)}
          >회원가입</Button>
        </ButtonWrapper>
      </SignUpForm>
    </Layout>
  );
};

export default SignUp;




const SignUpForm = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 3fr);
  gap: 1rem;
  padding: 0 var(--layout-padding-side);
`;


const Message = styled.span`
  &.success {
    color: #8f8c8b;
  }

  &.error {
    color: var(--input-error-color);
    font-size: var(--input-alert-font-size);
  }
`;


