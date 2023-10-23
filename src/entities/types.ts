
export interface ITodoListItem {
  id: number
  name: string;
  status: keyof typeof Status;
}

export enum Status {
  normal = 'normal',
  important = 'important',
  done = 'done'
}

export interface INewRecord {
  name: string;
  isImportant: boolean;
}
export interface ISearchQuery {
  name: string;
  status: string;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  fio: string;
}
