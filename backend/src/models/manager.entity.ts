import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Manager {
  @ObjectIdColumn()
  _id: string;
  @Column()
  email: string;

  @Column()
  username: string;
  @Column()
  password: string;
}
