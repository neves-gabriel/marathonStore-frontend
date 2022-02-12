import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/auth";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loading-icons";
import { postSignUp } from "../../service/API.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setShowLogIn } = useContext(AuthContext);
  const { setShowSignUp } = useContext(AuthContext);

  function register(event) {
    event.preventDefault();
    setLoading(true);
    const body = { name, email, password };
    const request = postSignUp(body);
    request.then((response) => {
      setShowLogIn(true);
      setShowSignUp(false);
      setLoading(false);
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
      <Forms onSubmit={register}>
        <Input
          disabled={loading}
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Input
          disabled={loading}
          type="password"
          name="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={6}
          required
        />
        <Input
          disabled={loading}
          type="text"
          name="name"
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          minLength={3}
          required
        />
        <Button disabled={loading}>
          {loading ? <ThreeDots /> : "Cadastrar"}
        </Button>
      </Forms>
      <GoTo
        onClick={() => {
          setShowLogIn(true);
          setShowSignUp(false);
        }}
      >
        Já tem uma conta? Faça login!
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
  text-decoration-line: underline;
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
