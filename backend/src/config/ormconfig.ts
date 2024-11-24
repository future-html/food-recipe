import { ConnectionOptions } from 'typeorm';
import { User } from '../entity/User';
import { Recipe } from '../entity/Recipe';
import { Testimonial } from '../entity/Testimonial';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'food_recipe',
  entities: [User, Recipe, Testimonial],
  synchronize: true,
  logging: true
};

export default config;
