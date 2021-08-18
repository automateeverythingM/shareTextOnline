import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Text {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  text: string;
  @Column({ default: () => Date.now() + 60 * 60 * 1000 })
  expires: number;
  @CreateDateColumn()
  created_at: Date;
}
