import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  rating: number;

  @ManyToOne(() => User, user => user.testimonials)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isApproved: boolean;
}
