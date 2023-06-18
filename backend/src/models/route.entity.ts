import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Route {
  @ObjectIdColumn()
  _id: string;

  @Column()
  city: string;

  @Column()
  area: string;

  @Column()
  locations_address: string;
}
