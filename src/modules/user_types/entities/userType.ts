import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from '../../users/entities/user';

@Entity('user_types')
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  @OneToMany(() => User, (user) => user.userType, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'typeUser_id' })
  users!: User[];

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
