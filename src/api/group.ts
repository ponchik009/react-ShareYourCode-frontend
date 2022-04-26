import { IGroupItem } from "../interfaces/entities";
import axios from "./instance";

const create = async (name: string, description: string, isOpen: boolean) => {
  try {
    const response = await axios.post("/group", {
      name,
      description,
      isOpen,
    });
    return response.data.id;
  } catch (err) {
    console.log(err);
  }
};

const getGroups = async (groupType: GroupTypes) => {
  try {
    const response = await axios.get<IGroupItem[]>(`/group/${groupType}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export enum GroupTypes {
  PUBLIC = "public",
  MY = "my",
}

export interface IGroupApi {
  create: (
    name: string,
    description: string,
    isOpen: boolean
  ) => Promise<undefined | number>;
  getGroups: (groupType: GroupTypes) => Promise<IGroupItem[]>;
}

export const group: IGroupApi = {
  create,
  getGroups,
};
