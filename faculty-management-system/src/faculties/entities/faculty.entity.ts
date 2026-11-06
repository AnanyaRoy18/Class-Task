import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculty {

  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 50
  })
  Id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 150
  })
  Name: string;

  @Column({
    type: 'varchar',
    length: 150
  })
  expertise: string;

  @Column({
    name: 'no_of_publication',
    type: 'int'
  })
  noOfPublication: number;

}