import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Agent {
  @ObjectIdColumn()
  _id: string;

  @Column()
  client_id: string;

  @Column()
  salary: number;

  @Column()
  number_of_shipments: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
