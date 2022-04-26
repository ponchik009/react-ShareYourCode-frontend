export interface IGroupItem {
  id: number;
  name: string;
  description: string;
  membersCount: number;
}

export interface IGroup {
  id: number;
  name: string;
  description: string;
  isOpen: boolean;
  inviteLink: string | null;
  inviteLinkEndDate: string | null;
  members: IUserItem[];
  admin: IUserItem;
  treds: ITredItem[];
}

export interface IUser {
  id: number;
  name: string;
  isPublic: boolean;
}

export interface IUserItem {
  id: number;
  name: string;
}

export interface ITred {
  id: number;
  name: string;
}

export interface ITredItem {
  id: number;
  name: string;
  description: string;
  isPublic: boolean; // могут ли участники смотреть посылки других?
  maxPackages: number;
  isOpen: boolean; // можно ли отправлять посылки?
  closeDate: string;
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
