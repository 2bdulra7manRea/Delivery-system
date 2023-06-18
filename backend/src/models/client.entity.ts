import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @ObjectIdColumn()
  _id: string;

  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  location_address: string;
  @Column({ unique: true })
  phone_number: string;

  @Column({ nullable: true })
  selife_image: string;
  @Column({ unique: true })
  identity_card_number: string;
  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
