import axios from "axios";

export const api = axios.create({
  baseURL: "https://rpg-fakeapi-projeto-frontend.herokuapp.com/",
});
