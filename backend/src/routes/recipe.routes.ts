import { Router } from 'express';
import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipe.controller';
import { auth, checkRole } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', getRecipes);
router.get('/:id', getRecipeById);

// Protected routes
router.post('/', auth, createRecipe);
router.put('/:id', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);

// Admin only routes
router.post('/premium', [auth, checkRole(['admin'])], createRecipe);

export default router;
