import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('user_types')
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
