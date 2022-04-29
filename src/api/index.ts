import { auth, IAuthApi } from "./auth";
import { IGroupApi, group } from "./group";
import { ITredApi, tred } from "./tred";

export interface IApi {
  auth: IAuthApi;
  group: IGroupApi;
  tred: ITredApi;
}

export const api: IApi = {
  auth,
  group,
  tred,
};
