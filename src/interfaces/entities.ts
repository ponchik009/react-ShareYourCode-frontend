export interface IGroupItem {
  id: number;
  name: string;
  description: string;
  membersCount: number;
}

export interface IUser {
  id: number;
  name: string;
  isPublic: boolean;
}

export interface ITred {
  id: number;
  name: string;
}

export interface ITredFull {
  id: number;
  name: string;
  packages: IPackage[];
  groupId: number;
}

export interface IPackage {
  id: number;
  name: string;
}

export interface ILanguage {
  id: number;
  name: string;
}

export interface IPackageFull {
  id: number;
  code: string;
  user: IUser;
  tred: ITred;
  comments: string[];
  language: ILanguage;
  review: string | null;
}
