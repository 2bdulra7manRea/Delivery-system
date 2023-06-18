import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Signture {
  @ObjectIdColumn()
  _id: string;

  @Column()
  proof_image: string;

  @Column()
  shipment_id: string;
}
