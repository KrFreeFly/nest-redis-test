import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Roles from '../roles/roles.model';
import { UserRoles } from '../roles/dto/roles.dto';

@Table({
  tableName: 'users',
})
export default class Users extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  login: string;

  @Column({
    type: DataType.STRING,
    field: 'password_hash',
  })
  passwordHash: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  vk: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  insta: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'first_name',
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'last_name',
  })
  lastName: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  birthDate: string;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
    field: 'role_id',
  })
  roleId: number;

  @BelongsTo(() => Roles)
  role: UserRoles;

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
