import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/auth";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loading-icons";
import { postLogIn } from "../../service/API.js";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useContext(AuthContext);
  const { setShowLogIn } = useContext(AuthContext);
  const { setShowSignUp } = useContext(AuthContext);

  function login(event) {
    event.preventDefault();
    setLoading(true);

    const body = { email, password };

    const request = postLogIn(body);
    request.then((response) => {
      setUserData(response.data);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      setShowLogIn(false);
      setShowSignUp(false);
    });
    request.catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data,
      });
      setLoading(false);
    });
  }

  return (
    <Box>
      <Forms onSubmit={login}>
        <Input
          disabled={loading}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Input
          disabled={loading}
          type="password"
          name="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={6}
          required
        />
        <Button disabled={loading}>{loading ? <ThreeDots /> : "Entrar"}</Button>
      </Forms>
      <GoTo
        onClick={() => {
          setShowLogIn(false);
          setShowSignUp(true);
        }}
      >
        Não tem uma conta? Cadastre-se!
      </GoTo>
    </Box>
  );
}
// ::::::::::Styled-Components::::::::::
const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  width: 90%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 10px;
  ::placeholder {
    color: #dbdbdb;
  }
  :disabled {
    background: #f2f2f2;
    ::placeholder {
      color: #afafaf;
    }
  }
`;
const GoTo = styled.p`
  margin-top: 22px;
  margin-bottom: 22px;
  font-size: 14px;
  text-align: center;
  color: #5381f1;
  cursor: pointer;
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Button = styled.button.attrs({
  type: "submit",
})`
  width: 90%;
  height: 45px;
  background-color: #5381f1;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;
