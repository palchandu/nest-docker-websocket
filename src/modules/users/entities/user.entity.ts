import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  READER = 'reader',
}
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;
}
