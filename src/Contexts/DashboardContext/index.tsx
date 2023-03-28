import { createContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services";

interface iDashboardContextProps {
  children: ReactNode;
}

interface iDashboardContext {
  RegisterCampaign: (data: iRegisterCampaign) => void;
  showModal: boolean;
  ModalView: () => void;
  setAuthUser: React.Dispatch<React.SetStateAction<iAuthUser | null>>;
  authUser: iAuthUser | null;
  lobbies: iRegisterCampaign[];
  setLobbies: React.Dispatch<React.SetStateAction<iRegisterCampaign[]>>;
  cardData: iRegisterCampaign;
  setCardData: React.Dispatch<React.SetStateAction<iRegisterCampaign>>;
  viewListPlayers: IViewModalPlayers[];
  setViewListPlayers: React.Dispatch<React.SetStateAction<IViewModalPlayers[]>>;
  getLobbyPlayers: (id: number) => Promise<void>;
  enterLobby: (id: number) => Promise<void>;
  deleteCampaign: (id: number) => Promise<void>;
  exitLobby: (id: number) => Promise<void>;
  setPlayerIdLobby: React.Dispatch<React.SetStateAction<string>>;
  enterCamp: boolean;
  allPlayers: IViewModalPlayers[];
  setShowCamp: (showCamp: boolean) => void;
  showCamp: boolean;
  getUser: () => Promise<void>;
  getLobbies: () => Promise<void>;
}

export interface iRegisterCampaign {
  userId: string;
  campaignName: string;
  playersAmount: number;
  description: string;
  rpgGame: string;
  plataform: string;
  campaignImg: string;
  id: number;
  master: {
    email: string;
    id: string;
    name: string;
    nick: string;
    password: string;
  };
}

export interface iAuthUser {
  email: string;
  id: string;
  name: string;
  nick: string;
  password: string;
}

export interface iPlayers {
  email: string;
  id: string;
  name: string;
  nick: string;
}

export interface IGetUser {
  email: string;
  password: "$2a$10$R5j1xfda9QwPmSKuDcF.Ze7f3mEo7FtynZShlr20TIvaqRcFViF7y";
  id: 1;
  name: "teste";
  nickname: "nick teste";
}

interface IViewModalPlayers {
  campaignId: number;
  email: string;
  id: number;
  name: string;
  nickname: string;
  userId: number;
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardProvider = ({ children }: iDashboardContextProps) => {
  const [showModal, setShowModal] = useState(false);
  const [lobbies, setLobbies] = useState([] as iRegisterCampaign[]);
  const [playerIdLobby, setPlayerIdLobby] = useState("");
  const [cardData, setCardData] = useState({} as iRegisterCampaign);
  const [viewListPlayers, setViewListPlayers] = useState(
    [] as IViewModalPlayers[]
  );
  const [authUser, setAuthUser] = useState<iAuthUser | null>(null);
  const [enterCamp, setEnterCamp] = useState(false);
  const [allPlayers, setAllPlayers] = useState([] as IViewModalPlayers[]);
  const [showCamp, setShowCamp] = useState(false);

  const token = localStorage.getItem("Token");
  const id = localStorage.getItem("Id");

  const ModalView = () => {
    setShowModal((prevState: boolean) => !prevState);
  };

  const RegisterCampaign = async (data: iRegisterCampaign) => {
    data.master = {
      email: `${authUser?.email}`,
      id: `${authUser?.id}`,
      name: `${authUser?.name}`,
      nick: `${authUser?.nick}`,
      password: `${authUser?.password}`,
    };

    try {
      const response = await api.post("campaign", data);
      
      toast.success("Campanha criada");

      setLobbies([...lobbies, response.data]);
    } catch (error) {
      toast.error("erro");
    }
  };

  const deleteCampaign = async (id: number) => {
    try {

      await api.delete(`campaign/${id}`);

      const filteredLobbies = lobbies.filter((lobby) => lobby.id !== id);

      setLobbies(filteredLobbies);

      toast.success("Campanha deletada com sucesso!");
    } catch (error) {
      toast.error("erro ao deletar");
    }
  };

  const exitLobby = async (id: number) => {
    const userId = localStorage.getItem("Id");

    if (userId === null) return;

    const player = viewListPlayers.find(
      (player) => player.userId === parseInt(userId)
    )!;

    try {

      await api.delete(`players/${player.id}`);

      setEnterCamp(false);

      toast.success("Você saiu da sala");
    } catch (error) {
      toast.error("Você não conseguiu sair");
      console.error(error);
    }
  };

  const getLobbies = async () => {
    try {

      const response = await api.get<any, any>("campaign");
      setLobbies(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const getLobbyPlayers = async (id: number) => {
    const idPlayer = localStorage.getItem("Id");

    try {
      const response = await api.get<IViewModalPlayers, any>("players");

      const filteredPlayers = response.data.filter(
        (player: IViewModalPlayers) => player.campaignId === id
      );

      if (idPlayer) {
        const result = filteredPlayers.some(
          (player: IViewModalPlayers) => player.userId === Number(idPlayer)
        );

        setEnterCamp(result);
      }

      setViewListPlayers(filteredPlayers);
    } catch (error) {
      console.log(error);
    }
  };

  const enterLobby = async (id: number) => {

    const data = {
      campaignId: id,
      email: authUser?.email,
      userId: authUser?.id,
      name: authUser?.name,
      nickname: authUser?.nick,

    };
    try {
      const resp = await api.post<any, any>("players", data);
      getLobbyPlayers(id);
      console.log(resp);

      toast.success("Você entrou na sala");
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPlayerGame = async () => {
    try {
      const players = await api.get<IViewModalPlayers, any>("players");
      console.log(players);

      setAllPlayers(players.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function getUser() {
    const id = localStorage.getItem("Id");
    try {
      const { data } = await api.get(`users/${id}`);

      setAuthUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      getUser();
      getLobbies();
      getAllPlayerGame();
    }
  }, [token]);

  return (
    <DashboardContext.Provider
      value={{
        RegisterCampaign,
        setAuthUser,
        authUser,
        showModal,
        ModalView,
        lobbies,
        cardData,
        setCardData,
        viewListPlayers,
        setViewListPlayers,
        getLobbyPlayers,
        enterLobby,
        deleteCampaign,
        exitLobby,
        setPlayerIdLobby,
        enterCamp,
        allPlayers,
        setShowCamp,
        showCamp,
        getUser,
        getLobbies,
        setLobbies,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
