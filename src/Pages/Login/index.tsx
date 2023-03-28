import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { iUser, UserContext } from "../../Contexts/UserContext";
import { Button } from "../../Components/Button";
import { FormDivLogin } from "./FormDivLogin";
import {
  DivPasswordContainer,
  LoginContainer,
  LoginPage,
  TextContainerLogin,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { PasswordInput } from "../Register/styles";

interface iOnSubmit {
  accessToken: string;
  user: iUser;
  id: string;
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();

  const { loginUser, showPassword, clickShowPassword } =
    useContext(UserContext);

  const onSubmit: SubmitHandler<iOnSubmit> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iOnSubmit>({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginPage>
      <LoginContainer>
        <p>
          Encontre sua mesa de RPG online no <span>Encounter RPG</span>, faça o
          login e divirta-se.{" "}
        </p>
        <TextContainerLogin>
          Aqui no <span>RPG Encounter</span> você encontra grupo de pessoas para
          iniciar uma campanha de rpg de mesa online da sua prefêrencia em
          qualquer plataforma. Faça seu login e divirta-se.
        </TextContainerLogin>
        <FormDivLogin>
          <h2> Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="inputDiv"> */}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type={"email"}
              placeholder={"Digite seu email"}
              {...register("email")}
            />
            <span> {errors.email?.message} </span>
            {/* </div> */}
            {/* <div className="inputDiv"> */}
            <label htmlFor="password">Senha</label>
            <DivPasswordContainer>
              <PasswordInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={"Digite sua senha"}
                {...register("password")}
              />
              <button type="button" onClick={clickShowPassword}>
                {" "}
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </DivPasswordContainer>
            <span> {errors.password?.message} </span>
            {/* </div> */}

            <Button name={"Entrar"} />
            <p>
              Ainda não possui cadastro?
              <Link to={`/register`}> clique aqui</Link>
            </p>
          </form>
        </FormDivLogin>
      </LoginContainer>
    </LoginPage>
  );
};
