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
export interface IGroupApi {
  create: (
    name: string,
    description: string,
    isOpen: boolean
  ) => Promise<undefined | number>;
}

export const group: IGroupApi = {
  create,
};
