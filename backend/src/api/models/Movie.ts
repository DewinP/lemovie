import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  movieId!: string;

  @Column({ default: 0 })
  upvotes: number;

  @Column({ default: 0 })
  downvotes: number;
}
