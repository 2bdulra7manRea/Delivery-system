import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Review {
  @ObjectIdColumn()
  _id: string;

  @Column({ nullable: false })
  content: string;

  @Column()
  shipment_id: string;

  @Column({ default: 0 })
  rate: number;
}
