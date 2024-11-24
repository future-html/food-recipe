import { Router } from 'express';
import { getTestimonials, createTestimonial } from '../controllers/testimonial.controller';

const router = Router();

// Get all testimonials
router.get('/', getTestimonials);

// Create a new testimonial
router.post('/', createTestimonial);

export default router;
