import {
  createContext,
  ReactNode,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services";

export interface iFormData {
  name: string;
  nick: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface iUserContext {
  loginUser: (data: iOnSubmit) => void;
  registerUser: (data: iFormData) => void;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  clickShowPassword: () => void;
  clickShowConfirmPassword: () => void;
}

interface iUserContextProps {
  children: ReactNode;
}

export interface iUser {
  email: string;
  id: string;
  name: string;
  nickName: string;
}

interface iOnSubmit {
  accessToken: string;
  user: iUser;
  id: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [showPassword, setShowPassowrd] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const navigate = useNavigate();

  const clickShowPassword = () => {
    setShowPassowrd((prevState: boolean) => !prevState);
  };
  const clickShowConfirmPassword = () => {
    setShowPasswordConfirm((prevState: boolean) => !prevState);
  };

  const registerUser = async (data: iFormData) => {
    delete data.confirmPassword;
    try {
      api.post<iFormData>("users", data);
      navigate("/login");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      toast.error("falha ao realizar o cadastro");
    }
  };

  const loginUser = async (data: iOnSubmit) => {
    try {
      const response = await api.post("login", data);
      localStorage.clear();
      localStorage.setItem("Token", response.data.accessToken);
      localStorage.setItem("Id", response.data.user.id);
      const token = localStorage.getItem("Token");
      api.defaults.headers.authorization = `Bearer ${token}`;

      navigate("/dashboard", { replace: true });
      toast.success("Login realizado com sucesso");

    } catch (error) {
      toast.error("Falha ao realizar login");
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        showPassword,
        clickShowPassword,
        showPasswordConfirm,
        clickShowConfirmPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
