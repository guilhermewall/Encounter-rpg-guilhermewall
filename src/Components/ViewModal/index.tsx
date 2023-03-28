import usuario from "../../Assets/usuario.png";
import { ModalScroll } from "../ModalScroll";
import { Content } from "./styles";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import {
  DashboardContext,
  iRegisterCampaign,
} from "../../Contexts/DashboardContext";

export interface ICardProps {
  setShowCamp: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  lobby: iRegisterCampaign;
}

export const ViewModal = ({ setShowCamp, id, lobby }: ICardProps) => {
  const {
    viewListPlayers,
    cardData,
    enterLobby,
    getLobbyPlayers,
    deleteCampaign,
    exitLobby,
    enterCamp,
    authUser,
    setViewListPlayers,
  } = useContext(DashboardContext);

  const [isMaster, setIsMaster] = useState(false);

  const handleExit = () => {
    exitLobby(Number(authUser?.id));

    const playersFiltered = viewListPlayers.filter(
      (player) => player.userId !== Number(authUser?.id)
    );

    setViewListPlayers(playersFiltered);
  };

  useEffect(() => {
    getLobbyPlayers(id);

    if (Number(authUser?.id) === Number(cardData.userId)) {
      setIsMaster(true);
    }
  }, [id]);
  

  return (
    <>
      <ModalScroll callback={setShowCamp}>
        <Content>
          <div>
            <h2>{cardData.campaignName}</h2>
            {isMaster && (
              <button
                type="button"
                className="btn__deletar"
                onClick={() => {
                  deleteCampaign(id);
                  setShowCamp(false);
                }}
              >
                Deletar
              </button>
            )}
            <button className="closed" onClick={() => setShowCamp(false)}>
              <MdClose />
            </button>
          </div>
          <div>
            <div>
              <img src={usuario} alt="Imagem do Usuário" />
              <h4>Mestre {lobby.master.nick}</h4>
            </div>
          </div>
          <div className="img__div">
            <img src={cardData.campaignImg} alt="Imagem da Campanha" />
            <div>
              <span className="red">{cardData.rpgGame}</span>
              <span className="green">{cardData.plataform}</span>
            </div>
          </div>
          <p>{cardData.description}</p>

          <h3> Jogadores:</h3>
          <div className="players">
            <ul>
              {viewListPlayers.map((element) => (
                <li key={element.id}>{element.nickname}</li>
              ))}
            </ul>
          </div>

          {enterCamp ? (
            <button className="btn__cadastrar" onClick={handleExit}>
              Sair
            </button>
          ) : (
            <button
              className="btn__cadastrar"
              onClick={() => {
                enterLobby(id);
              }}
            >
              Entrar
            </button>
          )}
        </Content>
      </ModalScroll>
    </>
  );
};
