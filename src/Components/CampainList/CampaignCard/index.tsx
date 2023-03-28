import { ViewModal } from "../../ViewModal";
import { CampaignTitleAndImg, CardContainer, CardDiv } from "./style";
import {
  DashboardContext,
  iRegisterCampaign,
} from "../../../Contexts/DashboardContext";
import { useContext, useState } from "react";
import { ViewModalPlayers } from "../../ViewModal/ViewModalPlayers";

interface ICampaignCardProps {
  setShowCamp: (showCamp: boolean) => void;
  lobby: iRegisterCampaign;
  id: number;
}

export const CampaignCard = ({ lobby, id }: ICampaignCardProps) => {

  const { setCardData, getLobbyPlayers, authUser } =
    useContext(DashboardContext);
  const [showCamp, setShowCamp] = useState(false);

  const getCardData = (data: iRegisterCampaign) => {
    setShowCamp(true);

    const cardData = {
      campaignName: data.campaignName,
      campaignImg: data.campaignImg,
      playersAmount: data.playersAmount,
      description: data.description,
      rpgGame: data.rpgGame,
      plataform: data.plataform,
      id: data.id,
      userId: data.userId,
      master: {
        email: authUser?.email!,
        id: authUser?.id!,
        name: authUser?.name!,
        nick: authUser?.nick!,
        password: authUser?.password!,
      },
    };
    setCardData(cardData);
    ViewModalPlayers();
  };
  return (
    <CardDiv>
      <CardContainer>
        <CampaignTitleAndImg>
          <div className="div__tittle">
            <h3>{lobby.campaignName}</h3>
          </div>
          <div className="img__div">
            <img src={lobby.campaignImg} alt="Imagem da Campanha" />
            <div className="redAndGreen">
              <span className="red">{lobby.rpgGame}</span>
              <span className="green">{lobby.plataform}</span>
            </div>
          </div>
        </CampaignTitleAndImg>
        <div className="statusContainer">
          <span> Max. Players: {lobby.playersAmount} </span>
        </div>
        <button
          onClick={() => {
            getCardData(lobby);
            getLobbyPlayers(id);
          }}
        >
          Ver Detalhes
        </button>
      </CardContainer>

      {showCamp && <ViewModal id={id} lobby={lobby} setShowCamp={setShowCamp}></ViewModal>}
    </CardDiv>
  );
};
