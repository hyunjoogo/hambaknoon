import React, {useCallback, useState} from 'react';
import Input from "../component/Input";
import styled from "styled-components";
import Button from "../component/Button";

const SignUp = () => {
  const [id, setId] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const [idMessage, setIdMessage] = useState<string>('')
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [passwordMessage, setPasswordMessage] = useState<string>('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')

  const [isId, setIsId] = useState<boolean>(false)
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)


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
    console.log()
  }

  return (
    <form onSubmit={onSubmit}>
      <LabelInput>
        <label htmlFor="id">아이디(영어 10자)</label>
        <Input
          name="id"
          minLength={4}
          maxLength={10}
          type="text"
          onChange={onChangeId}
          placeHolder='아이디를 입력해주세요.'/>
        {id.length > 0 && <Message className={`${id ? 'success' : 'error'}`}>{idMessage}</Message>}
      </LabelInput>
      <LabelInput>
        <label htmlFor="passwd">비밀번호</label>
        <Input
          name="passwd"
          minLength={4}
          type="password"
          onChange={onChangePassword}
          placeHolder='비밀번호를 입력해주세요.'/>
        {password.length > 0 && <Message className={`${password ? 'success' : 'error'}`}>{passwordMessage}</Message>}

      </LabelInput>
      <LabelInput>
        <label htmlFor="passwd2">비밀번호 확인</label>
        <Input
          name="passwd2"
          minLength={4}
          type="password"
          onChange={onChangePasswordConfirm}
          placeHolder='비밀번호를 다시 입력해주세요.'/>
      </LabelInput>
      <Button
        type="submit"
        disabled={!(isId && isPassword && isPasswordConfirm)}
      >회원가입</Button>
    </form>
  );
};

export default SignUp;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  label {

  }
`;

const Message = styled.span`
  .success {
    color: #8f8c8b;
  }

  .error {
    color: #ff2727;
  }
`;
