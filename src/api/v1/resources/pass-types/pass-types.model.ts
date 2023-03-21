import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import Passes from '../passes/passes.model';
import { Pass } from '../passes/dto/pass.entity';
import { EDurationTypes } from './dto/pass-type.dto';

@Table({
  tableName: 'passTypes',
})
export default class PassTypes extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  info: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'duration_type',
  })
  durationType: EDurationTypes;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cost: number;

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

  @HasMany(() => Passes)
  passes: Pass[];
}
