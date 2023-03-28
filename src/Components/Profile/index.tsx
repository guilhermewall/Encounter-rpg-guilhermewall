import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardContext,
  iRegisterCampaign,
} from "../../Contexts/DashboardContext";
import {
  ProfileCampaignContainer,
  ProfileContainerDiv,
  ProfileMenu,
} from "./styles";
import ProfilePic from "../../Assets/profileimg.png";
import { FiMenu } from "react-icons/fi";
import { MenuMobile } from "../MenuMobile";
import { ViewModal } from "../ViewModal";
import { ViewModalPlayers } from "../ViewModal/ViewModalPlayers";

export const Profile = () => {
  const {
    setAuthUser,
    authUser,
    lobbies,
    setShowCamp,
    setCardData,
    getLobbyPlayers,
    showCamp,
  } = useContext(DashboardContext);

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const navegate = useNavigate();

  function logout() {
    window.localStorage.clear();
    setAuthUser(null);
    navegate("/login");
  }

  const lobbiesMaster = lobbies.filter(
    (lobbies) => Number(lobbies.userId) === Number(authUser?.id)
  );

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
    <ProfileMenu>
      <ProfileContainerDiv>
        <div className="div__spacebetween">
          <h1 className="title__app">RPG Encounter</h1>
          <button
            className="btn__logout none"
            onClick={() => logout()}
            type="button"
          >
            Logout
          </button>
        </div>
        <div className="div__spacebetween">
          <div className="">
            <img className="avatar__user" src={ProfilePic} alt="Avatar" />
            <h2 className="nickname__user">{authUser?.nick}</h2>
          </div>
          <button className="menu none" onClick={() => setMenuIsVisible(true)}>
            <FiMenu color="var(--color-white)" size={20} />
          </button>
        </div>
        <ProfileCampaignContainer>
          <div className="div__profile">
            <h3 className="title">Campanhas Mestradas</h3>
            <ul className="ul__profile">
              {lobbiesMaster.map((lobby) => {
                return (
                  <li className="camp__li" key={lobby.id}>
                    <p className="title2">{lobby.campaignName}</p>
                    <button
                      className="view"
                      onClick={() => {
                        getCardData(lobby);
                        getLobbyPlayers(lobby.id);
                      }}
                    >
                      Ver
                    </button>

                    {showCamp && (
                      <ViewModal
                        id={lobby.id}
                        setShowCamp={() => setShowCamp(false)}
                        lobby={lobby}
                      ></ViewModal>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </ProfileCampaignContainer>
      </ProfileContainerDiv>

      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <button
        className="show btn__logout"
        onClick={() => logout()}
        type="button"
      >
        Logout
      </button>
    </ProfileMenu>
  );
};
