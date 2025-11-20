import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity('blogs')
export class BlogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'varchar', length: 500 })
  content: string;
  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;
}
