import { Situation } from './enum/type.enum';

export interface OpenDetails {
  open: string;
  close: string;
  type: Situation;
}
