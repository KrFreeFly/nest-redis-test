import { User } from '../../users/dto/user.dto';
import { PassType } from '../../pass-types/dto/pass-type.dto';

export class Pass {
  id: number;
  userId: string;
  user?: User;
  passTypeId: number;
  passType?: PassType;
  startDate: string;
  endDate: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
}
