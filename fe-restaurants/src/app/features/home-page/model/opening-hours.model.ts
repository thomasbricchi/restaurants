import { TypeEnum } from './enum/type.enum';

export interface OpeningHours {
  start: string;
  end: string;
  type: TypeEnum;
}
