export enum EDurationTypes {
  days = 'd',
  weeks = 'w',
  months = 'm',
}

export class PassType {
  id: number;
  name: string;
  info: string;
  amount: number;
  duration: number;
  durationType: EDurationTypes;
  createdAt: string;
  updatedAt: string;
}
