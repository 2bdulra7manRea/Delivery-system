import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserAccess {
  @ObjectIdColumn()
  _id: string;
  @Column()
  user_id: string;

  @Column()
  user_type: string;

  @Column()
  access_token: string;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_blocked: boolean;

  @Column({ type: 'timestamptz' })
  last_access_date: Date;

  @Column()
  access_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
