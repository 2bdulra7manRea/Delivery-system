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
export class DeliverySchedule {
  @ObjectIdColumn()
  _id: string;

  @Column()
  shipment_id: string;

  @Column({
    type: 'enum',
    enum: statusDelivery,
    default: statusDelivery.NOT_ACTIVE,
  })
  status: string;

  @Column({ type: 'timestamptz' })
  delivery_start: Date;

  @Column({ type: 'timestamptz' })
  delivery_deadline: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
