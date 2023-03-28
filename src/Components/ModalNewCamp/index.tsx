import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  DashboardContext,
  iRegisterCampaign,
} from "../../Contexts/DashboardContext";
import { ModalScroll } from "../ModalScroll";
import { FormNewCamp } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdClose } from "react-icons/md";

const schemaForm = yup.object({
  campaignName: yup
    .string()
    .required("Digite o nome da campanha")
    .max(30, "Deve ter no máximo 30 caracteres"),
  playersAmount: yup.number().required(),
  description: yup.string().required("Digite a descrição da campanha"),
  rpgGame: yup
    .string()
    .required("Digite o nome do jogo")
    .max(15, "Deve ter no máximo 15 caracteres"),
  plataform: yup
    .string()
    .required("Digite o nome da plataforma")
    .max(15, "Deve ter no máximo 15 caracteres"),
  campaignImg: yup
    .string()
    .required("Foto da campanha")
    .url("Deve ser uma URL de imagem"),
});
interface IModalNewCampProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalNewCamp = ({ setShowModal }: IModalNewCampProps) => {
  const { RegisterCampaign } = useContext(DashboardContext);
  const id = localStorage.getItem("Id");
  const onSubmit = (data: iRegisterCampaign) => {
    reset();
    data.userId = id!;
    RegisterCampaign(data);
    setShowModal(false)
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterCampaign>({
    resolver: yupResolver(schemaForm),
  });
  return (
    <ModalScroll callback={setShowModal}>
      <FormNewCamp onSubmit={handleSubmit(onSubmit)}>
        <h2> Cadastrar Campanha</h2>
        <button className="closed" onClick={() => setShowModal(false)}>
          <MdClose />
        </button>
        <div>
          <div className="div__colum">
            <label htmlFor="name"> Nome da Campanha</label>
            <input
              id="name"
              type="text"
              placeholder="Nome da campanha"
              {...register("campaignName")}
            />
            <span> {errors.campaignName?.message} </span>
          </div>
          <div className="div__colum">
            <label htmlFor="number"> Nº Jogadores</label>
            <select id="number" {...register("playersAmount")}>
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
              <option> 6</option>
              <option> 7</option>
              <option> 8</option>
            </select>
            <span />
          </div>
        </div>
        <label htmlFor="description"> Descrição da Campanha</label>
        <textarea
          id="description"
          placeholder="Descrição da Campanha"
          {...register("description")}
        />
        <span> {errors.description?.message} </span>
        <label htmlFor="nameGame"> Jogo RPG</label>
        <input
          id="nameGame"
          type="text"
          placeholder="Ex: D&D"
          {...register("rpgGame")}
        />
        <span> {errors.rpgGame?.message} </span>
        <label htmlFor="platform"> Plataform</label>
        <input
          id="platform"
          type="text"
          placeholder="Ex: Roll 20"
          {...register("plataform")}
        />
        <span> {errors.plataform?.message} </span>
        <label htmlFor="image"> Capa da Campanha</label>
        <input
          id="image"
          type="text"
          placeholder="URL Imagem"
          {...register("campaignImg")}
        />
        <span> {errors.campaignImg?.message} </span>
        <div className="align__center">
          <button className="btn__cadastrar"> Cadastrar</button>
        </div>
      </FormNewCamp>
    </ModalScroll>
  );
};
