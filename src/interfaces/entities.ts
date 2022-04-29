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

export interface IInviteLink {
  inviteLink: string;
  inditeLinkEndDate: string;
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

export interface ITredCreate {
  groupId: number;
  name: string;
  description: string;
  isPublic: boolean;
  maxPackages: number;
  closeDate: Date;
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

export interface ITred {
  id: number;
  name: string;
  description: string;
  isPublic: boolean; // могут ли участники смотреть посылки других?
  maxPackages: number;
  isOpen: boolean; // можно ли отправлять посылки?
  closeDate: string;
  group: IGroupItem;
  packages: IPackageItem[];
}

export interface IPackageItem {
  id: number;
  date: Date;
  user: IUserItem;
  language: ILanguage;
}

export interface ILanguage {
  id: number;
  name: string;
}

export interface IPackage {
  id: number;
  code: string;
  date: Date;
  user: IUser;
  tred: ITredItem;
  comments: string[];
  language: ILanguage;
  review: string | null;
}
