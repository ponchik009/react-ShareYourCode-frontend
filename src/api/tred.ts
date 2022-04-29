import { ITred, ITredCreate } from "../interfaces/entities";
import axios from "./instance";

const create = async (tred: ITredCreate) => {
  return axios
    .post<ITred>("/tred", tred)
    .then((response) => response.data)
    .then((tred) => tred);
};

export interface ITredApi {
  create: (tred: ITredCreate) => Promise<ITred>;
}

export const tred: ITredApi = {
  create,
};
