import { CardStyled } from "./styles";
import usuario from "../../Assets/usuario.png";

export interface ICardProps {
  setShowCamp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Card = ({ setShowCamp }:ICardProps) => {
  return (
    <CardStyled>
      <h2>Mida de Pandalin</h2>
      <div className="img__camp">
        <span className="red">D&D</span>
        <span className="green">Roll20</span>
      </div>
      <div className="div__user">
        <img src={usuario} alt="" />
        <p>Mestre Splinter</p>
      </div>
      <span>Jogadores: 1/6</span>
      <span>Status à iniciar</span>
      <button onClick={() => setShowCamp(true)} type="button">
        Ver detalhes
      </button>
    </CardStyled>
  );
};
