import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import Users from '../users/users.model';
import { User } from '../users/dto/user.entity';

@Table({
  timestamps: false,
  tableName: 'roles',
})
export default class Roles extends Model {
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

  @HasMany(() => Users)
  users: User[];
}
