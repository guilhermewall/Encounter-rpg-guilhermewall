import { CampaignList } from "../../Components/CampainList";
import { ViewModal } from "../../Components/ViewModal";
import { Profile } from "../../Components/Profile";
import { DashboardContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services";
import { DashboardContext } from "../../Contexts/DashboardContext";

export const DashBoard = () => {
  const { setAuthUser, authUser } = useContext(DashboardContext);
  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("Token");
      const id = localStorage.getItem("Id");
      api.defaults.headers.authorization = `Bearer ${token}`;
      if (!token) {
        navigate("/login");
      } else {
        try {
          const { data } = await api.get(`users/${id}`);

          setAuthUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadUser();
  }, []);

  return (
    <>
      <DashboardContainer>
        <Profile />
        <CampaignList />
      </DashboardContainer>
    </>
  );
};
