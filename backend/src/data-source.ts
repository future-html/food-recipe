import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Recipe } from "./entity/Recipe"
import { Testimonial } from "./entity/Testimonial"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "food_recipe",
    synchronize: true,
    logging: false,
    entities: [User, Recipe, Testimonial],
    migrations: [],
    subscribers: [],
})
