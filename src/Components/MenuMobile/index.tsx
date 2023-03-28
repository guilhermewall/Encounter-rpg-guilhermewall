import React, { useContext } from "react";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { DashboardContext } from "../../Contexts/DashboardContext";

export interface iMenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<any>;
}

export const MenuMobile = ({
  menuIsVisible,
  setMenuIsVisible,
}: iMenuMobileProps) => {
  const { authUser, lobbies } = useContext(DashboardContext);

  const lobbiesMaster = lobbies.filter(
    (lobbies) => Number(lobbies.userId) === Number(authUser?.id)
  );

  return (
    <>
      <Container IsVisible={menuIsVisible}>
        <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
        <div>
          <h3> Suas Campanhas</h3>
          <ul>
            {lobbiesMaster.map((lobby) => (
              <li key={lobby.id}>
                <p>{lobby.campaignName}</p>
                <button>Ver</button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};
