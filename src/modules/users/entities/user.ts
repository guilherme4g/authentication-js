import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { UserType } from './userType';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  typeUserId!: string;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => UserType, (userType) => userType.users)
  @JoinColumn({ name: 'typeUser_id' })
  userType!: UserType;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
