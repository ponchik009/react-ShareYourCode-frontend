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

const review = async (id: number, review: string) => {
  return axios
    .patch<IPackage>(`/package/review`, { id, review })
    .then((response) => response.data)
    .then((pack) => pack);
};

export interface IPackageApi {
  create: (pack: IPackageCreate) => Promise<IPackage>;
  get: (id: number) => Promise<IPackage>;
  review: (id: number, review: string) => Promise<IPackage>;
}

export const pack: IPackageApi = {
  create,
  get,
  review,
};
