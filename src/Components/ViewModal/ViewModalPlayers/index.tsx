import { useContext } from "react";
import { DashboardContext } from "../../../Contexts/DashboardContext";


export const ViewModalPlayers = () => {
  const {viewListPlayers} = useContext(DashboardContext);

  return (
    <li>
      {viewListPlayers.map((player) => {
        return player.nickname;
      })}
    </li>
  );
};
