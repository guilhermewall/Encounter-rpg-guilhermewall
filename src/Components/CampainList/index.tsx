import { useContext, useState } from "react";
import {
  BannerContainer,
  DashboardMainContent,
  DivDashboard,
  FilterAndIcon,
  FilterContainer,
  MagnifyingGlassButton,
  NewCampaignButton,
} from "../CampainList/styles";
import DashboardBanner from "../../Assets/Taverna-RPG 1.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CampaignCard } from "./CampaignCard";
import { ModalNewCamp } from "../ModalNewCamp";
import { DashboardContext } from "../../Contexts/DashboardContext";

export const CampaignList = () => {
  const { lobbies } = useContext(DashboardContext);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLobbies =
    search.length > 0
      ? lobbies.filter(
          (lobby) =>
            lobby.campaignName.toLowerCase().includes(search) ||
            lobby.plataform.toLowerCase().includes(search) ||
            lobby.rpgGame.toLowerCase().includes(search)
        )
      : lobbies;
  return (
    <>
      <DashboardMainContent>
        <BannerContainer>
          <img src={DashboardBanner} alt="Banner-home" />
          <div>
            <h3> Campanhas </h3>
          </div>
        </BannerContainer>
        <DivDashboard>
          <FilterContainer>
            <FilterAndIcon>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar..."
              />
              <MagnifyingGlassButton>
                <HiMagnifyingGlass size={20} />
              </MagnifyingGlassButton>
            </FilterAndIcon>
            <NewCampaignButton onClick={() => setShowModal(true)} type="button">
              {" "}
              Criar Campanha
            </NewCampaignButton>
          </FilterContainer>

          <div>
            <ul className="card__list">
              {filteredLobbies.map((lobby, index) => {
                return (
                  <CampaignCard
                    key={index}
                    lobby={lobby}
                    id={lobby.id!}
                    setShowCamp={function (showCamp: boolean): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                );
              })}
            </ul>
          </div>
        </DivDashboard>
      </DashboardMainContent>
      {showModal && <ModalNewCamp setShowModal={setShowModal} />}
    </>
  );
};
