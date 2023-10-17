
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
