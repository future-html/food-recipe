import { Request, Response, NextFunction } from 'express';
import { Recipe } from '../entity/Recipe';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppDataSource } from '../data-source';

const recipeRepository = AppDataSource.getRepository(Recipe);

export const createRecipe = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, ingredients, instructions, imageUrl, isPremium } = req.body;

    const recipe = recipeRepository.create({
      title,
      description,
      ingredients,
      instructions,
      imageUrl,
      isPremium,
      user: req.user
    });

    await recipeRepository.save(recipe);
    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

export const getRecipes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { category, search, premium } = req.query;

    let query = recipeRepository.createQueryBuilder('recipe')
      .leftJoinAndSelect('recipe.user', 'user');

    if (category) {
      query = query.andWhere('recipe.category = :category', { category });
    }

    if (search) {
      query = query.andWhere(
        '(LOWER(recipe.title) LIKE LOWER(:search) OR LOWER(recipe.description) LIKE LOWER(:search))',
        { search: `%${search}%` }
      );
    }

    if (premium === 'true') {
      query = query.andWhere('recipe.isPremium = :premium', { premium: true });
    }

    const recipes = await query.getMany();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

export const getRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const recipe = await recipeRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ['user']
    });

    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }

    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const recipe = await recipeRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ['user']
    });

    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }

    if (recipe.user.id !== req.user.id) {
      res.status(403).json({ message: 'Not authorized to update this recipe' });
      return;
    }

    recipeRepository.merge(recipe, req.body);
    const results = await recipeRepository.save(recipe);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const recipe = await recipeRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ['user']
    });

    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }

    if (recipe.user.id !== req.user.id) {
      res.status(403).json({ message: 'Not authorized to delete this recipe' });
      return;
    }

    await recipeRepository.remove(recipe);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
