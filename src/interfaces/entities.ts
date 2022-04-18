export interface IGroup {
  id: number;
  name: string;
  description: string;
  treds: ITred[];
  members: IUser[];
}

export interface IUser {
  id: number;
  name: string;
}

export interface ITred {
  id: number;
  name: string;
}
