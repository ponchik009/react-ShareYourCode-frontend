import { IGroup, IGroupItem } from "../interfaces/entities";
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

const getGroup = async (id: number) => {
  try {
    const response = await axios.get<IGroup>(`/group/${id}`);
    return response.data;
  } catch (err: any) {
    return err.response.data.message;
  }
};

const enter = async (id: number) => {
  try {
    const response = await axios.patch<IGroup>(`/group/enter/${id}`);
    return response.data;
  } catch (err: any) {
    return err.response.data.message;
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
  getGroup: (id: number) => Promise<IGroup | string>;
  enter: (id: number) => Promise<IGroup | string>;
}

export const group: IGroupApi = {
  create,
  getGroups,
  getGroup,
  enter,
};
