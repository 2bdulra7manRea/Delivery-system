import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
enum statusDelivery {
  NOT_ACTIVE = 'NOT_ACTIVE',
  PICK_UP = 'PICK_UP',
  ON_PROCESS = 'ON_PROCESS',
  ON_DELIVERY = 'ON_DELIVERY',
  DELIVERED = 'DELIVERED',
}
@Entity()
export class Shipment {
  @ObjectIdColumn()
  _id: string;
  @Column()
  agent_id: string;
  @Column()
  customer_id: string;
  @Column()
  note: string;
  @Column({
    type: 'enum',
    enum: statusDelivery,
    default: statusDelivery.NOT_ACTIVE,
  })
  status: string;
  @Column()
  route_id: string;
  @Column({ type: 'timestamptz' })
  delivery_date: Date;
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
