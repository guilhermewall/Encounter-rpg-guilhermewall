import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../Components/Button";
import { UserContext } from "../../Contexts/UserContext";
import { iFormData } from "./../../Contexts/UserContext/index";
import { Link, useNavigate } from "react-router-dom";
import {
  PasswordInput,
  RegisterInput,
  RegisterPage,
  TextContainerRegister,
} from "./styles";
import { FormDivRegister } from "./FormDivRegister";
import { RegisterContainer } from "./styles";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { DivPasswordContainerRegister } from "../Register/styles";

export const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      navigate("/dashBoard");
    }
  }, []);

  const {
    registerUser,
    showPassword,
    clickShowPassword,
    showPasswordConfirm,
    clickShowConfirmPassword,
  } = useContext(UserContext);
  const onSubmit: SubmitHandler<iFormData> = (data) => {
    registerUser(data);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    nick: yup.string().required("Nickname do jogador obrigatório"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Email não validado"),

    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(8, "Minimo oito caracteres")
      .matches(/(\W)|_/, "Deve conter um caracter especial"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),

    role: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterPage>
      <RegisterContainer>
        <TextContainerRegister>
          Aqui no <span>RPG Encounter</span> você encontra grupo de pessoas para
          iniciar uma campanha de rpg de mesa online da sua prefêrencia em
          qualquer plataforma. Faça seu login e divirta-se.
        </TextContainerRegister>
        <FormDivRegister>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <RegisterInput
              id={"email"}
              type={"email"}
              placeholder={"Digite seu email"}
              {...register("email")}
            />
            <span> {errors.email?.message} </span>
            <label htmlFor="name">Nome do Usuário</label>
            <RegisterInput
              id={"name"}
              type={"text"}
              placeholder={"Digite seu nome"}
              {...register("name")}
            />
            <span> {errors.name?.message} </span>
            <label htmlFor="nick">Nick Name</label>
            <RegisterInput
              id={"nick"}
              type={"text"}
              placeholder={"Digite seu nickname"}
              {...register("nick")}
            />
            <span> {errors.nick?.message} </span>
            <label htmlFor="password">Senha</label>
            <DivPasswordContainerRegister>
              <PasswordInput
                id={"password"}
                type={showPassword ? "text" : "password"}
                placeholder={"Digite sua senha"}
                {...register("password")}
              />
              <button type="button" onClick={clickShowPassword}>
                {" "}
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </DivPasswordContainerRegister>
            <span> {errors.password?.message} </span>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <DivPasswordContainerRegister>
              <PasswordInput
                id={"confirmPassword"}
                type={showPasswordConfirm ? "text" : "password"}
                placeholder={"Confirme a senha"}
                {...register("confirmPassword")}
              />
              <button type="button" onClick={clickShowConfirmPassword}>
                {" "}
                {showPasswordConfirm ? <BiShow /> : <BiHide />}
              </button>
            </DivPasswordContainerRegister>
            <span> {errors.confirmPassword?.message} </span>
            <Button name={"Cadastre"} />
            <p>
              Já possui uma conta?
              <Link to={`/login`}> clique aqui</Link>
            </p>
          </form>
        </FormDivRegister>
      </RegisterContainer>
    </RegisterPage>
  );
};
