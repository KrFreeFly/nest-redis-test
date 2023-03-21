import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Users from '../users/users.model';
import PassTypes from '../pass-types/pass-types.model';
import { User } from '../users/dto/user.dto';
import { PassType } from '../pass-types/dto/pass-type.dto';

@Table({
  tableName: 'passes',
})
export default class Passes extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: string;

  @BelongsTo(() => Users)
  user: User;

  @ForeignKey(() => PassTypes)
  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'pass_type_id',
  })
  passTypeId: string;

  @BelongsTo(() => PassTypes)
  passType: PassType;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    field: 'start_date',
  })
  startDate: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    field: 'end_date',
  })
  endDate: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'created_at',
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'updated_at',
  })
  updatedAt: string;
}
