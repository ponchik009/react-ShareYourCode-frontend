import { IPackage, IPackageCreate } from "../interfaces/entities";
import axios from "./instance";

const create = async (pack: IPackageCreate) => {
  return axios
    .post<IPackage>("/package", pack)
    .then((response) => response.data)
    .then((pack) => pack);
};

const get = async (id: number) => {
  return axios
    .get<IPackage>(`/package/${id}`)
    .then((response) => response.data)
    .then((pack) => pack);
};

export interface IPackageApi {
  create: (pack: IPackageCreate) => Promise<IPackage>;
  get: (id: number) => Promise<IPackage>;
}

export const pack: IPackageApi = {
  create,
  get,
};
