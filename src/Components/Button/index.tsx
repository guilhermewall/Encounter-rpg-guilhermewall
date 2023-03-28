import { StyledButton } from "./styles";

interface iButtonProp {
  name: string;
}

export const Button = ({ name }: iButtonProp) => {
  return <StyledButton>{name}</StyledButton>;
};
